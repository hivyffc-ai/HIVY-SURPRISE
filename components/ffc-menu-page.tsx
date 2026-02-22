'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

const menuFaqs = [
  { question: "Can I pre-order specific dishes for a surprise date?", answer: "Yes, you can secretly select the entire menu in advance. This ensures your partner's favorites are ready without them knowing anything was planned for them." },
  { question: "What food is included in surprise date packages?", answer: "All packages include welcome drinks, starters, main course (veg/non-veg), accompaniments like naan and rice, and dessert. Menu details can be discussed privately during booking." },
  { question: "Can I include my partner's favorite dish as a surprise?", answer: "Absolutely! Share their favorite dishes with us secretly, and we'll include them in the menu. Seeing their favorites will add another layer to the surprise." },
  { question: "What if my partner has dietary restrictions I need to accommodate?", answer: "Inform us of any allergies, vegetarian preferences, or dietary restrictions during secret planning. We prepare everything accordingly so no surprises go wrong." },
  { question: "Is cake included in surprise date packages?", answer: "Yes, all packages include a complimentary cake. You can customize it with names, messages, or upgrade to premium designs without your partner knowing." },
  { question: "Can I arrange champagne for the surprise reveal?", answer: "Non-alcoholic champagne (₹500) is perfect for toasting during the surprise reveal. It adds an elegant touch when your partner realizes what you've planned." },
  { question: "Will the food be ready when we arrive for the surprise?", answer: "Yes, we coordinate timing precisely. Starters and welcome drinks are ready upon arrival. Main course is served after you've settled and the surprise reveal has happened." },
  { question: "What vegetarian options are available?", answer: "We have extensive vegetarian options including paneer dishes, mixed vegetables, soups, and vegetarian starters. Full Jain meal options are also available." },
  { question: "Can I customize the menu without telling my partner?", answer: "Yes! All menu planning happens privately with the person organizing the surprise. Your partner will have no idea about the carefully curated meal waiting for them." },
  { question: "What desserts are available for surprise dates?", answer: "Desserts include chocolate brownie with ice cream, gulab jamun, and the included celebration cake. Special desserts like heart-shaped items can be arranged with advance notice." }
];

