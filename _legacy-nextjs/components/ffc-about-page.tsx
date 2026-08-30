'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

// About page FAQs for Surprise Dates
const aboutFaqs = [
  {
    question: "How does HIVY help plan a secret surprise date?",
    answer: "HIVY specializes in secret surprise planning. We coordinate with you via private WhatsApp messages, handle all setup secretly before your partner arrives, and ensure every detail is perfect for the big reveal moment. Our team is experienced in keeping surprises completely hidden."
  },
  {
    question: "What makes HIVY the best surprise date venue in Surat?",
    answer: "HIVY is Surat's top-rated surprise date venue with 4.9★ Google rating, offering complete privacy, expert secret planning assistance, stunning romantic setups, and a team dedicated to creating unforgettable surprise moments for couples."
  },
  {
    question: "Can I plan a surprise proposal at HIVY?",
    answer: "Absolutely! HIVY is perfect for surprise proposals. We help create the ideal romantic setting with custom decorations, rose petals, candles, and personalized touches. Many couples have had their dream proposal moments at our venue."
  },
  {
    question: "How do you keep the surprise a secret from my partner?",
    answer: "We communicate only with the person planning the surprise. All coordination happens via private channels. On the day, we complete the entire setup before your partner arrives. You can give us a cover story, and we'll play along perfectly."
  },
  {
    question: "What surprise date ideas does HIVY offer?",
    answer: "HIVY offers various surprise date setups including romantic tent setups, candlelight dinner surprises, balloon-filled celebrations, rose petal arrangements, themed décor, and customized surprise reveals. Each surprise is tailored to your vision."
  },
  {
    question: "Can I surprise my partner for our anniversary at HIVY?",
    answer: "Yes! Anniversary surprises are one of our most popular bookings. Whether it's your first anniversary or 25th, we create magical surprise setups that honor your relationship milestones with romantic decorations and special touches."
  },
  {
    question: "How far in advance should I book a surprise date?",
    answer: "We recommend booking 5-7 days in advance for surprise dates, especially for weekends. This gives us time to plan every detail perfectly. Urgent surprise bookings may be possible based on availability."
  },
  {
    question: "Can I bring personal items for the surprise setup?",
    answer: "Absolutely! We encourage personal touches. Bring photos, letters, gifts, or any meaningful items. Our team will incorporate them into the surprise setup to make the moment even more special and personalized."
  },
  {
    question: "What if my partner suspects the surprise?",
    answer: "Our team helps with cover stories and coordination. We can suggest ways to bring your partner to the venue without raising suspicion. We've successfully pulled off hundreds of surprises with various creative approaches."
  },
  {
    question: "Do you offer photography for surprise reveals?",
    answer: "Yes! We offer professional photography packages starting at ₹2700 that capture the surprise reveal moment, your partner's reaction, and the entire celebration. Same-day delivery ensures you have memories immediately."
  }
];

