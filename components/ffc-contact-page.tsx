'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

const contactFaqs = [
  { question: "How do I book a surprise date at HIVY?", answer: "WhatsApp us at 9727027278 with your surprise date plan. Share the occasion, preferred package, and timing. We'll coordinate everything secretly to ensure the perfect surprise reveal." },
  { question: "Can I plan a surprise without my partner knowing?", answer: "Absolutely! All communication happens through private channels with the planners. We never contact or share information with the person being surprised." },
  { question: "What details do I need to provide for surprise bookings?", answer: "Share the date, time, package preference, any customizations, and details about the surprise reveal plan. The more we know, the better we can execute your perfect surprise." },
  { question: "How soon should I book for a surprise date?", answer: "5-7 days advance booking is recommended for proper surprise planning. This gives us time to customize decorations and coordinate timing perfectly." },
  { question: "Can HIVY help me plan the surprise reveal?", answer: "Yes! Our team has coordinated hundreds of successful surprises. We'll suggest reveal timings, help coordinate arrival, and ensure every detail is perfect for the moment." },
  { question: "What payment methods are accepted for surprise bookings?", answer: "We accept UPI, bank transfers, and cards. For surprise bookings, we recommend completing payment early so there are no last-minute communications that might reveal the secret." },
  { question: "Can I visit HIVY before planning a surprise?", answer: "Yes! We recommend visiting to see the venue and visualize the surprise setup. Schedule a discrete visit when your partner isn't around to maintain the surprise." },
  { question: "How do I coordinate timing for the surprise?", answer: "Share your arrival plan with us. We'll have everything ready before you arrive with your partner. Communicate via WhatsApp on the day for real-time coordination." },
  { question: "Can I reschedule a surprise booking?", answer: "Yes, contact us 48 hours in advance for rescheduling. We understand plans change, and we'll accommodate new dates based on availability." },
  { question: "Where is HIVY located?", answer: "HIVY is near VR Mall, Dumas Road, Surat. The exact location is shared after booking confirmation to maintain exclusivity and ambiance." }
];

