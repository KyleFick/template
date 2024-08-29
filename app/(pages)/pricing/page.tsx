import {BasicPricing, StandardPricing, ProfessionalPricing} from "@/components/customcomponent/pricing";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
 import {
    PriceCard, PriceCardTitle, PriceCardDescription, PriceCardInfoArea
 } from "@/components/customcomponent/pricingcard";

export default function PricingPage(){
    return (
        <Carousel>
            <CarouselContent>
            <CarouselItem> <BasicPricing/> </CarouselItem>
            <CarouselItem> <StandardPricing/> </CarouselItem>
            <CarouselItem> <ProfessionalPricing/> </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
        
    );
}
