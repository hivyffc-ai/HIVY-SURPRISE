// HIVY SURPRISE DATE - Premium Romantic Date Experiences - Surat
// Main configuration file for the HIVY Surprise Date website - 100% Surprise Date Focused

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
  hidden?: boolean; // If true, package won't show on website but data is preserved
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "HIVY Surprise Date",
  tagline: "Create Magical Surprise Date Moments for Your Special Someone",
  description: "Surat's premier surprise date venue. Plan romantic surprise dates for boyfriend, girlfriend, husband, or wife with private rooftop setups, candlelit ambiance, and unforgettable experiences.",
  phone: "09727027278",
  whatsapp: "919727027278",
  email: "hello@hivy.co.in",
  address: "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat, Gujarat 394510",
  city: "Surat",
  website: "https://hivy.co.in",
  colors: {
    primary: "#BE185D", // Deep Romantic Rose
    secondary: "#D4A574", // Champagne Gold
    accent: "#E879A9",   // Rose Gold
    gradient: "from-rose-700 to-pink-600",
    gradientHover: "from-rose-800 to-pink-700",
    lightBg: "bg-rose-50",
    darkBg: "bg-rose-900",
    text: "text-rose-800"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hivy_placeforcelebration/?hl=en",
    facebook: "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (Surprise Date Focused) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "tent-of-romance",
    name: "Tent of Romance",
    emoji: "⛺💕✨",
    shortDescription: "Step into a cozy romantic tent for an intimate surprise date under soft lights and dreamy décor ✨",
    fullDescription: `⛺💕✨ Tent of Romance @ ₹6500/- only — the ultimate surprise date setup where intimacy meets elegance

Experience the most romantic surprise date at Surat's premier private venue ✨. Tent of Romance is designed for couples who want to create unforgettable surprise date memories with their special someone.

🎂 Surprise Date Essentials
• Celebration Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)
• Photography Package: ₹2700/-
  - 10 to 15 Photos
  - 30 to 45 seconds Reel
  - Same day delivery

⏰ 3 Hours of Pure Romance
3 hours of complete privacy for your surprise date, each moment designed to strengthen your bond and create lasting memories.

⛺ Intimate Tent Setup
Transform your surprise date into a magical experience. From personalized messages written in real rose petals to a complete transformation of the space, we design every detail to make your partner feel incredibly special.

🌸 Romantic Ambiance
The tent features flowing curtains, vibrant flowers, and twinkling fairy lights, creating the perfect backdrop for your surprise date.

🌹 Rose Petal Art
7kg of real rose petals arranged in romantic patterns on the floor, customizable to spell names or love messages.

🕯️ Candlelit Atmosphere
Strategically placed candles create the warm, intimate glow perfect for a surprise date evening.

🍽️ Gourmet Experience
Delicious multi-course dishes specially prepared to complement your romantic surprise date.

🎶 Mood Music
Soft romantic playlist enhancing every moment of your surprise date.

🎉 Perfect For
Surprise Date for Girlfriend | Surprise Date for Boyfriend | Surprise Date for Wife | Surprise Date for Husband | Monthly Anniversary Date | First Date | Special Date Night

📍 Best surprise date setup Surat | Private romantic date venue`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Private Surprise Date Experience ⛺",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Photography Package: ₹2700/-",
      "7kg Real Rose Petals Floor Art 🌹",
      "Romantic Tent with Curtains & Fairy Lights 💡",
      "Vintage Props & Bohemian Décor",
      "Comfortable Intimate Seating 💑",
      "Candle-Lit Ambiance 🕯️",
      "Multi-Course Gourmet Dining 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-Worthy Setup 📸"
    ],
    perfectFor: ["Surprise Date for Girlfriend", "Surprise Date for Boyfriend", "Surprise Date for Wife", "Surprise Date for Husband", "First Date", "Monthly Anniversary"],
    thumbnail: "/packages/thumbnails/Tent of Romance @ 6500_- only.png",
    images: [
      "/packages/tent-of-romance/images/12.png",
      "/packages/tent-of-romance/images/13.png",
      "/packages/tent-of-romance/images/14.png",
      "/packages/tent-of-romance/images/15.png",
      "/packages/tent-of-romance/images/16.png",
      "/packages/tent-of-romance/images/17.png",
      "/packages/tent-of-romance/images/18.png",
      "/packages/tent-of-romance/images/19.png",
      "/packages/tent-of-romance/images/20.png",
      "/packages/tent-of-romance/images/21.png",
      "/packages/tent-of-romance/images/22.png",
      "/packages/tent-of-romance/images/23.png",
      "/packages/tent-of-romance/images/24.png",
      "/packages/tent-of-romance/images/25.png",
      "/packages/tent-of-romance/images/26.png",
      "/packages/tent-of-romance/images/62.png",
      "/packages/tent-of-romance/images/63.png",
      "/packages/tent-of-romance/images/64.png",
      "/packages/tent-of-romance/images/65.png",
      "/packages/tent-of-romance/images/66.png",
      "/packages/tent-of-romance/images/67.png",
      "/packages/tent-of-romance/images/68.png",
      "/packages/tent-of-romance/images/69.png",
      "/packages/tent-of-romance/images/70.png",
      "/packages/tent-of-romance/images/71.png",
      "/packages/tent-of-romance/images/72.png",
      "/packages/tent-of-romance/images/73.png",
      "/packages/tent-of-romance/images/74.png",
      "/packages/tent-of-romance/images/75.png",
      "/packages/tent-of-romance/images/76.png"
    ]
  },
  {
    id: "setup-2",
    slug: "fairy-tale-date",
    name: "Fairy Tale Date",
    emoji: "🧚✨💖",
    shortDescription: "Step into a magical fairytale surprise date where dreams come true ✨",
    fullDescription: `🧚✨💖 Fairy Tale Date @ ₹6300/- — transform your surprise date into a magical fairytale experience

Step into a magical fairytale setting for the most enchanting surprise date at Surat's premier romantic venue ✨.

🎂 Date Essentials
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours of fairy tale romance, each moment designed to make your surprise date feel like a dream come true.

✨ Enchanted Setup
We turn your surprise date into a magical experience. Our expert team creates a stunning atmosphere with a floor adorned in real rose petals, an intimate tent draped in elegant curtains, and twinkling fairy lights that set the perfect romantic mood.

🌸 Dreamy Decorations
The space is decorated with flowing curtains, vibrant flowers, and thousands of fairy lights, creating a magical ambiance perfect for your surprise date.

🪴 Whimsical Props
Unique vintage lanterns, bohemian rugs, and fairy tale elements transport you both to a world of pure romance.

🌹 Rose Petal Magic
7kg of real rose petals arranged in enchanting patterns, customizable to your preference.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Marriage Proposal

📍 Best fairytale proposal venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 6300,
    cakeIncluded: true,
    features: [
      "3 Hours Private Fairytale Celebration ✨",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Magical Tent with Elegant Curtains",
      "7kg Real Rose Petals Floor Art 🌹",
      "Twinkling Fairy Lights Setup 💡",
      "Unique Vintage Props & Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Perfect for Proposals 💍"
    ],
    perfectFor: ["Marriage Proposal", "Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot"],
    thumbnail: "/packages/thumbnails/Fairy Tale Proposals.png",
    images: [
      "/packages/fairy-tale-proposals/2.png",
      "/packages/fairy-tale-proposals/3.png",
      "/packages/fairy-tale-proposals/4.png",
      "/packages/fairy-tale-proposals/5.png",
      "/packages/fairy-tale-proposals/6.png",
      "/packages/fairy-tale-proposals/7.png",
      "/packages/fairy-tale-proposals/8.png",
      "/packages/fairy-tale-proposals/9.png",
      "/packages/fairy-tale-proposals/10.png"
    ]
  },
  {
    id: "setup-3",
    slug: "swing-of-love",
    name: "Swing of LOVE",
    emoji: "🪽💕",
    shortDescription: "Float in love on a dreamy swing setup where romance meets playfulness ✨",
    fullDescription: `🪽💕 Swing of LOVE @ ₹5100/- — where love takes flight, moments feel lighter, and hearts swing together in perfect harmony

Experience the magic of romance on a beautifully decorated swing setup at Surat's most unique romantic venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🪽 Swing Of LOVE
"Swing of Love" is a beautifully designed decorative piece that symbolizes romance, harmony, and elegance. Featuring a gracefully crafted swing adorned with delicate embellishments, it creates a dreamy and charming ambiance. Perfect for special occasions, this piece adds a touch of love and serenity to any space.

🌸 Curtains, Flowers, and Lights
The space is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Also Comfortable Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful space.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Date Night

📍 Best swing setup venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 5100,
    cakeIncluded: true,
    features: [
      "3 Hours Private Swing Setup Celebration 🪽",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Beautiful Decorated Swing of Love",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Décor 🌹",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Photo Spots 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Date Night"],
    thumbnail: "/packages/thumbnails/Swing of LOVE @ 5100.png",
    images: [
      "/packages/swing-of-love/images/28.png",
      "/packages/swing-of-love/images/29.png",
      "/packages/swing-of-love/images/30.png",
      "/packages/swing-of-love/images/31.png",
      "/packages/swing-of-love/images/32.png",
      "/packages/swing-of-love/images/33.png",
      "/packages/swing-of-love/images/34.png",
      "/packages/swing-of-love/images/35.png",
      "/packages/swing-of-love/images/36.png",
      "/packages/swing-of-love/images/37.png",
      "/packages/swing-of-love/images/38.png",
      "/packages/swing-of-love/images/39.png",
      "/packages/swing-of-love/images/40.png",
      "/packages/swing-of-love/images/41.png",
      "/packages/swing-of-love/images/42.png",
      "/packages/swing-of-love/images/43.png",
      "/packages/swing-of-love/images/44.png"
    ]
  },
  {
    id: "setup-4",
    slug: "boho-chic",
    name: "BoHo Chic",
    emoji: "🌾🪶✨",
    shortDescription: "Embrace free-spirited romance in a bohemian paradise filled with warmth and elegance ✨",
    fullDescription: `🌾🪶✨ BoHo Chic @ ₹5700/- — where bohemian vibes meet romantic elegance, and every moment feels effortlessly beautiful

Step into a boho-inspired wonderland where rustic charm meets modern romance at Surat's premier bohemian venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🌾 Boho Styled Tent
Our tent is a work of art, with its intricate details and bohemian flair. Step inside and feel the cares of the world melt away as you immerse yourself in its cozy embrace.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Boho Theme Party

📍 Best bohemian venue Surat | Boho celebration cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: true,
    features: [
      "3 Hours Private Bohemian Celebration 🌾",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Artistic Boho Styled Tent",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Art 🌹",
      "Vintage Lanterns & Bohemian Rugs 🪴",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Intimate Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof Experience with Wind 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Boho Theme Party"],
    thumbnail: "/packages/thumbnails/BoHo Chic @ 5700.png",
    images: [
      "/packages/boho-chic/images/46.png",
      "/packages/boho-chic/images/47.png",
      "/packages/boho-chic/images/48.png",
      "/packages/boho-chic/images/49.png",
      "/packages/boho-chic/images/50.png",
      "/packages/boho-chic/images/51.png",
      "/packages/boho-chic/images/52.png",
      "/packages/boho-chic/images/53.png",
      "/packages/boho-chic/images/54.png",
      "/packages/boho-chic/images/55.png",
      "/packages/boho-chic/images/56.png",
      "/packages/boho-chic/images/57.png",
      "/packages/boho-chic/images/58.png",
      "/packages/boho-chic/images/59.png",
      "/packages/boho-chic/images/60.png"
    ]
  },
  {
    id: "setup-5",
    slug: "twin-heart",
    name: "TwinHeart",
    emoji: "💕💕",
    shortDescription: "Celebrate love with twin hearts symbolizing two souls becoming one ✨",
    fullDescription: `💕💕 TwinHeart @ ₹4700/- only — where two hearts beat as one, and love is celebrated in its purest form

Experience the magic of togetherness in a beautifully decorated twin heart setup at Surat's most romantic venue ✨.

🎂 Cake & Champagne
• Cake: ₹500/-
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

❤️ Elegant Tent
Combining Red and White color to realm of elegance and luxury, where white curtains softly frame the scene, gentle lighting dances in the air, combined with Red Rose Petals.

🌸 Curtains, Flowers, and Lights
Decorating the floor with Red Roses giving twin heart shapes, enhanced by carefully selected props. The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
Immerse yourselves in the romance of a love story told through petals. Our Twin Hearts Rose Petal Decoration is designed to capture the essence of your connection. A beautiful arrangement of delicate rose petals forms two intertwined hearts, symbolizing the bond that ties you and your partner together. Surrounded by soft, fragrant petals, this stunning setup creates a breathtaking moment—perfect for a proposal, anniversary, or any celebration of love.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Couple Date Night

📍 Best heart-themed venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Twin Heart Celebration 💕",
      "Cake Available: ₹500/-",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Elegant Red & White Tent Setup",
      "Twin Heart Rose Petal Floor Art 🌹",
      "Flowing Curtains & Twinkling Lights 💡",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof with Gentle Breeze 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Couple Date Night"],
    thumbnail: "/packages/thumbnails/TwinHeart @ 4700_- only.png",
    images: [
      "/packages/tent-of-romance/images/62.png",
      "/packages/tent-of-romance/images/63.png",
      "/packages/tent-of-romance/images/64.png",
      "/packages/tent-of-romance/images/65.png",
      "/packages/tent-of-romance/images/66.png",
      "/packages/tent-of-romance/images/67.png",
      "/packages/tent-of-romance/images/68.png",
      "/packages/tent-of-romance/images/69.png",
      "/packages/tent-of-romance/images/70.png",
      "/packages/tent-of-romance/images/71.png",
      "/packages/tent-of-romance/images/72.png",
      "/packages/tent-of-romance/images/73.png",
      "/packages/tent-of-romance/images/74.png",
      "/packages/tent-of-romance/images/75.png",
      "/packages/tent-of-romance/images/76.png"
    ],
    hidden: true // Hidden from website but data preserved
  },
  {
    id: "setup-6",
    slug: "the-elite-group-setup",
    name: "Elite Group Setup",
    emoji: "💍✨",
    shortDescription: "Create a one-of-a-kind proposal experience tailored just for your love story ✨",
    fullDescription: `💍✨ Elite Group Setup — where your unique love story gets the perfect setting it deserves

Make your proposal truly unforgettable with a customized setup designed around your love story at Surat's best elite group setup venue ✨.

📦 Package Includes
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 2 Mesmerizing Hours
2 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

✨ What Makes This Experience Special?
• A fully decorated private setup with rose petals, warm fairy lights, and aesthetic details
• Lower seating arrangement for a relaxed and intimate vibe
• Exclusive reservation — the space is yours alone
• Background music to enhance the mood
• Ideal for photography & videography to capture your special moments
• Neon LED message to add to your mood
• Perfect for proposals, birthdays, bride-to-be celebrations, or any personal milestone

⚠️ This experience focuses on ambience and celebration. Food is not included in this package.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, and Neon LED light message, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

📌 Important Notes
• This package does not include food or beverages
• Ideal for couples or small groups accompanying the celebration
• Advance booking recommended due to limited availability

🎉 Perfect For
Marriage Proposal Surat | Birthday Celebration | Bride-to-Be Party | Anniversary Surprise | Personal Milestones | Pre-Wedding Photoshoot

📍 Best elite group setup venue Surat | Custom celebration cafe Gotri | Couple-friendly venue`,
    price: 5400,
    cakeIncluded: true,
    features: [
      "2 Hours Private Elite Group Celebration 💍",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Fully Decorated Private Setup ✨",
      "Rose Petals & Warm Fairy Lights",
      "Neon LED Custom Message 💡",
      "Exclusive Reservation - Space is Yours",
      "Lower Seating for Intimate Vibe 💑",
      "Candle-Lit Ambiance 🕯️",
      "Romantic Background Music 🎶",
      "Perfect for Photography & Videography 📸",
      "⚠️ Food NOT included in this package"
    ],
    perfectFor: ["Marriage Proposal", "Birthday Celebration", "Bride-to-Be Party", "Anniversary Surprise", "Personal Milestones", "Pre-Wedding Photoshoot"],
    thumbnail: "/packages/thumbnails/Elite Group Setup.png",
    images: [
      "/packages/Elite Group Setup/78.png",
      "/packages/Elite Group Setup/79.png",
      "/packages/Elite Group Setup/80.png",
      "/packages/Elite Group Setup/81.png",
      "/packages/Elite Group Setup/82.png",
      "/packages/Elite Group Setup/83.png",
      "/packages/Elite Group Setup/84.png",
      "/packages/Elite Group Setup/85.png",
      "/packages/Elite Group Setup/86.png",
      "/packages/Elite Group Setup/87.png",
      "/packages/Elite Group Setup/88.png",
      "/packages/Elite Group Setup/89.png",
      "/packages/Elite Group Setup/90.png",
      "/packages/Elite Group Setup/91.png",
      "/packages/Elite Group Setup/92.png",
      "/packages/Elite Group Setup/93.png",
      "/packages/Elite Group Setup/94.png",
      "/packages/Elite Group Setup/95.png",
      "/packages/Elite Group Setup/96.png",
      "/packages/Elite Group Setup/97.png",
      "/packages/Elite Group Setup/98.png",
      "/packages/Elite Group Setup/99.png",
      "/packages/Elite Group Setup/100.png",
      "/packages/Elite Group Setup/101.png",
      "/packages/Elite Group Setup/102.png",
      "/packages/Elite Group Setup/103.png",
      "/packages/Elite Group Setup/104.png",
      "/packages/Elite Group Setup/105.png",
      "/packages/Elite Group Setup/106.png",
      "/packages/Elite Group Setup/107.png",
      "/packages/Elite Group Setup/108.png",
      "/packages/Elite Group Setup/109.png",
      "/packages/Elite Group Setup/110.png"
    ]
  }
];

