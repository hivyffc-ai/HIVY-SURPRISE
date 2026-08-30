'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig, getVisiblePackages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features - Surprise Date Focused
const experienceFeatures = [
  {
    icon: Clock,
    title: "3-Hour Private Surprise Date",
    description: "Enjoy three exclusive hours at our secret venue—plan the ultimate surprise date for your partner"
  },
  {
    icon: Gift,
    title: "Secret Setup & Reveal",
    description: "We handle all decorations secretly—just bring your partner for the perfect surprise date moment"
  },
  {
    icon: Camera,
    title: "Surprise-Ready Ambiance",
    description: "Your partner walks into a stunning surprise date setup with fairy lights, candles & rose petals"
  },
  {
    icon: Music,
    title: "Romantic Surprise Reveal",
    description: "Complete privacy for watching their reaction—soft music, candlelight & unforgettable surprise"
  }
];

// FAQ items - Surprise Date Focused
const faqs = [
  {
    question: "What is HIVY Surprise Date and how does the surprise work?",
    answer: "HIVY Surprise Date is Surat's ultimate secret venue for planning surprise dates. We set up everything before you arrive—just bring your partner and watch their jaw drop! Perfect for surprising your boyfriend, girlfriend, husband, or wife with a romantic date they'll never forget."
  },
  {
    question: "How do I secretly plan a surprise date at HIVY?",
    answer: `WhatsApp us at ${siteConfig.phone} with your surprise date plan. Tell us who you're surprising (girlfriend, boyfriend, husband, wife), the date, and any personalized messages you want. We'll coordinate everything secretly and help you execute the perfect surprise!`
  },
  {
    question: "What surprise date packages are available?",
    answer: "Our surprise date packages start from ₹5,100. Each package includes secret setup, romantic decorations, welcome drinks, gourmet dinner, celebration cake, and 3 hours of private time. We plan the perfect surprise—you just enjoy their reaction!"
  },
  {
    question: "Can I add personalized surprises to my date?",
    answer: "Yes! Make your surprise date extra special with personalized messages spelled out in rose petals, custom flower arrangements, their favorite songs, photos displayed, and even surprise proposal setups. Tell us your vision—we'll make it happen secretly!"
  },
  {
    question: "What types of surprise dates do you specialize in?",
    answer: "We create surprise dates for every occasion: birthday surprise dates, anniversary surprise dates, surprise proposal setups, 'just because' surprise dates, first date surprises, monthly celebration surprises, makeup surprise dates, and midnight surprise dates."
  },
  {
    question: "When can I book a surprise date?",
    answer: "Surprise date slots: Lunch (12-3 PM), Evening (4-7 PM), Dinner (7-10 PM), and Late Night (10 PM-1 AM). Evening and dinner slots are most popular for sunset surprises. Book 2-3 days ahead for weekend surprise dates!"
  },
  {
    question: "Is the venue completely private for surprise dates?",
    answer: "100% private! When you plan a surprise date at HIVY, no one else will be there. It's just you two in a beautifully decorated space. The privacy makes the surprise reveal even more magical and intimate."
  },
  {
    question: "What's included in every surprise date?",
    answer: "Every surprise date includes: secret venue setup before arrival, romantic decorations (rose petals, candles, fairy lights), welcome champagne toast, gourmet dinner for two, celebration cake, romantic music, photography spots, and complete privacy for 3 hours."
  },
  {
    question: "Do you help plan surprise proposals?",
    answer: "Absolutely! HIVY is Surat's top surprise proposal venue. We secretly set up 'Will You Marry Me?' decorations, hide the ring presentation, coordinate music timing, and capture the moment. Many couples have said YES at HIVY!"
  },
  {
    question: "What's your rescheduling policy for surprise dates?",
    answer: "Plans change—we understand! Reschedule your surprise date at least one day before, and we'll accommodate within one month. Your surprise planning deposit stays valid. Note: No refund policy applies."
  }
];

