// =====================================================================
//  THE ONLY FILE YOU NEED TO EDIT FOR MOST CHANGES
//  Change the text between the quote marks, save, and the site updates.
//  Anything marked  TODO  is a placeholder waiting for your real info.
// =====================================================================

export const site = {
  name: "Loopline Social",            // TODO: temporary name, replace anytime
  shortName: "Loopline",
  tagline: "Social media that earns attention and keeps it.",
  email: "ajanahmeti2010@gmail.com",         // TODO: your real business email
  phone: "",                          // optional, leave "" to hide
  location: "",                       // optional, e.g. "Serving clients worldwide"
  url: "url: "https://loopline-social.pages.dev",",   // TODO: your live site address

  // CONTACT FORM (free via Web3Forms). Get a key at https://web3forms.com
  // Paste it between the quotes. Until you do, the form shows a setup message.
  web3formsKey: "web3formsKey: "22663f65-198c-4008-b54e-7a1af630c3a9",",

  // BOOKING BUTTON (free via Cal.com). Paste your booking link, e.g. https://cal.com/yourname/intro
  // If empty, the "Free Consultation" button scrolls to the contact form instead.
  bookingUrl: "",

  socials: {
    instagram: "",  // TODO: your agency Instagram URL
    tiktok: "",     // TODO: your agency TikTok URL
  },
};

export const colors = {
  // Colors live in src/index.css under @theme (ink, bone, signal). Edit the hex codes there.
};

export const hero = {
  headline: "Your brand deserves more than just views.",
  sub: "We help businesses turn Instagram and TikTok into a steady engine for visibility, engagement, and growth.",
  primaryCta: "Get a Free Consultation",
  secondaryCta: "Explore Our Work",
};

// ---------------------------------------------------------------
// RESULTS STRIP + CASE STUDIES
// All numbers below were provided by you. To change one, edit the
// text between the quote marks. Numbers like "90,000" or "2.8M" count
// up on screen automatically. Words like "Millions" just appear.
// ---------------------------------------------------------------
export const resultsSection = {
  title: "Proven social media results",
  intro: "Real numbers from two brands I've worked on, across TikTok and Instagram.",
  note: "Figures provided by the agency founder.",   // small print under the stats. Add a date here if you like.
};

export const stats = [
  { value: "90,000", label: "followers, Your Boujie Frenchie" },
  { value: "6.9M", label: "views on its most-viewed video" },
  { value: "1.7M", label: "likes on one Wicked Wolf Bear Co video" },
  { value: "2", label: "platforms: TikTok and Instagram" },
];

export const caseStudies = [
  {
    name: "Your Boujie Frenchie",
    handle: "@yourboujiefrenchie",
    tiktok: "https://www.tiktok.com/@yourboujiefrenchie",
    instagram: "https://www.instagram.com/yourboujiefrenchie/",
    style: "counters",   // "counters" = big animated numbers, "cards" = stat cards
    headline: "Short-form video at scale",
    description: [
      "Your Boujie Frenchie shows what short-form video can do for a brand. With 90,000 followers and 2.8 million likes, the account has built a large, engaged audience on social media.",
      "Its most-viewed video reached 6.9 million views, which is the kind of visibility most brands never see from a single post. It's a clear example of how a strong video, shared by an audience that cares, can put a brand in front of millions of people.",
    ],
    metrics: [
      { value: "90,000", label: "Followers" },
      { value: "2.8M", label: "Total likes" },
      { value: "6.9M", label: "Views on most-viewed video" },
    ],
    highlights: [
      "90,000 followers",
      "2.8 million likes",
      "A single video with 6.9 million views",
      "Active on both TikTok and Instagram",
    ],
    role: "",   // OPTIONAL: describe what you did, in your own words. Leave "" to hide this line.
  },
  {
    name: "Wicked Wolf Bear Co",
    handle: "@wickedwolfbearco",
    tiktok: "https://www.tiktok.com/@wickedwolfbearco",
    instagram: "https://www.instagram.com/wickedwolfbearco/",
    style: "cards",
    headline: "Big reach from a small account",
    description: [
      "Wicked Wolf Bear Co proves that a smaller account can still earn major exposure. With 1,900 followers, it has had videos reach millions of views, and one video received 1.7 million likes.",
      "The results come from viral content and creative storytelling. They show that reach on short-form platforms depends on how well a video connects with viewers, not only on how many followers an account has.",
    ],
    metrics: [
      { value: "1,900", label: "Followers" },
      { value: "1.7M", label: "Likes on one video" },
      { value: "Millions", label: "Views across videos" },
    ],
    highlights: [
      "One video with 1.7 million likes",
      "Videos that have reached millions of views",
      "Wide reach from an account of 1,900 followers",
      "Active on both TikTok and Instagram",
    ],
    role: "",
  },
];

