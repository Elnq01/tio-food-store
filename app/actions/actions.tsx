// actions/actions.ts
'use server'
import { z } from "zod";


const User = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().min(2, { message: 'email must be at least 2 characters long.' }), 
  password: z.string().min(8, { message: 'Be at least 8 characters long' })
});


// extract the inferred type
// type User = z.infer<typeof User>;

 
export async function signup(prevState: any, formData: FormData) {
  // Validate form fields
  const validatedFields = User.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  return {description:"Successfully created a user!"}
 

}


// export async function getImage(prevState: any) {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products/1')
//     const product = await response.json()

//     // Make sure the product data is structured properly
//     if (!product) {
//       throw new Error('Failed to fetch product data')
//     }

//     return { description: product.description } // Ensure proper return
//   } catch (err) {
//     // Return a default error description or something useful
//     return { description: 'Failed to fetch product data' }
//   }
// }
