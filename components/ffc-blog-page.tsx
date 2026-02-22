'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

const blogFaqs = [
  { question: "What topics does the HIVY surprise blog cover?", answer: "Our blog covers surprise date planning, reveal moment tips, keeping secrets, romantic gesture ideas, proposal surprises, anniversary surprises, and real success stories from couples who pulled off perfect surprises." },
  { question: "Can the blog help me plan a surprise?", answer: "Absolutely! We publish detailed guides on planning surprises, from initial idea to perfect execution. Learn timing tips, secrecy strategies, and how to create magical reveal moments." },
  { question: "Are there proposal surprise ideas?", answer: "Yes! We have comprehensive guides on surprise proposal planning, location reveal strategies, and how to capture genuine reactions when you pop the question." },
  { question: "How often is new content published?", answer: "We regularly add articles on creative surprise ideas, seasonal romantic content, and tips for making every surprise more memorable." },
  { question: "Does the blog feature real surprise stories?", answer: "Yes, with guest permission, we share real surprise date success stories. These offer inspiration and practical insights from couples who've experienced HIVY surprises." },
  { question: "Are there tips for keeping surprises secret?", answer: "Definitely! Many articles focus on maintaining secrecy, from communication strategies to coordinating with venues without your partner knowing." },
  { question: "Can I find anniversary surprise ideas?", answer: "Yes! We publish articles specifically on surprising your spouse for anniversaries, including planning tips and romantic gesture ideas." },
  { question: "Does the blog cover birthday surprises?", answer: "Yes, birthday surprise content includes midnight celebration ideas, romantic birthday gestures, and planning birthday reveals your partner won't forget." },
  { question: "Are articles specific to Surat?", answer: "Many articles focus on planning surprises in Surat, with local insights and venue recommendations for your surprise date." },
  { question: "Can I suggest blog topics?", answer: "Yes! We welcome reader suggestions. Share your questions or topic ideas and we may feature them in upcoming articles." }
];

export default function FFCBlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  const blogFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://surprisedatesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://surprisedatesurat.com/blog" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-stone-200 text-stone-900 mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Surprise Date Ideas & Planning Tips
            </h1>
            <p className="text-lg text-gray-600">
              Discover creative surprise date ideas, secret planning guides, and tips for planning the perfect surprise for your partner in Surat.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-stone-100 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-stone-100 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Surprise Planning Tips & Inspiration
              </h2>
              <p>
                The art of surprise lies in the perfect blend of secrecy, timing, and heartfelt intention. The HIVY Surprise blog is your ultimate companion for crafting unforgettable surprise moments in Surat. Whether you're orchestrating a <strong>surprise proposal for your partner</strong>, planning a <strong>secret anniversary celebration</strong>, or designing a <strong>birthday surprise reveal</strong>, our expertly crafted articles will guide you through every step of the journey. Each piece is authored by our surprise specialists — the same team that has helped countless couples execute flawless surprises at Surat's premier secret celebration venue.
              </p>
              <p>
                What makes our surprise blog different from ordinary planning guides? <strong>Battle-tested strategies.</strong> Every technique you discover here has been proven through real surprise celebrations at HIVY. When we advise on maintaining secrecy or recommend optimal timing for a reveal moment, it's because we've witnessed these strategies succeed countless times. Our articles draw from hundreds of successful surprise executions, offering insights that theoretical planning simply cannot provide.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What Our Surprise Articles Reveal
              </h3>
              <p>
                The HIVY Surprise blog encompasses a comprehensive range of surprise planning topics designed specifically for <strong>couples and loved ones planning secret celebrations in Surat</strong>. Here's an overview of the content awaiting you:
              </p>
              <ul className="space-y-2 my-4">
                <li><strong>Surprise Planning Blueprints</strong> — Step-by-step guides for orchestrating perfect surprises, from the initial concept through flawless execution, ensuring nothing spoils your carefully laid plans.</li>
                <li><strong>Secrecy Strategies</strong> — Expert techniques for keeping surprises under wraps, including communication tactics, alibi creation, and coordinating with venues without arousing suspicion.</li>
                <li><strong>Reveal Moment Mastery</strong> — Detailed guidance on crafting the perfect reveal, from blindfold entries to dramatic unveilings that create lasting emotional impact.</li>
                <li><strong>Proposal Surprise Guides</strong> — Comprehensive resources for planning surprise proposals, including ring hiding strategies, speech preparation, and photographer coordination.</li>
                <li><strong>Anniversary & Birthday Surprises</strong> — Creative ideas for surprising your partner on special occasions, with tailored advice for different relationship milestones.</li>
                <li><strong>Real Surprise Success Stories</strong> — Inspiring accounts of actual surprise celebrations at HIVY, showcasing the diverse ways couples have stunned their partners with joy.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why We Share Surprise Expertise
              </h3>
              <p>
                Not every surprise unfolds at HIVY, and we genuinely embrace that truth. Sometimes you simply need inspiration — a creative spark that helps you surprise your partner at home, at a meaningful location, or anywhere your love story calls you. Our blog fulfills that need abundantly. We share our surprise planning expertise freely because we believe that when surprises throughout Surat become more thoughtful and perfectly executed, relationships everywhere grow stronger.
              </p>
              <p>
                Of course, if you encounter an idea that thrills you and realize it would be absolutely perfect in one of our secretly prepared private celebration spaces, we're always just a <a href={`tel:${siteConfig.phone}`} className="text-rose-700 font-bold hover:underline">phone call</a> or <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp message</a> away. Many of our most successful surprises began with a partner reading our blog late at night and realizing, "This is exactly how I want to surprise them."
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Trending Surprise Ideas in Surat
              </h3>
              <p>
                Based on recent surprise celebrations at HIVY and the questions couples share with us, here are the surprise trends captivating Surat couples right now:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Blindfold Reveal Experiences</strong> — Partners being led blindfolded to elaborately decorated surprise setups, with the dramatic reveal moment captured on video for eternal memories.</li>
                <li><strong>Surprise Proposal Setups</strong> — Intricately planned proposal surprises where every detail, from entry to ring presentation, is choreographed for maximum emotional impact.</li>
                <li><strong>Midnight Surprise Celebrations</strong> — Late-night surprises timed so the clock strikes midnight on special dates, making your partner the first surprised at the exact moment their special day begins.</li>
                <li><strong>Decoy Plan Surprises</strong> — Elaborate cover stories that lead partners to believe they're doing one activity while a completely different surprise awaits.</li>
                <li><strong>Multi-Reveal Surprises</strong> — Layered surprise experiences where initial reveals lead to even bigger surprises, creating waves of joy and astonishment.</li>
              </ol>
              <p>
                Explore our articles below for detailed guides on mastering these trends and discovering countless more surprise possibilities. Every article is designed to provide practical, actionable strategies you can implement immediately — whether you're planning a surprise at HIVY or anywhere else in Surat.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-stone-1000">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-rose-700 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-rose-700">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Surprise Blog FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {blogFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Surprise Date?
          </h2>
          <p className="text-stone-200 mb-8 max-w-2xl mx-auto">
            Turn your surprise plans into unforgettable moments at HIVY - Surprise Date Planners, 
            Surat's premier secret surprise date venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-700 hover:bg-stone-100"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-stone-1000">
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
  );
}
