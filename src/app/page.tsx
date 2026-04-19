import Image from "next/image";
import Carousel from "@/components/Carousel";

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Slime Monsters team at their market booth", title: "Our Amazing Team at Work" },
  { src: "/images/gallery-2.png", alt: "Slime Monsters merchandise and setup", title: "Professional Market Setup" },
  { src: "/images/gallery-3.png", alt: "Variety of slime products on display", title: "Our Slime Product Collection" },
  { src: "/images/gallery-4.png", alt: "Team members creating slimes and serving customers", title: "Interactive Slime Making" },
  { src: "/images/gallery-5.png", alt: "Happy Slime Monsters entrepreneurs", title: "Young Entrepreneurs in Action" },
  { src: "/images/gallery-6.png", alt: "Slime products and branded merchandise display", title: "Premium Products & Branding" },
];

const featureCards = [
  {
    src: "/images/feature-1.png",
    alt: "Glossy colorful slime creations at Slime Monsters market",
    title: "Amazing Glossy & Cloud Slimes",
    desc: "Discover unique slime creations from creative young minds",
  },
  {
    src: "/images/feature-2.png",
    alt: "Young entrepreneurs selling handmade slime at Slime Monsters event",
    title: "Young Slime Creators & Entrepreneurs",
    desc: "Support kids building their own businesses",
  },
  {
    src: "/images/feature-3.png",
    alt: "Families enjoying slime activities at Slime Monsters market",
    title: "Family Fun at Slime Monsters Events",
    desc: "Perfect event for the whole family to enjoy",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Carousel */}
      <Carousel />

      {/* Hero Section */}
      <section className="text-center px-4 py-12 max-w-4xl mx-auto">
        <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6">
          Slime Monsters!
        </h1>
        <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover the amazing types of slimes Slime Monsters has! From glossy slimes to stretchy
          cloud slimes, our collection features every texture and color imaginable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to Our YouTube
          </a>
          <a
            href="#register"
            className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Register Now!
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Slime Monsters Event Highlights &amp; Photo Gallery
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Take a look at the amazing moments from our previous slime events. See the creativity,
          joy, and entrepreneurial spirit in action!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="group bg-card-bg rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter + Registration */}
      <section id="register" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Updates on Upcoming Slime Monsters Events
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We will let you know where and when will be our next event. Don&apos;t miss out on this
            amazing opportunity to discover incredible slime products from talented young
            entrepreneurs.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-card-bg rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-bold mb-2">Join the Slime Fun!</h3>
          <p className="text-muted mb-6">Register now to secure your spot at the market</p>

          <form
            name="registration"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="registration" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="parent-name" className="block text-sm font-medium mb-1">
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="parent-name"
                name="parent-name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="child-name" className="block text-sm font-medium mb-1">
                Child&apos;s Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="child-name"
                name="child-name"
                required
                placeholder="Enter child's name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="child-age" className="block text-sm font-medium mb-1">
                Child&apos;s Age
              </label>
              <input
                type="number"
                id="child-age"
                name="child-age"
                min="1"
                max="18"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md font-semibold transition-colors cursor-pointer"
            >
              Register Now! 🎯
            </button>
          </form>
        </div>
      </section>

      {/* Upcoming Events & Partners */}
      <section className="px-4 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Upcoming Slime Monsters Slime Events &amp; Markets
        </h2>
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://kidsmarkets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light font-medium transition-colors"
          >
            Partnering with the Children&apos;s Entrepreneur Market
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <div
              key={card.src}
              className="bg-card-bg rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-muted">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Contact Slime Monsters – Event &amp; Vendor Inquiries
        </h2>
        <div className="flex items-center justify-center gap-3">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a
            href="mailto:slimemonst3rs@gmail.com"
            className="text-primary hover:text-primary-light font-medium text-lg transition-colors"
          >
            slimemonst3rs@gmail.com
          </a>
        </div>
      </section>

      {/* Follow & Share */}
      <section className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-6">Follow &amp; Share</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe
          </button>
          <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 9V5.5C14 4.12 15.12 3 16.5 3H18V0h-3c-2.76 0-5 2.24-5 5v4H7v3h3v12h4V12h3l1-3h-4z" />
            </svg>
            Like
          </button>
          <button className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-md font-medium transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share This Event
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card-bg py-8 px-4 text-center">
        <p className="text-muted">
          © 2025 Slime Monsters. Get ready for the slimiest, most fun market experience ever! 🎉
        </p>
      </footer>
    </div>
  );
}