// Gallery items data - Surprise Date Focused (using existing images)
const galleryItems = [
  // Featured Images from packages - Surprise Date themed
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Romantic Surprise Date Setup Surat', title: 'Swing of LOVE', subtitle: 'Surprise Date Package', featured: true },
  { type: 'image', src: '/hivy-images/5700/2.webp', alt: 'Intimate Surprise Date Surat', title: 'BoHo Chic Date', featured: false },
  { type: 'image', src: '/hivy-images/6300/2.webp', alt: 'Magical Surprise Date Setup Surat', title: 'Fairy Tale Date', featured: false },
  { type: 'video', src: '/videos/InShot_20250111_162317353.mp4', alt: 'Romantic surprise date video Surat', title: 'Surprise Date Moments', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Surprise Date Tent Setup Surat', title: 'Tent of Romance', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Couple surprise date setup Surat', title: 'Romantic Swing', featured: false },
  { type: 'video', src: '/videos/InShot_20250217_151234749.mp4', alt: 'Surprise date experience video Surat', title: 'Date Experience', featured: false },
  { type: 'image', src: '/hivy-images/5700/3.webp', alt: 'Private surprise date Surat', title: 'Boho Ambiance', featured: false },
  { type: 'image', src: '/hivy-images/6300/3.webp', alt: 'Dreamy surprise date decoration Surat', title: 'Magical Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/3.webp', alt: 'Candlelit surprise date Surat', title: 'Romantic Décor', featured: false },
  { type: 'video', src: '/videos/VID_20251027_181020858.mp4', alt: 'Private surprise date reel Surat', title: 'Private Date', featured: false },
  { type: 'image', src: '/hivy-images/5100/4.webp', alt: 'Luxury surprise date setup Surat', title: 'Love Swing', featured: false },
  { type: 'image', src: '/hivy-images/5700/4.webp', alt: 'Night surprise date setup Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/hivy-images/6300/4.webp', alt: 'Evening surprise date Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VID_20251120_191425995.mp4', alt: 'Surprise date reel Surat', title: 'Date Reel', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Private date setup Surat', title: 'Private Setup', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 via-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
            <ImageIcon className="h-4 w-4 mr-2" /> Surprise Date Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Real Surprise Date Moments at HIVY Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Magical reactions from surprise dates, secret proposals, birthday surprises & romantic reveals at Surat's best surprise date venue.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-stone-1000 hover:bg-rose-700 text-white' 
              : 'border-rose-200 text-rose-800 hover:bg-stone-100'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-stone-1000 hover:bg-rose-700 text-white' 
              : 'border-rose-200 text-rose-800 hover:bg-stone-100'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-stone-1000 hover:bg-rose-700 text-white' 
              : 'border-rose-200 text-rose-800 hover:bg-stone-100'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover bg-stone-200"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onLoadedData={(e) => { e.currentTarget.currentTime = 0.5; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-rose-700 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-stone-1000 to-pink-600 hover:from-rose-700 hover:to-pink-600 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
            Surprise Date Ideas Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Surprise Date Planning Tips & Ideas in Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creative ideas, surprise planning guides, and romantic date tips to help you plan the perfect surprise date in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-stone-200">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-stone-1000 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rose-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-stone-1000 to-pink-600 hover:from-rose-700 hover:to-pink-600 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero/slider2.png', alt: 'Private Celebration Setup with Fairy Lights Surat' },
    { src: '/images/hero/slider1.png', alt: 'Romantic Surprise Date Setup at HIVY - Surprise Date Planners Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // FAQ Schema (FAQPage structured data)
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HIVY - Surprise Date Planners | Best Surprise Date Venue in Surat",
    "url": "https://surprisedatesurat.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".faq-section", ".services-heading"]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://surprisedatesurat.com/#business"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* Speakable Schema for Voice Assistants & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-700 via-pink-600 to-rose-800 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in Surat
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                HIVY - Surprise Date Planners
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Surat's #1 secret venue for planning unforgettable surprise dates. We set up everything—just bring your partner for the ultimate romantic surprise. Perfect for surprise proposals, birthday reveals & anniversary surprises.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-rose-700 hover:bg-stone-100 text-lg px-8 py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-stone-100 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-stone-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              Surprise Date Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Surprise Date Setups in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              5 stunning private setups for planning the perfect surprise date for your boyfriend, girlfriend, husband or wife in Surat
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-stone-200 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-rose-700 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-lg mb-1 group-hover:text-rose-700 transition-colors leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
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
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-rose-700 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              Surprise Date Services in Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Plan the Perfect Surprise Date in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate surprise dates to grand surprises proposals, birthday reveals to anniversary surprises—we secretly plan magical moments for couples at our private venue in Surat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-stone-200 group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              Why Couples Choose HIVY for Surprise Dates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Ultimate Surprise Date Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every surprise deserves a private, romantic reveal. Our secret venue is fully setup before you arrive—we handle everything for an unforgettable surprise date.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-rose-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-stone-1000/20 text-rose-300 border-stone-1000/30">
                Surprise Date Dinner Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Gourmet Cuisine for Your Surprise Date
              </h2>
              <p className="text-gray-300 mb-8">
                Curated café-style delicacies crafted for surprise dates, romantic reveals & special celebrations in Surat
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-1000/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-stone-1000 hover:bg-rose-700 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/Food hivy.webp" 
                  alt="HIVY - Surprise Date Planners Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              <MapPin className="h-4 w-4 mr-2" /> Surprise Date Venue Near You
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Surat's Best Surprise Date Venue - All Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for a surprise date venue near Vesu, secret surprise spot in Adajan, or romantic surprise setup in Athwa—we help couples from all areas of Surat plan the perfect surprise
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-rose-700 hover:text-white transition-colors border border-stone-300"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <FFCReviewsSlider />

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">
            Why HIVY is Surat's Top Surprise Date Planning Venue
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="hero-description">
              Planning the perfect surprise date in Surat requires a venue that understands secrecy, romance, and attention to detail. At HIVY, we have mastered the art of creating unforgettable surprise experiences for couples across Surat. Whether you're planning a surprise date for your girlfriend, boyfriend, husband, or wife, our dedicated team works behind the scenes to ensure every element comes together flawlessly. From the moment you contact us to the magical reveal, we handle every detail with utmost discretion, making HIVY the most trusted surprise date venue in Surat. Our private setting ensures complete confidentiality, so your partner never suspects a thing until they walk into their personalized romantic wonderland.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600 mt-8">The Art of Planning a Secret Surprise</h3>
            <p className="hero-description">
              What sets HIVY apart is our comprehensive secret surprise planning process. When you decide to surprise your partner, coordination and timing are everything. Our surprise planning specialists work closely with you through WhatsApp to understand your partner's preferences, your relationship story, and the specific reaction you're hoping to create. We help you craft the perfect cover story to get your partner to the venue without revealing anything. On the day of the surprise, we complete the entire setup before you arrive—romantic decorations, atmospheric lighting, rose petal arrangements, and personalized touches are all in place. Your only job is to bring your unsuspecting partner and watch their face light up with joy. We've perfected the timing of reveals, the positioning of decorations for maximum impact, and even the playlist that sets the mood from the moment they step inside.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600 mt-8">Creative Surprise Date Ideas</h3>
            <p className="hero-description">
              HIVY specializes in diverse surprise date concepts tailored to different occasions and partner preferences. Our most popular surprise dates include romantic proposal setups where we create the perfect "Will You Marry Me?" moment complete with hidden ring presentations and dramatic reveals. Anniversary surprise dates transform our venue into a celebration of your love journey, featuring photo displays of your time together and elements that honor your unique story. Birthday surprise dates add an extra layer of excitement to their special day, combining romantic ambiance with celebratory touches. We also excel at "just because" surprise dates—those unexpected romantic gestures that show your partner how much you care without any specific occasion. For couples looking to rekindle romance, our makeup surprise dates and reconnection experiences create intimate settings for meaningful conversations and renewed commitment.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600 mt-8">Surprises for Her & Surprises for Him</h3>
            <p className="hero-description">
              Understanding that surprise preferences differ, we customize our setups based on who you're surprising. For girlfriend surprise dates and wife surprise dates, we often incorporate soft color palettes with pinks and roses, abundant floral arrangements, fairy light canopies, and sweet romantic messages spelled out in flower petals. The atmosphere leans toward dreamy and Instagram-worthy, perfect for capturing those emotional reaction photos. For boyfriend surprise dates and husband surprise dates, we adapt our approach with sophisticated décor, warm candlelight ambiance, and thoughtful touches that appeal to their interests—whether that's incorporating sports memorabilia, favorite music, or a more minimalist elegant aesthetic. We've surprised partners with themed setups based on their favorite movies, recreated meaningful first-date memories, and even coordinated with friends and family for group reveal surprises. Whatever your partner loves, we integrate those personal elements to make the surprise feel genuinely tailored to them.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600 mt-8">The Moment of Surprise</h3>
            <p className="hero-description">
              There's nothing quite like witnessing the genuine reaction when your partner walks into a surprise they never expected. At HIVY, we've optimized every aspect of the reveal moment to maximize emotional impact. Our privacy ensures that the surprise unfolds in an intimate setting with no distractions—just the two of you in a beautifully decorated space that speaks volumes about your love. The dramatic lighting transition, the carefully selected background music, the first glimpse of candles and rose petals—all work together to create a moment they'll remember forever. Many couples choose to capture these precious reactions through photography, and our setups are designed with perfect photo opportunities in mind. We've seen proposals that brought tears of joy, birthday surprise dates that left partners speechless, and anniversary reveals that renewed decades-long relationships. The surprise moment at HIVY isn't just about the decorations—it's about creating a memory that will be cherished for a lifetime. Whether it's the look in their eyes when they realize what's happening, the emotional embrace that follows, or the heartfelt words exchanged in our private setting, these moments become relationship milestones that couples talk about for years to come. Trust HIVY to make your surprise date in Surat absolutely perfect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-200 text-rose-800 border-stone-300">
              FAQ - Surprise Date Planning
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Common Questions About Surprise Dates in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about planning surprise dates, surprise proposals & romantic reveals at HIVY
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Plan Your Surprise Date Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create unforgettable surprise moments at Surat's best secret surprise date venue. Perfect for surprise proposals, birthday reveals, anniversary surprises & romantic date surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
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
