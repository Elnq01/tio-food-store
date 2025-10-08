"use client"
import { Button, Card, Col } from "react-bootstrap";
import SignInandSignUpcss from "./signinandsignup.module.css";
// import {handleSignIn} from '../lib/auth';
// import { redirect } from "next/dist/server/api-utils";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Logo from "../component/UI/logo";

export default function SignInandSignUp(){
    const pathname = usePathname();
    console.log("Current URL: ", pathname)

    return (<Col xs="12" sm="12" md="12" xl="12" xxl="12" className={SignInandSignUpcss.container}>
        <div className={SignInandSignUpcss.overlay}></div>
        <Card className={`${SignInandSignUpcss.card} shadow`}>
            <Logo height={100} width={100} />
            <h3 style={{fontWeight:'bold', marginTop:'10px'}}>Welcome</h3>

            <Button onClick={() => {
                // signIn("google", { callbackUrl: pathname })
                signIn("google", { callbackUrl: "/" })
                // signIn("google")
                // redirect('/')
            }}
            style={{
                display:'flex', flexDirection:'row', 
                columnGap:'20px', alignItems:'center', 
                justifyContent:'center', background:'#ea4335',
                border:'1px solid red', width:'100%',
                marginTop:'15px'
            }}
            >
                <FaGoogle size={18} /> <p>SignIn or SignUp with Google</p>
            </Button>
        </Card>
    </Col>)
}