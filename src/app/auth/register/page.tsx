/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import Image from 'next/image';

import { Eye, EyeOff } from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z\s]+$/),
  lastName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[a-zA-Z\s]+$/),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(50)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .refine((val) => val, {
      message: 'Not valid Password',
    }),
  acceptToS: z
    .boolean()
    .refine((val) => val, {
      message: 'You need to accept the Terms of Service.',
    })
    .default(false),
});
export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptToS: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[600px] h-[550px] border rounded-lg p-[100px] flex flex-col justify-center gap-6">
        <div>
          <h1 className="font-semibold text-3xl">Create an account</h1>
          <p>
            You already have an account?
            <a href="/auth/login">
              &nbsp;<span className="text-purple-600 text-decoration-line: underline">Login</span>
            </a>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6">
            <div className="w-[400px] flex flex-col gap-2">
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => {
                    return (
                      <FormItem className="h-10">
                        <FormControl>
                          <Input placeholder="First Name" {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => {
                    return (
                      <FormItem className="h-10">
                        <FormControl>
                          <Input placeholder="Last Name" {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem className="h-10">
                      <FormControl>
                        <Input placeholder="Email" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem className="h-10">
                      <FormControl>
                        <Input placeholder="Enter your password" type="password" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <FormField
              control={form.control}
              name="acceptToS"
              render={({ field }) => (
                <FormItem className="items-top flex space-x-2 justify-start">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="grid gap-1.5 leading-none justify-center m-0">
                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I agree to the terms and conditions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        <div className="flex gap-4 justify-center">
          <Separator className="w-1/3 self-center" />
          <p className="w-1/3 text-xs text-center">Or register with</p>
          <Separator className="w-1/3 self-center" />
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="w-full">
            <Image src="/icons/discord.svg" width={14} height={14} alt="discord" /> Discord
          </Button>
          <Button variant="outline" className="w-full">
            <Image src="/icons/github.svg" width={14} height={14} alt="discord" /> Github
          </Button>
        </div>
      </div>
    </main>
  );
}