// Get visible packages (excluding hidden ones) in specific order: 5100, 5700, 6300, 6500, 5400
export const getVisiblePackages = (): SetupPackage[] => {
  const priceOrder = [5100, 5700, 6300, 6500, 5400];
  return packages
    .filter(pkg => !pkg.hidden)
    .sort((a, b) => {
      const aIndex = priceOrder.indexOf(a.price);
      const bIndex = priceOrder.indexOf(b.price);
      // If price not in order array, put at end
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Free in select packages, ₹350 for others", price: "Free / ₹350", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES (100% SURPRISE DATE FOCUSED) ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "surprise-date",
    name: "Surprise Date",
    emoji: "💖",
    description: "Transform ordinary moments into extraordinary memories with romantic surprise date setups, intimate themes, and unforgettable experiences for couples in Surat.",
    metaTitle: "Surprise Date Setup in Surat | HIVY Surprise Date",
    metaDescription: "Plan the perfect surprise date in Surat at HIVY Surprise Date. Private rooftop setups, romantic decorations, and magical moments for couples. Book now!",
    keywords: [
      // EXISTING KEYWORDS (KEPT)
      { slug: "surprise-date-for-boyfriend-surat", title: "Surprise Date for Boyfriend", h1: "Romantic Surprise Date Ideas for Boyfriend in Surat", metaTitle: "Surprise Date for Boyfriend Surat | Make Him Feel Special", metaDescription: "Plan the perfect surprise date for your boyfriend in Surat. Romantic rooftop setup, candlelit ambiance, and unforgettable moments at HIVY Surprise Date." },
      { slug: "surprise-date-for-girlfriend-surat", title: "Surprise Date for Girlfriend", h1: "Magical Surprise Date Ideas for Girlfriend in Surat", metaTitle: "Surprise Date for Girlfriend Surat | Make Her Smile", metaDescription: "Create a magical surprise date for your girlfriend in Surat with beautiful decorations, fairy lights, and romantic ambiance at HIVY Surprise Date." },
      { slug: "surprise-date-for-husband-surat", title: "Surprise Date for Husband", h1: "Romantic Surprise Date for Husband in Surat", metaTitle: "Surprise Date for Husband Surat | Rekindle the Romance", metaDescription: "Plan a special surprise date for your husband in Surat. Private venue, romantic setup, and intimate dinner at HIVY Surprise Date." },
      { slug: "surprise-date-for-wife-surat", title: "Surprise Date for Wife", h1: "Elegant Surprise Date for Wife in Surat", metaTitle: "Surprise Date for Wife Surat | Make Her Day Unforgettable", metaDescription: "Create an elegant surprise date for your wife in Surat with flowers, candles, and a romantic dinner at HIVY Surprise Date." },
      { slug: "romantic-surprise-surat", title: "Romantic Surprise", h1: "Romantic Surprise Ideas in Surat", metaTitle: "Romantic Surprise Surat | Unforgettable Couple Moments", metaDescription: "Plan a romantic surprise in Surat with stunning decorations and intimate setting at HIVY Surprise Date venue." },
      { slug: "surprise-date-ideas-surat", title: "Surprise Date Ideas", h1: "Best Surprise Date Ideas in Surat", metaTitle: "Surprise Date Ideas Surat 2026 | Creative Date Plans", metaDescription: "Discover creative surprise date ideas in Surat. From rooftop dinners to candlelight setups at HIVY Surprise Date." },
      { slug: "surprise-date-planners-surat", title: "Surprise Date Planners", h1: "Professional Surprise Date Planners in Surat", metaTitle: "Surprise Date Planners Surat | Expert Date Setup Service", metaDescription: "Expert surprise date planners in Surat. We create perfect romantic moments at HIVY Surprise Date venue." },
      { slug: "surprise-date-setup-surat", title: "Surprise Date Setup", h1: "Beautiful Surprise Date Setup in Surat", metaTitle: "Surprise Date Setup Surat | Romantic Decorations & Arrangements", metaDescription: "Book a surprise date setup in Surat with beautiful arrangements, candles, and flowers at HIVY Surprise Date rooftop." },
      { slug: "surprise-date-places-surat", title: "Surprise Date Places", h1: "Best Surprise Date Places in Surat", metaTitle: "Surprise Date Places Surat | Top Romantic Venues", metaDescription: "Find the best surprise date places in Surat. HIVY Surprise Date offers private rooftop celebrations for couples." },
      { slug: "surprise-date-night-surat", title: "Surprise Date Night", h1: "Magical Surprise Date Night in Surat", metaTitle: "Surprise Date Night Surat | Evening Romance & Candlelight", metaDescription: "Plan a magical surprise date night in Surat with candlelight, music, and romantic ambiance at HIVY Surprise Date." },
      { slug: "unique-date-ideas-surat", title: "Unique Date Ideas", h1: "Unique Date Ideas in Surat", metaTitle: "Unique Date Ideas Surat | Stand Out from the Ordinary", metaDescription: "Find unique date ideas in Surat to make your evening special at HIVY Surprise Date venue." },
      { slug: "special-date-surat", title: "Special Date", h1: "Special Date Setup in Surat", metaTitle: "Special Date Surat | Create Memorable Moments", metaDescription: "Plan a special date in Surat with romantic setup and decorations at HIVY Surprise Date." },
      { slug: "couple-date-surat", title: "Couple Date", h1: "Romantic Couple Date Experience in Surat", metaTitle: "Couple Date Surat | Private Romantic Evening", metaDescription: "Enjoy a couple date experience in Surat with romantic ambiance at HIVY Surprise Date venue." },
      { slug: "surprise-date-decoration-surat", title: "Surprise Date Decoration", h1: "Stunning Surprise Date Decoration in Surat", metaTitle: "Surprise Date Decoration Surat | Flowers, Candles & More", metaDescription: "Beautiful surprise date decoration in Surat with flowers, candles, and fairy lights at HIVY Surprise Date." },
      
      // NEW 20 KEYWORDS (ADDED)
      { slug: "rooftop-date-surat", title: "Rooftop Date", h1: "Romantic Rooftop Date Setup in Surat", metaTitle: "Rooftop Date Surat | Private Terrace Date with City Views", metaDescription: "Book a magical rooftop date in Surat with stunning city views, candlelight setup, and romantic decoration at HIVY Surprise Date." },
      { slug: "private-cabin-date-surat", title: "Private Cabin Date", h1: "Private Cabin Date Experience in Surat", metaTitle: "Private Cabin Date Surat | Intimate Couple Cabin Setup", metaDescription: "Experience an intimate private cabin date in Surat with cozy decoration, candlelight dinner, and complete privacy at HIVY Surprise Date." },
      { slug: "outdoor-date-ideas-surat", title: "Outdoor Date Ideas", h1: "Best Outdoor Date Ideas in Surat", metaTitle: "Outdoor Date Ideas Surat | Open-Air Romantic Experiences", metaDescription: "Discover romantic outdoor date ideas in Surat including rooftop setups, garden themes, and nature-inspired surprises at HIVY Surprise Date." },
      { slug: "indoor-date-setup-surat", title: "Indoor Date Setup", h1: "Cozy Indoor Date Setup in Surat", metaTitle: "Indoor Date Setup Surat | Private Room Date Decoration", metaDescription: "Create a magical indoor date experience in Surat with beautiful room decoration and intimate ambiance at HIVY Surprise Date." },
      { slug: "sunset-date-surat", title: "Sunset Date", h1: "Magical Sunset Date Experience in Surat", metaTitle: "Sunset Date Surat | Golden Hour Romance & Evening Magic", metaDescription: "Plan a breathtaking sunset date in Surat with golden hour views and romantic setup at HIVY Surprise Date." },
      { slug: "midnight-surprise-date-surat", title: "Midnight Surprise Date", h1: "Midnight Surprise Date in Surat", metaTitle: "Midnight Surprise Date Surat | 12 AM Late Night Romance", metaDescription: "Surprise your partner with a magical midnight date in Surat. 12 AM celebration setup and starlit surprises at HIVY Surprise Date." },
      { slug: "weekend-date-ideas-surat", title: "Weekend Date Ideas", h1: "Best Weekend Date Ideas in Surat", metaTitle: "Weekend Date Ideas Surat | Saturday & Sunday Date Plans", metaDescription: "Make your weekends special with romantic date ideas in Surat. Weekend setups and couple activities at HIVY Surprise Date." },
      { slug: "first-date-setup-surat", title: "First Date Setup", h1: "Perfect First Date Setup in Surat", metaTitle: "First Date Setup Surat | Impressive First Date Ideas", metaDescription: "Make your first date unforgettable in Surat with professional setup and romantic planning at HIVY Surprise Date." },
      { slug: "monthly-anniversary-date-surat", title: "Monthly Anniversary Date", h1: "Monthly Anniversary Date Celebration in Surat", metaTitle: "Monthly Anniversary Date Surat | Monthiversary Celebration", metaDescription: "Celebrate your monthly anniversary in Surat with a special date setup and romantic decoration at HIVY Surprise Date." },
      { slug: "just-because-date-surat", title: "Just Because Date", h1: "Spontaneous 'Just Because' Date in Surat", metaTitle: "Just Because Date Surat | Surprise Date for No Reason", metaDescription: "Plan a surprise 'just because' date in Surat to show your love unexpectedly at HIVY Surprise Date." },
      { slug: "makeup-date-surat", title: "Makeup Date", h1: "Romantic Makeup Date Setup in Surat", metaTitle: "Makeup Date Surat | Apology Date & Reconciliation Setup", metaDescription: "Plan a heartfelt makeup date in Surat to apologize and reconnect with romantic gestures at HIVY Surprise Date." },
      { slug: "luxury-date-experience-surat", title: "Luxury Date Experience", h1: "Luxury Date Experience in Surat", metaTitle: "Luxury Date Surat | Premium VIP Romantic Experience", metaDescription: "Indulge in a luxury date experience in Surat with premium decorations and VIP treatment at HIVY Surprise Date." },
      { slug: "budget-friendly-date-surat", title: "Budget Friendly Date", h1: "Budget Friendly Date Ideas in Surat", metaTitle: "Budget Friendly Date Surat | Affordable Romantic Setup", metaDescription: "Plan an affordable yet romantic date in Surat without breaking the bank at HIVY Surprise Date." },
      { slug: "intimate-date-experience-surat", title: "Intimate Date Experience", h1: "Intimate Date Experience in Surat", metaTitle: "Intimate Date Surat | Private & Cozy Couple Date", metaDescription: "Create an intimate date experience in Surat with private settings and personal touches at HIVY Surprise Date." },
      { slug: "creative-date-ideas-surat", title: "Creative Date Ideas", h1: "Creative Date Ideas in Surat", metaTitle: "Creative Date Ideas Surat | Unusual & Out-of-the-Box", metaDescription: "Discover creative and unusual date ideas in Surat with artistic setups at HIVY Surprise Date." },
      { slug: "surprise-picnic-date-surat", title: "Surprise Picnic Date", h1: "Surprise Picnic Date Setup in Surat", metaTitle: "Surprise Picnic Date Surat | Romantic Outdoor Picnic", metaDescription: "Book a surprise picnic date in Surat with gourmet basket and beautiful setup at HIVY Surprise Date." },
      { slug: "movie-date-setup-surat", title: "Movie Date Setup", h1: "Private Movie Date Setup in Surat", metaTitle: "Movie Date Surat | Private Theatre Experience for Couples", metaDescription: "Plan a private movie date in Surat with projector setup and cozy seating at HIVY Surprise Date." },
      { slug: "stargazing-date-surat", title: "Stargazing Date", h1: "Romantic Stargazing Date in Surat", metaTitle: "Stargazing Date Surat | Under the Stars Romance", metaDescription: "Experience a magical stargazing date in Surat under the night sky at HIVY Surprise Date rooftop." },
      { slug: "garden-date-setup-surat", title: "Garden Date Setup", h1: "Beautiful Garden Date Setup in Surat", metaTitle: "Garden Date Surat | Floral Romantic Dinner Setup", metaDescription: "Book a romantic garden-themed date in Surat with floral decoration at HIVY Surprise Date." },
      { slug: "poolside-date-surat", title: "Poolside Date", h1: "Romantic Poolside Date Setup in Surat", metaTitle: "Poolside Date Surat | Luxury Pool Date Experience", metaDescription: "Book an exclusive poolside-themed date setup in Surat with romantic ambiance at HIVY Surprise Date." }
    ]
  }
];

// ==================== SURAT AREAS ====================
export const suratAreas: AreaConfig[] = [
  { slug: "adajan-surat", name: "Adajan", metaTitle: "Surprise Date in Adajan, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Adajan, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "athwa-surat", name: "Athwa", metaTitle: "Surprise Date in Athwa, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Athwa, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "vesu-surat", name: "Vesu", metaTitle: "Surprise Date in Vesu, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Vesu, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "piplod-surat", name: "Piplod", metaTitle: "Surprise Date in Piplod, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Piplod, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "city-light-surat", name: "City Light", metaTitle: "Surprise Date in City Light, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near City Light, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "pal-surat", name: "Pal", metaTitle: "Surprise Date in Pal, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Pal, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "ghod-dod-road-surat", name: "Ghod Dod Road", metaTitle: "Surprise Date in Ghod Dod Road, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Ghod Dod Road, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "ring-road-surat", name: "Ring Road", metaTitle: "Surprise Date in Ring Road, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Ring Road, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "vip-road-surat", name: "VIP Road", metaTitle: "Surprise Date in VIP Road, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near VIP Road, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "dumas-road-surat", name: "Dumas Road", metaTitle: "Surprise Date in Dumas Road, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Dumas Road, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "katargam-surat", name: "Katargam", metaTitle: "Surprise Date in Katargam, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Katargam, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "varachha-surat", name: "Varachha", metaTitle: "Surprise Date in Varachha, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Varachha, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "udhna-surat", name: "Udhna", metaTitle: "Surprise Date in Udhna, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Udhna, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "pandesara-surat", name: "Pandesara", metaTitle: "Surprise Date in Pandesara, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Pandesara, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "sachin-surat", name: "Sachin", metaTitle: "Surprise Date in Sachin, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Sachin, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "sarthana-surat", name: "Sarthana", metaTitle: "Surprise Date in Sarthana, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Sarthana, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "magdalla-surat", name: "Magdalla", metaTitle: "Surprise Date in Magdalla, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Magdalla, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "althan-surat", name: "Althan", metaTitle: "Surprise Date in Althan, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Althan, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "bhatar-surat", name: "Bhatar", metaTitle: "Surprise Date in Bhatar, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Bhatar, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "rander-surat", name: "Rander", metaTitle: "Surprise Date in Rander, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Rander, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "jahangirpura-surat", name: "Jahangirpura", metaTitle: "Surprise Date in Jahangirpura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Jahangirpura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "hajira-surat", name: "Hajira", metaTitle: "Surprise Date in Hajira, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Hajira, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "olpad-surat", name: "Olpad", metaTitle: "Surprise Date in Olpad, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Olpad, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "kadodara-surat", name: "Kadodara", metaTitle: "Surprise Date in Kadodara, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Kadodara, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "kim-surat", name: "Kim", metaTitle: "Surprise Date in Kim, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Kim, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "amroli-surat", name: "Amroli", metaTitle: "Surprise Date in Amroli, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Amroli, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "limbayat-surat", name: "Limbayat", metaTitle: "Surprise Date in Limbayat, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Limbayat, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "kapodra-surat", name: "Kapodra", metaTitle: "Surprise Date in Kapodra, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Kapodra, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "bamroli-surat", name: "Bamroli", metaTitle: "Surprise Date in Bamroli, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Bamroli, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "parvat-patiya-surat", name: "Parvat Patiya", metaTitle: "Surprise Date in Parvat Patiya, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Parvat Patiya, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "majura-gate-surat", name: "Majura Gate", metaTitle: "Surprise Date in Majura Gate, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Majura Gate, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "nanpura-surat", name: "Nanpura", metaTitle: "Surprise Date in Nanpura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Nanpura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "gopipura-surat", name: "Gopipura", metaTitle: "Surprise Date in Gopipura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Gopipura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "begumpura-surat", name: "Begumpura", metaTitle: "Surprise Date in Begumpura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Begumpura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "mahidharpura-surat", name: "Mahidharpura", metaTitle: "Surprise Date in Mahidharpura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Mahidharpura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "sagrampura-surat", name: "Sagrampura", metaTitle: "Surprise Date in Sagrampura, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Sagrampura, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "dindoli-surat", name: "Dindoli", metaTitle: "Surprise Date in Dindoli, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Dindoli, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "mota-varachha-surat", name: "Mota Varachha", metaTitle: "Surprise Date in Mota Varachha, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Mota Varachha, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "new-city-light-surat", name: "New City Light", metaTitle: "Surprise Date in New City Light, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near New City Light, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." },
  { slug: "parle-point-surat", name: "Parle Point", metaTitle: "Surprise Date in Parle Point, Surat | HIVY Surprise Date", metaDescription: "Plan a romantic surprise date near Parle Point, Surat. Book private rooftop dates, candlelit setups & unforgettable experiences for your partner at HIVY." }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  const pkg = packages.find(p => p.slug === slug);
  // Return undefined if package is hidden (treat as not found)
  if (pkg?.hidden) return undefined;
  return pkg;
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return suratAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "surprise-date-ideas-surat",
    title: "Top 15 Surprise Date Ideas in Surat 2026",
    excerpt: "Discover creative and romantic surprise date ideas to sweep your partner off their feet in Surat.",
    metaTitle: "Top 15 Surprise Date Ideas in Surat 2026 | Best Ideas",
    metaDescription: "Looking for surprise date ideas in Surat? Discover 15 creative ways to surprise your partner, from rooftop dates to midnight surprises.",
    coverImage: "/packages/tent-of-romance/images/12.png",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["surprise date", "romantic", "surat", "date ideas"]
  },
  {
    slug: "romantic-date-night-ideas-surat",
    title: "Romantic Date Night Ideas in Surat",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Surat couples.",
    metaTitle: "Romantic Date Night Ideas in Surat 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Surat? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/packages/tent-of-romance/images/13.png",
    publishedAt: "2026-01-12",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "surat"]
  },
  {
    slug: "best-rooftop-date-spots-surat",
    title: "Best Rooftop Date Spots in Surat 2026",
    excerpt: "Explore the most romantic rooftop spots in Surat for an unforgettable surprise date experience.",
    metaTitle: "Best Rooftop Date Spots in Surat 2026 | Top Picks",
    metaDescription: "Find the best rooftop date spots in Surat. Private settings, sky-high dining & romantic ambiance for couples.",
    coverImage: "/packages/swing-of-love/images/28.png",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["rooftop date", "romantic", "couples", "surat"]
  },
  {
    slug: "surprise-date-for-girlfriend-guide",
    title: "How to Plan a Surprise Date for Your Girlfriend",
    excerpt: "A complete guide to planning the perfect surprise date that will make your girlfriend feel truly special.",
    metaTitle: "Surprise Date for Girlfriend | Complete Planning Guide",
    metaDescription: "Want to surprise your girlfriend with a romantic date? Learn how to plan a memorable surprise with decorations, dinner & romantic setup.",
    coverImage: "/packages/boho-chic/images/46.png",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Surprise Date",
    tags: ["girlfriend", "surprise date", "romantic", "planning"]
  },
  {
    slug: "surprise-date-for-boyfriend-ideas",
    title: "Surprise Date Ideas for Your Boyfriend",
    excerpt: "Creative surprise date ideas that will make your boyfriend feel loved and appreciated.",
    metaTitle: "Surprise Date Ideas for Boyfriend | Make Him Feel Special",
    metaDescription: "Looking for surprise date ideas for your boyfriend? Discover romantic ways to show him how much you care.",
    coverImage: "/packages/tent-of-romance/images/14.png",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["boyfriend", "surprise date", "romantic", "ideas"]
  },
  {
    slug: "private-cabin-date-experience",
    title: "Private Cabin Date: The Ultimate Intimate Experience",
    excerpt: "Discover why private cabin dates are becoming the most popular romantic experience for couples.",
    metaTitle: "Private Cabin Date Experience | Ultimate Intimacy for Couples",
    metaDescription: "Looking for private cabin dates in Surat? Discover the perfect intimate setting for your romantic surprise date.",
    coverImage: "/packages/Elite Group Setup/78.png",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["private cabin", "intimate", "couples", "surat"]
  },
  {
    slug: "surprise-date-for-wife-guide",
    title: "How to Plan a Surprise Date for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise date that will make your wife feel truly special.",
    metaTitle: "Surprise Date for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife with a romantic date? Learn how to plan a memorable surprise with romantic setup & dining.",
    coverImage: "/packages/tent-of-romance/images/15.png",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Surprise Date",
    tags: ["wife", "surprise date", "romantic", "planning"]
  },
  {
    slug: "surprise-date-for-husband-ideas",
    title: "Romantic Surprise Date Ideas for Your Husband",
    excerpt: "Creative ways to plan a surprise date for your husband and make him feel truly loved.",
    metaTitle: "Surprise Date Ideas for Husband | Romantic Planning Guide",
    metaDescription: "Looking for surprise date ideas for your husband? Discover romantic ways to show him appreciation.",
    coverImage: "/packages/fairy-tale-proposals/3.png",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["husband", "surprise date", "romantic", "ideas"]
  },
  {
    slug: "indoor-date-setup-ideas",
    title: "Indoor Date Setup Ideas for Cozy Evenings",
    excerpt: "Create the perfect indoor date atmosphere with these romantic setup ideas for couples.",
    metaTitle: "Indoor Date Setup Ideas | Cozy Romantic Evenings",
    metaDescription: "Planning an indoor date? Discover romantic setup ideas from fairy lights to private dining for the perfect intimate evening.",
    coverImage: "/packages/swing-of-love/images/29.png",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["indoor date", "cozy", "setup", "romantic"]
  },
  {
    slug: "outdoor-date-ideas-surat",
    title: "Outdoor Date Ideas in Surat for Nature Lovers",
    excerpt: "Escape the routine with these romantic outdoor date ideas perfect for couples in Surat.",
    metaTitle: "Outdoor Date Ideas Surat | Romantic Nature Dates",
    metaDescription: "Looking for outdoor date ideas in Surat? Discover romantic spots from gardens to rooftops for your perfect date.",
    coverImage: "/packages/boho-chic/images/47.png",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Date Night",
    tags: ["outdoor date", "nature", "romantic", "surat"]
  },
  {
    slug: "sunset-date-romantic-experience",
    title: "Sunset Date: The Most Romantic Time for Couples",
    excerpt: "Why sunset dates create the most magical romantic moments and how to plan one.",
    metaTitle: "Sunset Date Ideas | Most Romantic Time for Couples",
    metaDescription: "Planning a sunset date? Discover why golden hour creates the perfect romantic ambiance for couples.",
    coverImage: "/packages/tent-of-romance/images/16.png",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["sunset date", "romantic", "golden hour", "couples"]
  },
  {
    slug: "midnight-surprise-date-ideas",
    title: "Midnight Surprise Date Ideas That Will Wow Your Partner",
    excerpt: "Create magical midnight moments with these creative surprise date ideas for couples.",
    metaTitle: "Midnight Surprise Date Ideas | Late Night Romance",
    metaDescription: "Looking for midnight surprise date ideas? Discover creative ways to surprise your partner after dark.",
    coverImage: "/packages/Elite Group Setup/79.png",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["midnight", "surprise date", "romantic", "night"]
  },
  {
    slug: "monthly-anniversary-date-ideas",
    title: "Monthly Anniversary Date Ideas to Keep Romance Alive",
    excerpt: "Creative ways to celebrate your monthly anniversary and keep the spark alive in your relationship.",
    metaTitle: "Monthly Anniversary Date Ideas | Keep Romance Alive",
    metaDescription: "Celebrate your monthly anniversary with these romantic date ideas. Keep the spark alive with regular surprise dates.",
    coverImage: "/packages/tent-of-romance/images/17.png",
    publishedAt: "2025-12-12",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["monthly anniversary", "romantic", "couples", "ideas"]
  },
  {
    slug: "first-date-setup-tips",
    title: "First Date Setup: Tips to Make It Memorable",
    excerpt: "How to plan the perfect first date setup that leaves a lasting impression.",
    metaTitle: "First Date Setup Tips | Make It Memorable",
    metaDescription: "Planning a first date? Get tips on creating the perfect setup that will make a lasting impression.",
    coverImage: "/packages/fairy-tale-proposals/4.png",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Date Night",
    tags: ["first date", "setup", "tips", "memorable"]
  },
  {
    slug: "budget-friendly-date-ideas-surat",
    title: "Budget-Friendly Date Ideas in Surat",
    excerpt: "Romantic date ideas that won't break the bank but will create priceless memories.",
    metaTitle: "Budget-Friendly Date Ideas Surat | Affordable Romance",
    metaDescription: "Looking for affordable date ideas in Surat? Discover romantic dates that create lasting memories without the hefty price tag.",
    coverImage: "/packages/swing-of-love/images/30.png",
    publishedAt: "2025-12-08",
    readTime: "5 min",
    category: "Date Night",
    tags: ["budget", "affordable", "date ideas", "surat"]
  },
  {
    slug: "luxury-date-experience-guide",
    title: "Luxury Date Experience: How to Plan an Unforgettable Evening",
    excerpt: "Create a premium romantic experience with these luxury date ideas and tips.",
    metaTitle: "Luxury Date Experience Guide | Premium Romance",
    metaDescription: "Want to plan a luxury date experience? Discover premium romantic ideas for an unforgettable evening.",
    coverImage: "/packages/fairy-tale-proposals/5.png",
    publishedAt: "2025-12-05",
    readTime: "7 min",
    category: "Surprise Date",
    tags: ["luxury", "premium", "date experience", "romantic"]
  },
  {
    slug: "creative-date-ideas-couples",
    title: "Creative Date Ideas for Adventurous Couples",
    excerpt: "Break the routine with these unique and creative date ideas for couples who love adventure.",
    metaTitle: "Creative Date Ideas | Unique Experiences for Couples",
    metaDescription: "Tired of the same old dates? Discover creative and unique date ideas for adventurous couples.",
    coverImage: "/packages/boho-chic/images/48.png",
    publishedAt: "2025-12-02",
    readTime: "6 min",
    category: "Date Night",
    tags: ["creative", "unique", "adventure", "couples"]
  },
  {
    slug: "stargazing-date-romantic-guide",
    title: "Stargazing Date: A Guide to Romantic Night Sky Experiences",
    excerpt: "Plan the perfect stargazing date with this comprehensive romantic guide for couples.",
    metaTitle: "Stargazing Date Guide | Romantic Night Under the Stars",
    metaDescription: "Planning a stargazing date? Learn how to create the perfect romantic evening under the stars.",
    coverImage: "/packages/tent-of-romance/images/18.png",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Surprise Date",
    tags: ["stargazing", "night sky", "romantic", "date"]
  },
  {
    slug: "surprise-picnic-date-ideas",
    title: "Surprise Picnic Date Ideas for Outdoor Romance",
    excerpt: "Plan the perfect surprise picnic date with these romantic ideas and tips.",
    metaTitle: "Surprise Picnic Date Ideas | Outdoor Romance Guide",
    metaDescription: "Looking for picnic date ideas? Discover how to plan the perfect surprise outdoor romantic experience.",
    coverImage: "/packages/swing-of-love/images/31.png",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Surprise Date",
    tags: ["picnic", "outdoor", "surprise date", "romantic"]
  },
  {
    slug: "movie-date-setup-ideas",
    title: "Movie Date Setup Ideas for the Perfect Night In",
    excerpt: "Create the ultimate movie date experience with these romantic setup ideas.",
    metaTitle: "Movie Date Setup Ideas | Perfect Night In for Couples",
    metaDescription: "Planning a movie date? Discover setup ideas that transform a regular movie night into a romantic experience.",
    coverImage: "/packages/fairy-tale-proposals/6.png",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["movie date", "setup", "night in", "romantic"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
