"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import './faq.css'
import * as React from "react"
import { useEffect } from 'react'

export default function Faq () {
    return (
      
      <div className="faq-css">
      <h1 className="faq-title">
      &middot; FAQ &middot;
      </h1>
      <Accordion type="single" collapsible className="w-full">
      
      <AccordionItem value="item-1">  
        
        <div className="faq-text">
        <AccordionTrigger> <b style={{color: 'rgb(32, 73, 79)'}}> How can I join DISC? </b></AccordionTrigger>
        </div>
        <AccordionContent>
          
          Yes. It adheres to the WAI-ARIA design pattern.
          
        </AccordionContent>

       
      
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger>
        <b style={{color: 'rgb(32, 73, 79)'}}>
          What is the time commitent to be a part of DISC?
          </b>
          </AccordionTrigger>
          
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger><b style={{color: 'rgb(32, 73, 79)'}}>Can I still participate in DISC if I am not on a project team? </b> </AccordionTrigger>
        <AccordionContent>
          Yes! We have many general member events, and all are welcome to attend the DISC studios!
        </AccordionContent>
      </AccordionItem>
    </Accordion> 
    </div>
    );
}