export default function FFCMenuPage() {
  const menuFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": menuFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://surprisedatesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://surprisedatesurat.com/menu" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-stone-1000/20 text-rose-300 border-stone-1000/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Café-Style Delicacies Crafted for Surprise Dates & Private Romantic Moments
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to make your surprise date unforgettable</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your romantic evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-stone-200 bg-stone-100">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-rose-700 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Experience</h2>
            <p className="text-gray-600">What makes your celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Trending Tent Setup for romantic evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-stone-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-rose-700 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Surprise Date Dining Experience
              </h2>
              <p>
                Planning the perfect surprise date means orchestrating every detail without your partner's knowledge – and at <strong>HIVY – Surprise Date Destination</strong> in Surat, the culinary experience is one secret we help you plan down to the last delicious detail. Our surprise date menu is designed to be arranged entirely behind the scenes, ensuring your partner walks into not just a beautiful décor setup, but also their favourite dishes appearing as if by magic.
              </p>
              <p>
                The element of surprise extends beyond balloons and decorations. Imagine your partner's face when they discover the meal includes their favourite paneer dish, that dessert they once mentioned in passing, or a custom cake with a message that makes them realize just how much attention you pay to the little things. This is the power of <strong>secretly customized dining</strong> at HIVY.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                How Secret Menu Planning Works
              </h3>
              <p>
                When you book a surprise date at HIVY, all menu planning happens through <strong>private conversation with you alone</strong>. Your partner will have no idea what food awaits them until each course arrives at the table. During your booking consultation, share everything you know about their food preferences: favourite cuisines, dietary restrictions, dishes they've been craving, or foods they absolutely avoid.
              </p>
              <p>
                Our team takes this information and crafts a personalized menu that feels like you read their mind. Maybe they mentioned wanting to try butter chicken months ago – it appears. Perhaps they're vegetarian and love paneer tikka – we prepare it exactly to their spice preference. If they have a nut allergy you've mentioned in passing, every dish is prepared safely without any cross-contamination risk.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Starters That Launch the Surprise
              </h3>
              <p>
                The moment you walk in with your unsuspecting partner, they're greeted by the stunning private tent setup with twinkling lights and romantic decor. As they're still absorbing the surprise, our team presents <strong>welcome drinks and light starters</strong> that allow them to settle into the moment without immediately jumping into a full meal.
              </p>
              <p>
                Starter options include both <strong>vegetarian selections</strong> – cheese fondue, crispy vegetable spring rolls, loaded nachos, paneer bites – and <strong>non-vegetarian appetizers</strong> such as chicken tikka, seekh kebabs, and spiced wings. Each dish arrives warm and beautifully plated, designed for sharing and creating conversation between you as the surprise sinks in.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Main Course: Where Personalization Shines
              </h3>
              <p>
                The main course is where the secret planning truly pays off. Because you've shared your partner's preferences in advance, the dishes arriving feel impossibly perfect. <strong>Vegetarian mains</strong> might include their beloved paneer butter masala, aromatic vegetable biryani, creamy dal preparation, and freshly baked garlic naan. <strong>Non-vegetarian options</strong> showcase butter chicken perfection, tender mutton curry, or grilled chicken exactly how they prefer it.
              </p>
              <p>
                Every accompaniment is considered: jeera rice or steamed basmati, cooling raita, papad, pickles, and fresh salad. The meal is substantial yet elegantly portioned – enough to satisfy without overwhelming, leaving comfortable room for the dessert celebration to follow.
              </p>
              <p>
                For <strong>Jain dietary requirements</strong>, we prepare complete meals without onion and garlic, maintaining full flavour through alternative ingredients and techniques. These preferences are noted during your secret planning call and executed precisely.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Dessert Reveal
              </h3>
              <p>
                Desserts in a surprise date carry extra emotional weight. This is often when additional surprises happen – a hidden ring, a message inside a balloon pop, or simply the appearance of a <strong>custom celebration cake</strong> bearing your partner's name and a loving message they never expected.
              </p>
              <p>
                Every surprise date package includes a complimentary cake in chocolate, butterscotch, vanilla, or red velvet. You can secretly upgrade to photo cakes, heart-shaped designs, or multi-tier options that make the moment even more special. Alongside the cake, desserts include our signature <strong>warm chocolate brownie</strong> with vanilla ice cream, traditional gulab jamun, or fresh fruit platter.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Beverages and Surprise Toasts
              </h3>
              <p>
                Welcome mocktails greet you upon arrival, served in decorated glasses that sparkle under the fairy lights. Throughout the surprise date, <strong>soft drinks, juices, and signature beverages</strong> remain available. For the most celebratory moments – perhaps right after a proposal or when your partner finally understands the full extent of your planning – <strong>non-alcoholic champagne</strong> at ₹500 adds that perfect celebratory pop and toast.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Timing and Coordination
              </h3>
              <p>
                Food timing for surprise dates receives extra attention. We coordinate with you on expected arrival time, ensuring <strong>starters and welcome drinks are ready</strong> the moment you step in – no awkward waiting after the initial surprise reveal. The main course arrives after you've both settled and the initial surprise emotions have transitioned into comfortable celebration. Dessert and cake appear at the emotional crescendo of your planned evening.
              </p>
              <p>
                This careful choreography means the food becomes part of the surprise experience rather than an interruption to it.
              </p>

              <div className="mt-10 p-6 bg-rose-50 border border-rose-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-rose-900 mb-2">
                  Ready to secretly plan the perfect meal?
                </p>
                <p className="text-gray-600">
                  Call <a href={`tel:${siteConfig.phone}`} className="text-rose-700 font-bold hover:underline">{siteConfig.phone}</a> to discuss menu customizations without your partner knowing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Surprise Date Menu FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {menuFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-white text-rose-700 hover:bg-stone-100" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
