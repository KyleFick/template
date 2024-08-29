import * as React from "react";
import { cn } from "@/lib/utils";

const PriceCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto max-w-7xl px-6 lg:px-8",
      className
    )}
    {...props}
  />
))
PriceCard.displayName = "PriceCard"

const PriceCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
      className
    )}
    {...props}
  />
))
PriceCardTitle.displayName = "PriceCardTitle"

const PriceCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-6 text-lg leading-8 text-gray-600",
      className
    )}
    {...props}
  />
))
PriceCardDescription.displayName = "PriceCardDescription"

const PriceCardInfoArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none",
      className
    )}
    {...props}
  />
))
PriceCardInfoArea.displayName = "PriceCardInfoArea"

export { PriceCard, PriceCardTitle, PriceCardDescription, PriceCardInfoArea}