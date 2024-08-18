"use client";

import Iconify from "@/components/html/iconify";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { COLORS } from "@/styles";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="animate flex [&[data-state=open]]:bg-graydarker/20 hover:bg-graydarker/20 rounded-md">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn("pr-4 md:pr-6 flex items-center justify-between gap-2 w-full [&[data-state=open]>svg]:rotate-180", className)}
      {...props}
    >
      {children}
      <Iconify icon={ICONS.accordionArrow} rotate={2} width={15} color={COLORS.gray} className="animate" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("mt-2", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
