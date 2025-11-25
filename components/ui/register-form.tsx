"use client";

import { useActionState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/actions/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";


export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

const [state, formAction, isPending] = useActionState(registerUser, null);
// const handleSignUp = async (formData: FormData) =>{
  
//   "use server";
// const name = FormData.get("name") as string;
// const email = FormData.get("email") as string;
// const password = FormData.get("password") as string;
// };

console.log("Registration state:", state,"isPending:", isPending);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg capitalize">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="name" >Name</FieldLabel>
                <Input
                  id="name" 
                  name ="name"
                  type="text"
                  placeholder="John doe"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@email.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
               
                <Input id="password" name="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer" disabled={isPending}>Register</Button>
                <Button variant="outline" type="button" disabled>
                  Continue with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
