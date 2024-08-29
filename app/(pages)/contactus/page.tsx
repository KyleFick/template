import { Button } from "@/components/ui/button";
import { ContactUsForm } from "@/components/customcomponent/contactform";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    CardFooter, 
    CardDescription
 } from "@/components/ui/card";

export default function ContactUsPage(){
    return (
       <Card>
        <CardHeader>
            <CardTitle>
                <p>Contact Us</p>
            </CardTitle>
            <CardDescription>
                For more information on our services or custom work 
            </CardDescription>
        </CardHeader>
        <CardContent>
        <ContactUsForm/>
        </CardContent>
        <CardFooter>
            <p>Company@email.com</p>
        </CardFooter>
       </Card> 
    )
}