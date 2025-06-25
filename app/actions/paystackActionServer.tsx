// app/actions/paystack.ts
'use server';

import nodemailer from 'nodemailer';


export async function initializePaystackPayment({ email, amount }: { email: string; amount: number }) {
    try{
        const res = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            amount: amount * 100, // Amount is in kobo
            currency: "NGN",
            callback_url: "http://localhost:3000/payment/success", // optional
            }),
        });

        return res.json();
    }catch(err){
        console.log("PayStack Error: ", err)
    }
}



export async function handleSuccessfulPayment(reference: string) {
  const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  });

  const result = await res.json();
  if (!result.status || result.data.status !== 'success') return;

  const email = result.data.customer.email;
  const amount = result.data.amount / 100;
  const items = result.data.metadata?.items ?? [];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Email to buyer
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: "belewumulikatu@gmail.com",
    subject: "Order Receipt",
    html: `
      <h2>Thanks for your purchase!</h2>
      <p>Amount Paid: ₦${amount}</p>
      <ul>${items.map((i:{name:string, qty:string}) => `<li>${i.name} x ${i.qty}</li>`).join('')}</ul>
    `,
  });

  // Email to admin
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Order Received",
    html: `
      <h3>New order from ${email}</h3>
      <p>Total: ₦${amount}</p>
      <ul>${items.map((i:{name:string, qty:string}) => `<li>${i.name} x ${i.qty}</li>`).join('')}</ul>
    `,
  });
}
