'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages } from '@/lib/ffc-config';

const virtualTourFaqs = [
  { question: "What is the virtual tour?", answer: "Our 360-degree virtual tour lets you explore HIVY's romantic venue virtually. Perfect for planning surprise dates—preview the space without bringing your partner." },
  { question: "How can the virtual tour help me plan a surprise?", answer: "Explore the venue secretly to plan decoration placement, understand the space, and visualize your partner's surprise reveal moment—all without them knowing." },
  { question: "Can I plan a surprise without visiting in person?", answer: "Yes! The virtual tour combined with our WhatsApp planning helps you coordinate everything secretly. High-quality photos and videos of setups complete your planning." },
  { question: "How do I use the virtual tour?", answer: "Click to start, then navigate 360 degrees using your mouse or touch. Explore every angle to understand how your surprise date will look." },
  { question: "Does the virtual tour show surprise setups?", answer: "It shows our venue spaces. Contact us for photos of specific package setups with romantic decorations, candles, and personalized elements for surprises." },
  { question: "Is the actual venue like the virtual tour?", answer: "Yes, the tour accurately represents our venue. With your chosen surprise package decorations, the actual experience exceeds what you see virtually." },
  { question: "Can I visit secretly before planning a surprise?", answer: "Absolutely! Schedule a discrete venue visit when your partner isn't around. Seeing it in person helps perfect your surprise plans." },
  { question: "Should I show the virtual tour to my partner?", answer: "Only if you want to! Most surprise planners keep it secret. After the surprise, you might both enjoy revisiting it together." },
  { question: "What should I notice in the virtual tour?", answer: "Focus on entry points for the surprise reveal, seating arrangements, and decoration areas. Picture your partner's face when they walk in!" },
  { question: "After viewing, how do I book a surprise date?", answer: "WhatsApp us at 9727027278 with your plans. We'll coordinate secretly, discussing timing, setup, and personalization—all without your partner knowing." }
];

const virtualTourFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": virtualTourFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(virtualTourFaqJsonLd) }} />
      <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our secret surprise date spaces before you plan the big reveal
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of HIVY - Surprise Date Planners</p>
            </div>
            
            {/* Vertical Video */}
            <div 
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                <source src="/videos/InShot_20250111_162317353.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-rose-700" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 text-rose-700 ml-1" fill="currentColor" />
                  )}
                </button>
                
                {!isPlaying && (
                  <p className="text-white text-sm mt-4 font-medium drop-shadow-lg">Tap to play</p>
                )}
              </div>

              {/* Mute Button - Bottom Right */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Setups Gallery</h2>
            <p className="text-gray-600">Explore our 5 unique celebration spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisiblePackages().map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-rose-700 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-rose-700 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8 font-serif text-rose-800">Preview Your Surprise Date Venue</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Planning the perfect surprise date in Surat requires careful preparation, and HIVY's 360-degree virtual tour makes it possible to explore our romantic venue without revealing your secret plans. Whether you're organizing a surprise proposal, anniversary reveal, or spontaneous romantic date, our virtual tour lets you familiarize yourself with every aspect of our venue while keeping your partner completely unaware of the magical experience you're planning.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Benefits of Virtual Tour for Surprise Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              The virtual tour is an invaluable tool for surprise planners. You can explore HIVY's venue during any private moment—perhaps during your lunch break or late at night when your partner is asleep. Understanding the venue layout helps you plan the perfect surprise reveal moment, anticipate your partner's walking path upon arrival, and visualize their expression when they discover the romantic setup. All this planning happens secretly, maintaining the element of surprise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">What to Explore in the 360-Degree Tour</h3>
            <p className="text-gray-700 leading-relaxed">
              Navigate through our surprise date venue to understand entry points for dramatic reveals, seating arrangements for romantic moments, and spaces where personalized decorations will be placed. Notice the ambient lighting possibilities and imagine how the space transforms with candles, fairy lights, and romantic music. Pay attention to areas where you might place personalized gifts, photo frames, or custom messages for your partner to discover.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Understanding the Romantic Ambiance</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's venue is specifically designed for romantic moments. The virtual tour showcases our elegant interiors, warm color schemes, and thoughtfully designed spaces that create intimate atmospheres. While exploring, imagine your partner's reaction walking into a space filled with their favorite flowers, photographs of your journey together, and soft romantic lighting. The ambiance you see virtually becomes even more magical with surprise decorations and personalized touches.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Planning Decorations and Setup Secretly</h3>
            <p className="text-gray-700 leading-relaxed">
              Use the virtual tour to plan decoration placement without your partner's knowledge. Identify where welcome messages can be displayed for maximum impact, visualize flower arrangement positions, and understand where photographers might position themselves to capture the surprise reveal. Share screenshots from the virtual tour with our team via WhatsApp to communicate your vision clearly—all while maintaining complete secrecy from your partner.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Privacy and Exclusivity for Surprise Dates</h3>
            <p className="text-gray-700 leading-relaxed">
              The success of a surprise date often depends on privacy. HIVY's virtual tour shows spaces that are exclusively reserved for your surprise date. Unlike public restaurants where other guests might inadvertently reveal your plans, our private venue ensures complete confidentiality. Your partner arrives to find a venue decorated entirely for them, with no other guests to interrupt the magical moment you've orchestrated.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Coordinating Surprise Details Through Virtual Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              The virtual tour enables comprehensive surprise planning without in-person visits that might raise suspicion. Combined with WhatsApp coordination with our team, you can arrange every detail—from the exact moment decorations are revealed to timing of music changes during your arrival. Our team understands surprise logistics thoroughly, ensuring your partner remains completely unaware until the perfect reveal moment.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Venue Transformation for Surprise Moments</h3>
            <p className="text-gray-700 leading-relaxed">
              While the virtual tour shows our elegant base venue, imagine the dramatic transformation for your surprise date. Our team creates personalized setups with rose petals forming heart shapes, candles creating romantic pathways, fairy lights spelling your partner's name, and photographs displayed throughout the space. The sophisticated venue you see virtually becomes an emotional, personalized surprise that brings tears of joy.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Why Surprise Planners Love Online Venue Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's virtual tour solves the biggest challenge in surprise planning—venue exploration without revealing your plans. You can view the space during any private moment, share it with friends helping coordinate the surprise, and revisit specific areas while finalizing decoration ideas. The tour provides the confidence you need to book and plan without second-guessing venue selection.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Scheduling Secret In-Person Visits</h3>
            <p className="text-gray-700 leading-relaxed">
              Some surprise planners prefer combining the virtual tour with a discrete in-person visit. Schedule a venue walkthrough during hours when your partner is occupied elsewhere—perhaps during work hours or when they're visiting family. Our team accommodates secret visits, ensuring you can finalize arrangements and even do test runs of surprise elements without compromising your plans.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Booking Your Surprise Date After Virtual Exploration</h3>
            <p className="text-gray-700 leading-relaxed">
              Ready to book your surprise date after exploring our virtual tour? Contact us via WhatsApp at 9727027278 to begin secret coordination. Share your surprise concept, preferred date and time, and any specific personalization ideas. Our team specializes in confidential surprise planning, communicating through channels your partner won't discover. We'll help orchestrate every detail—from decoration setup to arrival timing—ensuring your surprise date creates unforgettable memories for both of you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our virtual tour</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {virtualTourFaqs.map((faq, index) => (
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
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
