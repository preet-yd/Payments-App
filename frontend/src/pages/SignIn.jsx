import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

import React from 'react'

function SignIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your infromation to access your account"} />
                <InputBox placeholder="preet@gmail.com" label={"Email"} />
                <InputBox placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign In"} />
                </div>
                <BottomWarning label={"Dont't have an account?"} buttonText={"Sign Up"} to={"/signin"} />
            </div>
        </div>
    </div>

}

export default SignIn