"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { 
    ChartConfig, 
    ChartContainer, 
    ChartTooltip, 
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent    

} from "@/components/ui/chart";
import { Monitor } from "lucide-react";
import { BarChartData } from "./ChartData";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2536eb",
        icon: Monitor,
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function barChart() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={BarChartData}>
            <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}

