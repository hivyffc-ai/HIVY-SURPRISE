'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { ServiceCategory, getVisiblePackages, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';

interface ServicePageProps {
  service: ServiceCategory;
}

export default function FFCServicePage({ service }: ServicePageProps) {
  // Get related packages
  const relatedPackages = getVisiblePackages().slice(0, 4);

  // Service FAQ data for schema
  const serviceFaqs = [
    {
      question: `How can I secretly book a ${service.name.toLowerCase()} surprise date at HIVY?`,
      answer: `Planning a surprise is easy with us! Call ${siteConfig.phone}, WhatsApp us, or fill our online form. We coordinate everything secretly so your partner doesn't know. Just bring them for the big reveal!`
    },
    {
      question: `What is included in the ${service.name.toLowerCase()} surprise date package?`,
      answer: "Our surprise date packages include 3 hours of private time, secret setup before you arrive, romantic decorations, welcome champagne, gourmet dinner, celebration cake, and soft music for the perfect reveal moment."
    },
    {
      question: "Is the venue completely private for the surprise?",
      answer: "Yes! Our venue is 100% private—no other guests during your surprise date. This makes the reveal even more magical. It's just you two in a beautifully decorated space when your partner walks in!"
    },
    {
      question: "Can I customize the surprise decorations?",
      answer: "Absolutely! Tell us your partner's favorite flowers, colors, or add personalized messages in rose petals. We love creating custom surprises—share your ideas and we'll make them happen secretly!"
    },
    {
      question: `What are the prices for ${service.name.toLowerCase()} surprise date packages?`,
      answer: "Our surprise date packages start from ₹5,100 and go up to ₹6,500. Each package includes secret venue setup, decorations, food, music, cake, and dedicated coordination with no hidden costs."
    },
    {
      question: "What time slots are available for surprise dates?",
      answer: "We offer flexible 3-hour time slots: Lunch (12-3 PM), Afternoon (1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM). Evening slots are most popular for surprise reveals!"
    },
    {
      question: "How do you keep the surprise a secret?",
      answer: "We communicate only with you via private WhatsApp messages. All setup is done before your partner arrives. Our team guides you on timing and how to bring your partner without suspicion. We've never had a surprise spoiled!"
    },
    {
      question: "What food is served during the surprise date?",
      answer: "Our gourmet menu includes welcome drinks, cheese fondue with cheese balls, wedges & nachos, signature mocktails, delicious main course items, and dessert with chocolate brownie. All vegetarian. Jain options available on request."
    },
    {
      question: "Is parking available at the surprise venue?",
      answer: "Yes, ample free parking is available on-site for both two-wheelers and four-wheelers. You can drive directly to our venue without any parking worries."
    },
    {
      question: "What is the cancellation and rescheduling policy?",
      answer: "We offer free rescheduling up to 48 hours before your slot. Cancellations made 48+ hours in advance receive a refund minus processing fees. We understand plans can change and we're flexible."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": serviceFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-stone-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-700">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-rose-700">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-700 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {service.emoji} {service.name}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                {service.name} in Surat
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-white text-rose-700 hover:bg-rose-50 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9 Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={`${service.name} Service Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-rose-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={`${service.name} Service Page`} />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Why Choose HIVY - Surprise Date Planners for {service.name}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🔒", title: "100% Secret", desc: "We plan everything secretly" },
              { emoji: "🌙", title: "Stunning Setup", desc: "Private & romantic ambiance" },
              { emoji: "🍽️", title: "Delicious Food", desc: "Curated surprise dinner" },
              { emoji: "📸", title: "Photo-Ready", desc: "Capture their reaction" },
            ].map((item, index) => (
              <Card key={index} className="border-stone-200 text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages for this Service */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Packages
            </h2>
            <p className="text-gray-600">Choose from our surprise date packages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-stone-200 group">
                  <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center">
                    <span className="text-5xl">{pkg.emoji}</span>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-rose-700 transition-colors line-clamp-1">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-lg font-bold text-rose-700">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button className="bg-rose-700 hover:bg-rose-800">
                View All Packages <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Keywords/Related Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Popular {service.name} Services
            </h2>
            <p className="text-gray-600">Explore our specialized {service.name.toLowerCase()} surprise date services in Surat</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.keywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/services/${service.slug}/${keyword.slug}`}
                className="block"
              >
                <Card className="border-stone-200 hover:border-rose-200 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-rose-700 transition-colors flex items-center justify-between">
                      {keyword.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-rose-700" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Across Surat
            </h2>
            <p className="text-gray-600">We serve all areas of Surat</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {suratAreas.slice(0, 15).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-rose-700 hover:text-white transition-colors border border-stone-300 text-sm"
              >
                {service.name} in {area.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-rose-700 rounded-full text-white hover:bg-rose-800 transition-colors text-sm"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">
                Book Your {service.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to plan the perfect surprise date? Fill out the form and our team will secretly coordinate everything with you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-rose-700" />
                  <span>No commitment booking request</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-rose-700" />
                  <span>Quick WhatsApp confirmation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-rose-700" />
                  <span>Flexible rescheduling available</span>
                </div>
              </div>
            </div>
            
            <div>
              <FFCBookingForm pageTitle={`${service.name} Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} FAQs
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {serviceFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-stone-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${service.name} Gallery`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
