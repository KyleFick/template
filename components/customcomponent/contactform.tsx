"use client"

import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

export function ContactUsForm() {
    // 1. Define your Form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel> Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Full Name..." {...field} />
                        </FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="Email Address..." {...field} />
                        </FormControl>
                        <FormLabel>Cellphone No.</FormLabel>
                        <FormControl>
                            <Input placeholder="Cell no." {...field} />
                        </FormControl>
                        <FormLabel>Message</FormLabel>
                        <FormControl className="h-64 justify-items-start">
                            <Input placeholder="Message..." className="h-64 flex text-wrap" {...field} />
                        </FormControl>
                        <FormDescription >
                        Our Team will Contact you Soon. Thank you For Considering Code Velocity
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
                </form>
        </Form>
    );
}