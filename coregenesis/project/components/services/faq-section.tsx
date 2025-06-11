'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fadeIn, staggerContainer } from '@/lib/animations';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of IT services including ERP consulting, website development, data dashboards, and local IT setup. Our services are designed to help businesses streamline operations and leverage technology effectively."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A basic website might take 2-4 weeks, while ERP implementation could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing support and maintenance for all our services. We offer different support packages to match your business needs, from basic technical support to comprehensive managed services."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs. We believe in transparent pricing with no hidden costs."
  },
  {
    question: "Can you help with existing systems?",
    answer: "Absolutely! We can help optimize and integrate with your existing systems. We'll assess your current setup and recommend improvements or necessary upgrades."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes, we work with businesses of all sizes. We understand that small businesses have unique needs and budget constraints, and we tailor our solutions accordingly."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily service the local area, but our digital services (like website development and ERP consulting) are available globally. Contact us to confirm if we cover your location."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule a free consultation to discuss your needs and provide a tailored solution."
  }
];

export default function FaqSection() {
  return (
    <section className="py-16">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center mb-8">
          Find answers to common questions about our services
        </p>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
} 