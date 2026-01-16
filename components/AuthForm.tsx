"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

// -------------------- TYPES --------------------
type FormType = "sign-in" | "sign-up"

// -------------------- SCHEMA --------------------
const authFormSchema = (type: FormType) =>
  z.object({
    name: type === "sign-up"
      ? z.string().min(3, "Name must be at least 3 characters")
      : z.string().optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })

// -------------------- COMPONENT --------------------
const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const isSignIn = type === "sign-in"

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (type === "sign-up") {
      toast.success("Account created successfully!");
       router.push("/sign-in"); 
      console.log("Sign Up", values)
    } else {
      toast.success("Signed in successfully!");
      router.push("/")
      console.log("Sign In", values)
    }
  }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex justify-center items-center gap-2">
          <img src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-xl font-semibold">AiVoice</h2>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Practical job interview with AI
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 px-10 pb-10"
        >
          {!isSignIn && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isSignIn ? "Sign In" : "Create Account"}
          </Button>
        </form>
      </Form>

      <p className="text-center pb-6">
        {isSignIn ? "No account?" : "Already have an account?"}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="ml-1 font-bold"
        >
          {isSignIn ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  )
}

export default AuthForm