export const services = [
  { icon: "calendar", title: "Social Media Management", text: "We plan, post, and manage your accounts so you stay consistent without living in the apps." },
  { icon: "music", title: "TikTok Growth Strategy", text: "Hooks, formats, and posting rhythm built for how TikTok actually decides what to show." },
  { icon: "camera", title: "Instagram Growth Strategy", text: "Reels, carousels, and stories that make people stop, follow, and come back." },
  { icon: "video", title: "Short-Form Content Strategy", text: "A repeatable system for videos your customers will watch to the end." },
  { icon: "palette", title: "Brand Development", text: "A clear look, voice, and story so your page feels like one business, not random posts." },
  { icon: "message", title: "Social Media Consulting", text: "Already posting? We review what you have and give you a plain-English plan to improve it." },
];

export const why = [
  { title: "A strategy for your business", text: "No copy-paste playbooks. We start with your customers and your goals." },
  { title: "Native to TikTok and Instagram", text: "We spend our time on these platforms and know what is working right now." },
  { title: "Hands-on brand experience", text: "Experience with real brand accounts, not just theory." },
  { title: "Creative planning", text: "Content calendars that leave room for trends and good ideas." },
  { title: "Clear communication", text: "You always know what is going out and why." },
  { title: "Engagement over vanity", text: "We care about comments, saves, and customers, not just view counts." },
];

export const steps = [
  { title: "Free Consultation", text: "A short call about your business, goals, and what you've tried." },
  { title: "Brand and Audience Analysis", text: "We study your page, your competitors, and the people you want to reach." },
  { title: "Custom Social Media Strategy", text: "You get a plan: content pillars, formats, and a posting schedule." },
  { title: "Content Management and Optimization", text: "We run the plan, watch the numbers, and keep improving it." },
];

// PACKAGES: edit prices and features here.
// "price" is the number, "period" is the small text after it. Set highlight: true on ONE package for the "Most Popular" badge.
export const packages = [
  { name: "Starter", price: "$99", period: "/month", blurb: "A steady start on one platform.",
    features: ["8 posts per month", "1 social media platform", "Captions and hashtags", "Content scheduling", "Basic content planning"] },
  { name: "Growth", price: "$199", period: "/month", highlight: true, badge: "Most Popular", blurb: "Consistent posting with real strategy behind it.",
    features: ["14 posts per month", "Up to 2 social media platforms", "Captions and hashtags", "Content strategy", "Post scheduling", "Monthly performance reports"] },
  { name: "Premium", price: "$349", period: "/month", blurb: "The most posts, plus deeper strategy and support.",
    features: ["20 posts per month", "Up to 2 social media platforms", "Advanced content strategy", "Captions and scheduling", "Engagement monitoring", "Detailed monthly analytics", "Priority support"] },
];

// Small print shown under the packages
export const pricingNotes = [
  "Post counts are the total across all platforms.",
  "You provide the primary photos and videos.",
  "Original filming and advanced editing are available at an extra cost.",
];

export const about = {
  title: "Built by someone who lives on these platforms.",
  paragraphs: [
    "This agency was started by a young entrepreneur who has worked on real brand accounts and learned what holds attention on TikTok and Instagram.",
    "The approach is simple: understand the business, find what makes it worth following, and show up consistently. Ambition and creativity come first, with a personal touch that bigger agencies can't match.",
  ],
};

export const budgets = ["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500+", "Not sure yet"];

export const faqs = [
  { q: "How much does social media management cost?", a: "Packages start at $99 per month and go up to $349 per month, depending on how many posts you want and how much strategy and reporting you need. See the pricing section for what each includes. Original filming and advanced editing cost extra." },
  { q: "Which platforms do you manage?", a: "Instagram and TikTok." },
  { q: "How quickly can results appear?", a: "Some things improve quickly, like consistency and engagement. Real audience growth takes steady work over months, and no one can honestly promise specific numbers." },
  { q: "Do I need to provide content?", a: "Yes, you provide the primary photos and videos. We handle the captions, hashtags, planning, and scheduling. Original filming and advanced editing are available at an extra cost." },
  { q: "Do you work with small businesses?", a: "Yes. Small businesses, local shops, e-commerce stores, and growing brands are who we're built for." },
  { q: "How do I get started?", a: "Book a free consultation or send the contact form. We'll reply with next steps." },
];

export const legal = {
  privacy: "We collect only what you send through the contact form (name, email, and your message) and use it to reply to you. We do not sell your information. TODO: have this reviewed or replaced with a generator's policy before launch.",
  terms: "Services, pricing, and timelines are agreed in writing before work starts. This website is for information only. TODO: replace with your own terms before launch.",
};
