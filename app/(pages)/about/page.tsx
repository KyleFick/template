import { Button } from "@/components/ui/button";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    CardFooter, 
    CardDescription
 } from "@/components/ui/card";

export default function AboutPage(){
    return (
    <main className="min-h-screen flex items-center justify-center">
       <Card>
        <CardHeader>
            This is a Header
            <CardTitle>
                <p>This is a Title</p>
            </CardTitle>
            <CardDescription>
                This is the Description
            </CardDescription>
        </CardHeader>
        <CardContent>
            This is where the content goes 
            <Button>Fuck this </Button>
        </CardContent>
        <CardFooter>
            <p>This is a Footer</p>
        </CardFooter>
       </Card>
    </main> 
    )
}