export default function FFCAboutPage() {
  // FAQ Schema for About page
  const aboutFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://surprisedatesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://surprisedatesurat.com/about" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY - Surprise Date Planners
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's #1 Destination for Planning Unforgettable Surprise Dates & Romantic Reveals
          </p>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Surprise Dates Come Alive
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY - Surprise Date Planners</strong> in Surat, we understand that planning the perfect surprise is stressful. Finding a secret venue, setting up decorations without your partner knowing, coordinating everything—it's a lot! That's why we exist.
                </p>
                <p>
                  We transformed a stunning <strong>private space into Surat's ultimate surprise date destination</strong>, complete with fairy lights, rose petals, and romantic setups. We handle ALL the secret planning—you just bring your partner for the big reveal!
                </p>
                <p>
                  From heartfelt <strong>surprise birthday dates</strong> and <strong>anniversary reveals</strong> to unforgettable <strong>surprise proposals</strong>, midnight surprises, and "just because" romantic dates, we've secretly planned <strong>500+ magical surprise moments</strong>.
                </p>
                <p className="font-medium text-rose-800">
                  Our mission: Help you create the perfect surprise date for your loved one.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-rose-700 text-white">
                    Plan Your Surprise Date - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/4.webp"
                  alt="HIVY - Surprise Date Planners Surat - Romantic Swing of Love Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Surprise Dates Planned</p>
                  <p className="text-sm opacity-90">Creating magical surprises since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Surprise Dates Planned" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Unique Surprise Setups" },
              { icon: Clock, number: "5+", label: "Years of Planning" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-rose-700" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-rose-700">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/7.webp"
                  alt="HIVY - Surprise Date Planners Team - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Your Surprise Planning Team</p>
                  <p className="text-sm opacity-90">We keep your secret safe</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Your Secret Surprise Planning Team
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY - Surprise Date Planners</strong>. We're experts at secretly coordinating everything so you can focus on the big moment.
                </p>
                <p>
                  From our talented chefs who prepare the surprise dinner, to our decorators who set up before you arrive, each member of our team is dedicated to making your surprise date absolutely perfect.
                </p>
                <p>
                  Whether you're planning a <strong>surprise date for your girlfriend</strong>, a <strong>birthday surprise for your boyfriend</strong>, an <strong>anniversary surprise</strong>, or a <strong>surprise proposal</strong>, our team handles all the secret coordination so your partner suspects nothing!
                </p>
                <p className="font-medium text-rose-800">
                  Trust us with your secret—we'll make the surprise unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Why HIVY for Surprise Dates in Surat?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Secret Private Location</h3>
                    <p className="text-gray-600">Beautiful romantic ambiance, completely private setup—your partner won't know until the big reveal! The best surprise date venue in Surat.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Complete Surprise Planning</h3>
                    <p className="text-gray-600">Starting ₹5,100, including decorations, cake, gourmet dinner, mock champagne—all secretly arranged before you arrive with your partner.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">We Handle the Stress</h3>
                    <p className="text-gray-600">No more trying to secretly decorate while hiding from your partner—we do ALL the setup. Just show up and enjoy their reaction!</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Surprise Experience</h3>
                    <p className="text-gray-600">500+ successful surprise dates, 4.9★ Google rating. We've planned surprise proposals, birthday reveals, and anniversary surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-100 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/10.webp"
                  alt="Why Choose HIVY - Surprise Date Planners - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Surprise Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Surprise Philosophy Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">Our Philosophy: The Power of Surprise</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Surprises hold a unique power in relationships. A well-planned surprise communicates effort, thoughtfulness, and deep love – it says "I know you, I care about you, and I wanted to create something special just for you." At HIVY, we've dedicated ourselves to helping partners express their love through carefully orchestrated surprise experiences that leave lasting impressions on both the giver and receiver.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Masters of Secrecy</h3>
            <p>The success of any surprise lies in absolute secrecy, and our team has become experts in covert celebration planning. From the moment you reach out to us, every communication happens through private channels. We help craft cover stories, coordinate timing down to the minute, and ensure that nothing hints at the magnificent surprise waiting. Our track record speaks for itself – hundreds of successful surprises without a single premature reveal.</p>
            <p>Secrecy requires careful attention to detail and constant vigilance. Our team understands that even small slips can ruin weeks of planning. We use discrete communication methods, avoid social media interactions that might raise suspicion, and coordinate with partners on believable scenarios for bringing the surprise recipient to our venue. This expertise in maintaining secrecy has become one of our most valued skills, honed through years of successful surprise orchestration.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">The Reveal Moment</h3>
            <p>After weeks of secret planning, the moment your partner walks in and sees the transformed space is priceless. We've witnessed countless reactions – gasps of disbelief, tears of joy, speechless wonder, and overwhelming happiness. These moments are why we do what we do. Each reveal is photographed and filmed (if requested), preserving the genuine surprise reaction as a memory you'll treasure forever.</p>
            <p>The reveal moment is choreographed with care. We consider lighting, positioning, and timing to maximize emotional impact. Some surprises benefit from a dramatic unveiled entrance; others work better with a gradual realization. Our experience helps us guide planners toward reveal strategies that match their partner's personality, ensuring that the moment lands perfectly and creates the emotional response you're hoping for.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Beyond the Surprise</h3>
            <p>A HIVY surprise experience extends far beyond the initial reveal. We create entire evenings of romance that unfold beautifully after that first magical moment. From the surprise entrance to intimate conversations over dinner, from cake cutting to dancing under fairy lights – every minute is designed to deepen your connection and create lasting memories.</p>
            <p>The post-reveal experience is carefully designed to maintain the emotional momentum of the initial surprise. We structure the evening with multiple touchpoints that continue to delight – a favorite song played at just the right moment, a personalized message revealed during dessert, or a photo slideshow that chronicles your journey together. These layered surprises ensure that the magic continues throughout your time at HIVY, not just in that first breathtaking moment.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Your Secret Planning Partner</h3>
            <p>Planning a surprise can be stressful, but you're not alone. Our team guides you through every decision, offers creative suggestions, and handles all the complex logistics. We become your secret partner in creating joy, working behind the scenes while you maintain your normal routine with your unsuspecting partner. With HIVY, you get all the credit for an incredible surprise without the burden of solo planning.</p>
            <p>Our role as your secret planning partner means we're available to brainstorm, troubleshoot, and refine your vision. Uncertain about decoration themes? We'll share what's worked beautifully in the past. Worried about logistics? We'll map out every step of the plan. Need last-minute adjustments? We adapt quickly and smoothly. This partnership approach means you benefit from our years of surprise-planning expertise while maintaining complete control over the celebration's direction.</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Plan Your Surprise Date?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let us handle all the secret planning. Book your surprise date today and watch your partner's face light up!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-rose-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-rose-700 hover:text-rose-800 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-stone-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-rose-700 hover:text-rose-800">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Page FAQs */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">
            Frequently Asked Questions About Surprise Date Planning
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {aboutFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-200">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-rose-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
