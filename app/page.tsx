import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, StarIcon, SunIcon, SparklesIcon, UsersIcon, MessageCircleIcon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-stars-gradient text-white backdrop-blur supports-[backdrop-filter]:bg-stars-gradient/90">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <MoonIcon className="h-6 w-6 text-white" />
              <span className="inline-block font-bold">Moonbean</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">{/* Navigation links removed as requested */}</nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-stars-gradient text-white relative overflow-hidden">
          {/* Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`star ${i % 3 === 0 ? "star-lg" : i % 2 === 0 ? "star-md" : "star-sm"}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                  Where Astrology Meets AI Companionship and Social Gifting
                </h1>
                <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                  Make life decisions with your own celestial AI companion and crowdsource advices from your Zodiac
                  community
                </p>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Coming soon
                </Button>
              </div>

              {/* Animation moved below CTA */}
              <div className="mt-16 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4 animate-spin-slow">
                      <StarIcon className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-6 text-yellow-400" />
                      <MoonIcon className="absolute top-1/4 right-0 h-8 w-8 text-blue-400" />
                      <SunIcon className="absolute bottom-0 left-1/2 -translate-x-1/2 h-10 w-10 text-yellow-500" />
                      <SparklesIcon className="absolute top-1/4 left-0 h-7 w-7 text-purple-400" />
                    </div>
                  </div>
                  <div className="z-10 bg-[#0c1445]/80 backdrop-blur-sm rounded-full h-[180px] w-[180px] md:h-[220px] md:w-[220px] flex items-center justify-center">
                    <MoonIcon className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-stars text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Cosmic Insights at Your Fingertips
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Moonbean combines ancient astrological wisdom with cutting-edge AI to deliver personalized celestial
                  guidance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* AI Companion - moved to first position */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <MessageCircleIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">AI Companion</h3>
                <p className="text-center text-white/70">
                  Chat with your personal AI astrologer for guidance, insights, and answers to your cosmic questions.
                </p>
              </div>

              {/* Star Tribe - moved to second position */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <UsersIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Star Tribe</h3>
                <p className="text-center text-white/70">
                  Connect with like-minded individuals in our community of astrology enthusiasts.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <StarIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Natal Charts</h3>
                <p className="text-center text-white/70">
                  Generate accurate birth charts with detailed interpretations of planetary positions and aspects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <SunIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Daily Horoscopes</h3>
                <p className="text-center text-white/70">
                  Receive personalized daily forecasts with actionable advice based on your unique astrological profile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <SparklesIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Detailed Reports</h3>
                <p className="text-center text-white/70">
                  Access comprehensive astrological reports on love, career, and personal growth tailored to your chart.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                <div className="rounded-full bg-purple-600/30 p-4">
                  <MoonIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Moon Phases</h3>
                <p className="text-center text-white/70">
                  Track lunar cycles and receive guidance on the best times for manifestation and personal rituals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stars-gradient text-white">
          <div className="container px-4 md:px-6 relative z-10">
            {/* Stars */}
            <div className="absolute inset-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className={`star ${i % 3 === 0 ? "star-lg" : i % 2 === 0 ? "star-md" : "star-sm"}`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Begin Your Cosmic Journey Today
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock the secrets of the stars and discover your cosmic path with Moonbean.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Coming soon
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-stars text-white py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MoonIcon className="h-6 w-6 text-purple-300" />
                <span className="font-bold">Moonbean</span>
              </div>
              <p className="text-sm text-white/70">AI-powered astrology for your cosmic journey.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-white/70 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
            <p className="text-center text-sm text-white/70 md:text-left">© 2025 Moonbean. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

