'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '@/lib/animations';

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes across various industries. Our clients range from small local businesses to medium-sized enterprises looking to optimize their IT operations and digital presence."
  },
  {
    question: "How long does a typical website development project take?",
    answer: "The timeline varies depending on the complexity of the project. A basic business website typically takes 4-6 weeks from concept to launch, while more complex e-commerce sites or custom web applications may take 8-12 weeks or longer."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance and support packages for all our services. These include regular updates, security patches, technical support, and content updates depending on your needs."
  },
  {
    question: "What ERP systems do you work with?",
    answer: "We specialize in implementing and optimizing a range of ERP systems including SAP Business One, Microsoft Dynamics, Odoo, and custom solutions based on your specific business requirements."
  },
  {
    question: "Can you help with data migration from our old systems?",
    answer: "Absolutely. Data migration is a key part of our implementation process. We ensure your valuable business data is safely transferred from legacy systems to new solutions with thorough validation and testing."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We provide detailed quotes based on project requirements. Depending on the nature of the work, we may use fixed-price quotes for well-defined projects or time-and-materials billing for more complex or evolving requirements."
  },
  {
    question: "Do you offer training for new systems?",
    answer: "Yes, comprehensive training is included with all our implementations. We ensure your team is comfortable and proficient with any new systems before we consider a project complete."
  },
  {
    question: "What is your approach to IT security?",
    answer: "Security is integrated into everything we do. We follow industry best practices, implement appropriate security measures based on your business needs, and provide guidance on ongoing security maintenance and employee awareness."
  }
];

export default function FaqSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and approach.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeIn} custom={index}>
                <AccordionItem value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-1 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
} 