export default function FFCContactPage() {
  const contactFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://surprisedatesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://surprisedatesurat.com/contact" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to help you plan the perfect surprise date! Book your surprise or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">We're available for calls and booking inquiries</p>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-xl font-bold text-rose-700 hover:text-rose-800"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Quick responses via WhatsApp</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-rose-700 hover:text-rose-800"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🌙 Dinner (Indoor/Private)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-1000 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Celebration
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info SEO Section */}
      <section className="py-16 bg-rose-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Planning Your Perfect Surprise</h2>
          <div className="prose prose-lg prose-rose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-rose-900 mt-6">How to Contact Us Secretly for Surprises</h3>
            <p>
              Planning a surprise requires discretion, and our team understands the importance of keeping your plans completely secret. When you contact us about a surprise date or celebration, all communication happens exclusively with you — we never reach out to the person being surprised under any circumstances. Whether you message us on WhatsApp, call our booking number, or fill out the contact form, you can be confident that every detail you share stays between you and our surprise planning team. Our staff is trained in surprise coordination and knows how to handle inquiries discreetly.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Private Communication Channels We Use</h3>
            <p>
              WhatsApp is our primary communication channel for surprise bookings because it allows for quick, private conversations at any time. When you message us, our surprise specialists respond promptly and keep all details confidential. We recommend saving our number under a generic name in your phone if you share devices with your partner. For those who prefer voice calls, you can call us when your partner is not around, and our team will never call you back unexpectedly — we always message first to ensure you can speak freely. Email communication is also available for those who want to plan every detail in writing.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Information Needed for Surprise Planning</h3>
            <p>
              To plan the perfect surprise, we need certain details from you. Please share the occasion for the surprise, whether it is a birthday, anniversary, proposal, or just-because romantic gesture. Let us know your preferred date and time slot, the package or theme you envision, and any customization requests. Most importantly, tell us about the person being surprised — their preferences, favorite colors, any personal touches you want incorporated, and how you plan to bring them to the venue. The more we know, the better we can tailor every element of the surprise to create an unforgettable moment.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Coordinating Timing for Reveals</h3>
            <p>
              The timing of a surprise reveal is crucial, and our team has perfected this coordination over hundreds of successful surprises. When you book, tell us exactly when you plan to arrive with your partner. We will ensure that everything is ready and perfect at least thirty minutes before your expected arrival. If there are delays on your way, simply send us a quick WhatsApp message and we will adjust accordingly. For proposals, we can coordinate the exact moment you want to pop the question — whether it is as you walk into the decorated tent, after a specific course of the meal, or at any other moment you envision.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Real-Time Coordination on Surprise Day</h3>
            <p>
              On the day of your surprise, our team is on standby to coordinate every detail in real time. You can message us when you leave your location, when you are ten minutes away, or whenever updates are relevant. Our staff tracks your progress and ensures that candles are lit, music is playing, and everything is picture-perfect the moment you walk through the door. If you need last-minute adjustments, we handle them seamlessly. This real-time coordination is what makes our surprise executions so flawless — couples consistently tell us that the reveal moment exceeded their expectations because every element came together perfectly.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Our Team's Experience with Surprises</h3>
            <p>
              Our surprise planning team has coordinated hundreds of successful surprises ranging from romantic proposals to milestone birthday celebrations to anniversary reveals. This experience means we have encountered virtually every scenario and know how to handle unexpected situations gracefully. We can suggest reveal strategies based on what has worked beautifully for other couples, offer creative ideas to make your surprise unique, and anticipate potential challenges before they arise. When you work with HIVY, you benefit from years of surprise planning expertise applied to your special moment.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Payment Options for Surprise Bookings</h3>
            <p>
              For surprise bookings, we recommend completing payment in advance to avoid any transactions when you arrive with your partner. This ensures the experience flows smoothly without any awkward payment moments interrupting the romance. We accept UPI payments through Google Pay, PhonePe, and Paytm, as well as bank transfers, credit cards, debit cards, and cash. You can pay the full amount in advance or the standard 50% advance with the balance due before the celebration — whichever you prefer. All payments are confirmed discreetly through our private communication channels.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Location and Arrival Coordination</h3>
            <p>
              HIVY is located near VR Mall on Dumas Road in Surat's Adajan area, offering easy access from all parts of the city. When bringing your partner for a surprise, you can blindfold them for the final portion of the drive or simply tell them you're going somewhere special without revealing the destination. Our venue is set back from the main road for privacy, and ample free parking is available. When you arrive, our staff will be ready to welcome you discreetly and guide you both to your beautifully prepared surprise setup.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Tips for Maintaining the Secret</h3>
            <p>
              Keeping a surprise secret until the big reveal requires some planning. We suggest using private browsing when researching our packages, saving our contact under a neutral name, and communicating during times when your partner is not around. If you need to make a payment, ensure the transaction description is generic. Plan a believable excuse for where you are going on the day of the surprise — couples often pretend they are heading to dinner at a restaurant or to meet friends. Our team can also help you craft a convincing cover story if needed.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Why Trust HIVY with Your Surprise</h3>
            <p>
              Entrusting your special surprise to us means working with a team that genuinely cares about making your moment perfect. We understand the emotional weight of surprises — the planning, the anticipation, the nervousness, and ultimately the joy of seeing your partner's reaction. Our track record of successful surprises, our attention to discretion, our real-time coordination capabilities, and our beautiful venue setups combine to create the ideal environment for your reveal. Couples who have trusted us with their surprises consistently share that the experience exceeded their expectations and created memories they will cherish forever.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit HIVY - Surprise Date Planners in Surat</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0665549872024!2d72.78282829999999!3d21.1895149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4fc7b5dbb9%3A0xb1aa92785a2443b8!2sHIVY%20-%20Place%20For%20Celebration!5e0!3m2!1sen!2sin!4v1769339702912!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HIVY - Surprise Date Planners Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/HIVY-Place-For-Celebration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rose-700 hover:bg-rose-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Contact & Surprise Booking FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-rose-50 rounded-lg border border-rose-200 px-6">
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

      {/* Google Reviews Section */}
      <FFCReviewsSlider />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
