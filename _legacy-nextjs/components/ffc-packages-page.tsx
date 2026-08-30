'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

const packagesFaqs = [
  { question: "Which package is best for a surprise date?", answer: "All packages work beautifully for surprise dates. Tent of Romance is most popular for romantic surprises, while Fairy Tale creates a whimsical atmosphere perfectly suited for impressive reveals." },
  { question: "Can you set up the surprise before my partner arrives?", answer: "Absolutely! For all packages, our team completes the entire setup before your partner arrives. You coordinate the timing, and we ensure everything is perfect for the surprise reveal." },
  { question: "Which package is best for a surprise proposal?", answer: "Tent of Romance (₹6500) is our most popular proposal package. Many successful proposals have happened in this intimate romantic setup. Fairy Tale Proposals (₹6300) is specifically designed for this purpose." },
  { question: "Can I customize surprise decorations?", answer: "Yes! Every surprise package is fully customizable. Add personalized banners, incorporate photos of your relationship, include meaningful items, or choose specific color themes for the surprise." },
  { question: "How do you keep the surprise secret?", answer: "We communicate only with the person planning the surprise through private channels. Payments, planning, and coordination all happen discretely. Your partner will have no idea until the reveal moment." },
  { question: "Is photography included for capturing the surprise reaction?", answer: "Photography is available as an add-on (₹2700). Our photographer captures the surprise reveal, your partner's genuine reaction, and the entire celebration with same-day delivery." },
  { question: "Can I plan a surprise anniversary at HIVY?", answer: "Yes! Anniversary surprises are one of our specialties. Any package can be customized with anniversary decorations, messages, and personal touches for a memorable surprise celebration." },
  { question: "What's included in all surprise packages?", answer: "Every surprise package includes 3 hours exclusive venue, romantic decorations, complimentary cake, dining experience, background music, and our team's surprise coordination assistance." },
  { question: "How far in advance should I book for a surprise?", answer: "We recommend 5-7 days advance booking for surprises to allow proper planning and customization. Urgent surprises may be possible based on availability." },
  { question: "Can I bring items to add to the surprise setup?", answer: "Absolutely! Personal items like photos, gifts, letters, or meaningful objects can be incorporated into the surprise setup. Share them with us beforehand and we'll place them perfectly." }
];

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();

  const packagesFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packagesFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://surprisedatesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Surprise Packages", "item": "https://surprisedatesurat.com/packages" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning surprise date setups designed to make their jaw drop when they walk in
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-stone-200 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-rose-700 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-rose-700 transition-colors leading-tight">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-base sm:text-lg md:text-xl font-bold text-rose-700">
                      {formatPrice(pkg.price)}
                    </p>
                    {/* View Details */}
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] sm:text-xs text-rose-600 font-medium flex items-center gap-1 hover:text-rose-800">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Surprise Date Package</h2>
            <p className="text-gray-600">All our surprise date packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔐", title: "Secret Setup", desc: "We prepare everything before you arrive" },
              { icon: "🥂", title: "Welcome Champagne", desc: "Sparkling toast to start the surprise" },
              { icon: "🍰", title: "Celebration Cake", desc: "Complimentary cake included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies for the reveal" },
              { icon: "🕯️", title: "Candle Ambiance", desc: "Warm candlelight setup" },
              { icon: "🌹", title: "Rose Petals & Decor", desc: "Romantic surprise decorations" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Capture their surprised reaction" },
              { icon: "🕐", title: "3 Hours Private Time", desc: "Just the two of you" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-rose-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">Planning the Perfect Surprise Date Package</h2>
          <div className="prose prose-lg prose-rose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-rose-800 mt-6">How Surprise Date Planning Works at HIVY</h3>
            <p>
              Planning a surprise date at HIVY begins with contacting our team through private WhatsApp channels. We ensure all communication happens exclusively with the person planning the surprise, never with the intended recipient. During initial conversations, you share your vision: the occasion being celebrated, your partner's preferences, any specific elements you want incorporated, and your budget range. Our team then recommends suitable packages and customization options. Once you select a package and date, we handle every detail—decorations, dining arrangements, timing coordination, and personal touches. On surprise day, you simply bring your partner to HIVY. They walk in expecting perhaps a casual evening and instead discover a fully decorated celebration space waiting just for them.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Keeping the Surprise Secret Until the Reveal</h3>
            <p>
              Secrecy makes surprises magical, and HIVY takes confidentiality seriously. Booking confirmations go only to the planner's contact. Payment receipts and communications never mention the occasion explicitly if you prefer vague descriptions. We never contact the surprise recipient under any circumstances. If you're planning a surprise proposal, everything appears as a normal romantic outing until the dramatic reveal. Many planners create cover stories—"dinner reservations," "meeting friends," or "attending an event"—and we support whatever scenario you construct. Location details remain vague until arrival. The surprise recipient simply follows along, unsuspecting, until your beautifully decorated space is revealed.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Timing and Coordination for Surprise Setups</h3>
            <p>
              Perfect surprise execution requires precise timing coordination. Our team completes all setup work before your arrival time—typically finishing 30-45 minutes early to address any last-minute adjustments. You'll receive confirmation once the space is ready. For elaborate surprises, some planners arrive early to inspect the setup while their partner is still unaware, making any final requests before the reveal. Others trust our team completely, arriving with their partner directly. We coordinate exactly when to have music playing, lighting dimmed, and staff positioned. Whether you want to enter together with immediate reveal or guide your partner alone into the decorated space, our timing accommodates your surprise scenario.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Best Packages for Surprise Proposals</h3>
            <p>
              Proposals represent life's most significant surprises, and certain packages enhance these moments particularly well. Fairy Tale Proposals (₹6,300), designed specifically for this purpose, features dramatic archways, candle-lined aisles your partner walks through unknowingly, cascading flower arrangements, and the perfect backdrop for getting down on one knee. Tent of Romance (₹6,500) creates intimate luxury where the enclosed canopy muffles the outside world, focusing everything on your question and their answer. Both packages can incorporate personalized elements: photos from your relationship journey, meaningful quotes, "Will You Marry Me?" spelled in lights, or hidden photographers capturing authentic reaction footage. Our team has coordinated hundreds of successful proposals, understanding exactly how to position elements for maximum romantic impact.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Creating Memorable Surprise Anniversary Dates</h3>
            <p>
              Anniversary surprises reward relationships with unexpected celebration. Perhaps your partner expects a simple dinner out, instead walking into a HIVY setup decorated with photos from your wedding day or relationship milestones. Maybe they think you've forgotten the anniversary entirely, only to discover you've planned an elaborate celebration they never anticipated. Surprise anniversary packages can incorporate recreations of proposal settings, favorite date memories, or future dreams visualized through decorations. The element of surprise transforms routine anniversary acknowledgment into genuine appreciation demonstration. Your partner realizes you invested thought, planning, and effort into celebrating your love—messages that speak louder than any greeting card.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Adding Personal Touches to Surprise Packages</h3>
            <p>
              Generic surprises impress momentarily; personalized surprises create lasting memories. HIVY encourages incorporating elements unique to your relationship. Bring photographs—from your first date, travels together, phone camera roll favorites—and we'll display them beautifully. Include inside jokes referenced through decoration choices. Request their favorite songs on the background playlist. Add items with sentimental value: dried flowers from your wedding, ticket stubs from memorable concerts, letters you've written over the years. Display future plans: travel destinations you're dreaming of, home decoration ideas, vision boards for your life together. Each personal touch transforms a beautiful surprise into a deeply meaningful experience reflecting your unique relationship story.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Photography Options for Capturing Reactions</h3>
            <p>
              Surprise reactions happen once—capturing them requires preparation. HIVY offers professional photography packages (₹2700) that document surprise reveals from hidden positions, ensuring authentic expressions before your partner realizes they're being photographed. The photographer captures the approach, the moment of realization, genuine emotional responses, and subsequent celebration. For proposals, these photographs become engagement announcement images, wedding website content, and treasured memories of the exact moment you asked. Standard delivery includes 10-15 professionally edited images plus a 30-45 second reel, all provided same-day for immediate sharing with family and friends. Some couples arrange for the photographer to remain throughout the celebration, documenting their entire evening's joy.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">How Our Team Helps Execute Perfect Surprises</h3>
            <p>
              HIVY's surprise expertise extends beyond setup decoration. Our team becomes co-conspirators in your surprise plan, offering suggestions from experience with hundreds of successful surprises. We recommend timing based on your scenario, identify potential complications before they arise, and prepare contingencies for unexpected developments. On surprise day, staff positions themselves appropriately—invisible when you want privacy, present when service is needed. Post-reveal, operations shift seamlessly into celebration mode with dining service, music adjustment, and photography coordination all happening smoothly. Many planners express relief that our experience reduced their stress, allowing them to focus on their partner rather than logistical concerns.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Popular Surprise Date Package Combinations</h3>
            <p>
              Experience has shown certain combinations work exceptionally well for surprises. Tent of Romance with photography captures proposal reactions in our most intimate setting. Fairy Tale with extra balloon decorations creates dramatic visual impact for birthday surprises. Swing of LOVE with personalized photo displays suits relationship anniversary surprises where sentimental elements enhance the celebration. BoHo Chic with flower arrangement upgrades appeals to partners with bohemian aesthetic appreciation. Elite Group Setup with surprise coordination suits instances where close friends or family are hidden, joining the celebration after initial reveal. Our team helps identify combinations matching your vision, budget, and partner's preferences.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Real Surprise Stories from HIVY</h3>
            <p>
              Without naming individuals, countless surprise success stories inspire our continued commitment to perfect execution. A gentleman arranged monthly anniversary surprises for a year, each HIVY visit revealing new decorated themes his girlfriend never anticipated. A woman orchestrated her own proposal surprise—in Surat's first such reverse proposal at our venue—watching her boyfriend's utter shock give way to joyful tears. Parents surprised their daughter with her girlfriend's secret arrival from another city, revealed in a celebration space decorated with their long-distance relationship timeline. Anniversary surprises where spouses believed celebrations were forgotten, birthday reveals executed at midnight, and countless proposals answered with enthusiastic "yes" responses—each story reinforces why surprise planning deserves professional support. Your surprise story awaits writing at HIVY.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Surprise Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {packagesFaqs.map((faq, index) => (
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

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
