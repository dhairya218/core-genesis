'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeIn } from '@/lib/animations';
import FaqSection from '@/components/services/faq-section';
import { getServices, getIconComponent, Service } from '@/lib/services';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching services...');
        const data = await getServices();
        console.log('Fetched services:', data);
        setServices(data);
      } catch (err) {
        console.error('Error in fetchServices:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          <h2 className="text-2xl font-semibold mb-2">Error Loading Services</h2>
          <p>{error}</p>
          <Button 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">No Services Available</h2>
          <p className="text-muted-foreground">Please check back later for our services.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Practical IT solutions designed to help your business grow and succeed
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => {
          const IconComponent = getIconComponent(service.icon_name);
          return (
            <motion.div key={service.id} variants={fadeIn} custom={index}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden border-2 hover:border-primary/20">
                <CardHeader className="pb-2">
                  <div className="mb-3">
                    <IconComponent className="h-10 w-10 text-chart-1" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary/70"></div>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/inquiry" className="w-full">
                    <Button className="w-full group">
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="mt-24">
        <FaqSection />
      </div>
      
      <motion.div
        className="mt-16 max-w-3xl mx-auto text-center py-8 px-6 rounded-lg bg-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Not sure what you need?</h2>
        <p className="mb-6 text-muted-foreground">
          Get in touch for a free consultation to discuss your business needs and how we can help.
        </p>
        <Link href="/inquiry">
          <Button size="lg" variant="default">
            Book a Free Consultation
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}