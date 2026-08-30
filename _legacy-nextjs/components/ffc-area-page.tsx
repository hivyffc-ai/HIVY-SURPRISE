'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { AreaConfig, getVisiblePackages, serviceCategories, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Get nearby areas (excluding current)
  const nearbyAreas = suratAreas.filter(a => a.slug !== area.slug).slice(0, 8);

  // Area FAQ data for schema
  const areaFaqs = [
    {
      question: `How do couples from ${area.name} reach HIVY Surprise Date?`,
      answer: `HIVY Surprise Date is conveniently located in Surat and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Contact us for exact directions.`
    },
    {
      question: "What surprise date experiences do you offer?",
      answer: "We offer private surprise dates, private cabin dates, outdoor date setups, sunset dates, midnight surprise dates, and customized romantic experiences tailored to your preferences."
    },
    {
      question: "What are the booking options available?",
      answer: `Couples from ${area.name} can book via WhatsApp, phone call, or our online form. We recommend booking 2-3 days in advance for your preferred slot.`
    },
    {
      question: "Is the venue private?",
      answer: "Yes! Your surprise date is 100% private. No other guests will be present during your booking slot, ensuring complete intimacy."
    },
    {
      question: `What is included in a surprise date package for ${area.name} couples?`,
      answer: "Our surprise date packages include 3 hours of private venue access, romantic decorations with fairy lights and flowers, welcome drinks, gourmet dinner, celebration cake, soft romantic music, and a dedicated host to ensure your surprise goes perfectly."
    },
    {
      question: `What are the prices for surprise date packages near ${area.name}?`,
      answer: "Our surprise date packages start from ₹5,100 and go up to ₹6,500. Each package includes venue access, decorations, food, music, cake, and dedicated service with no hidden costs."
    },
    {
      question: "What time slots are available for surprise dates?",
      answer: "We offer flexible 3-hour time slots throughout the day: Lunch (12-3 PM), Afternoon (1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM)."
    },
    {
      question: `Can I plan a surprise for my partner without them knowing?`,
      answer: "Absolutely! We specialize in secret surprise planning. Share your plan with our team via WhatsApp, coordinate the timing, and we'll handle all the setup before you arrive. Your partner will have no idea until the big reveal!"
    },
    {
      question: "Can I customize the surprise date decorations?",
      answer: "Yes! All our setups are fully customizable. Choose specific color themes, add personalized messages, request special flowers, or include photos. Just share your vision and we'll make it happen."
    },
    {
      question: "Is parking available at the venue?",
      answer: `Yes, free parking is available at our venue for both two-wheelers and four-wheelers. Couples from ${area.name} can drive directly to us without any parking worries.`
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
            "mainEntity": areaFaqs.map(faq => ({
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
            <Link href="/areas" className="text-gray-500 hover:text-rose-700">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-700 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Surat
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Surprise Date Experiences in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                HIVY Surprise Date brings premium romantic surprise date experiences to couples in {area.name}, Surat. Plan unforgettable surprise dates for your boyfriend, girlfriend, husband, or wife!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-white text-rose-700 hover:bg-rose-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={`${area.name} Area Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-rose-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={`${area.name} Area Page`} />
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Surprise Date Services in {area.name}
            </h2>
            <p className="text-gray-600">
              All surprise date experiences available for couples in {area.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-rose-200 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-rose-700 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      in {area.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Romantic Surprise Dates Near {area.name}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Are you looking for the perfect surprise date venue near {area.name}, Surat? HIVY Surprise Date is your destination for creating unforgettable romantic moments with your loved one.
                </p>

                <p className="text-gray-600 mb-6">
                  Whether you're planning a surprise date for your boyfriend, girlfriend, husband, or wife, our venue offers stunning private setups and elegant private cabins that provide the perfect ambiance for your special surprise date experience.
                </p>

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-rose-700" />
                    Surprise Date Experiences in {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Private Surprise Date Setup",
                      "Private Cabin Date Night",
                      "Outdoor Date Experience",
                      "Sunset Date Setup",
                      "Midnight Surprise Date",
                      "Weekend Romantic Date",
                      "First Date Setup",
                      "Monthly Anniversary Date"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-700 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Why Couples in {area.name} Love Us
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>Convenient Location:</strong> Easy access from {area.name} and all parts of Surat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>100% Privacy:</strong> Your surprise date is completely private with exclusive booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>6 Unique Setups:</strong> Choose from private and private cabin experiences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>All-Inclusive Packages:</strong> Food, decorations, music, and more included.</span>
                  </li>
                </ul>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Popular Date Packages for {area.name} Couples
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {getVisiblePackages().slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-rose-200 group bg-white">
                        <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center">
                          <span className="text-5xl">{pkg.emoji}</span>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-rose-700 transition-colors">
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
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-rose-700 hover:bg-rose-800">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Surprise Date Services in Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-rose-50 rounded-full text-gray-700 hover:bg-rose-700 hover:text-white transition-colors border border-rose-200"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-rose-700 rounded-full text-white hover:bg-rose-800 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Surprise Dates in {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {areaFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-200 px-6">
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
      <FFCGalleryCompact title={`Surprise Date Experiences in ${area.name}`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
