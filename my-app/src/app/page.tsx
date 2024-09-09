'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MessageCircle, Users, Lightbulb, Calendar } from 'lucide-react'

export default function LandingPage() {
  const [stats, setStats] = useState({ couples: 0, questions: 0, emotions: 0 })
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        couples: Math.min(prev.couples + 1, 10000),
        questions: Math.min(prev.questions + 10, 50000),
        emotions: Math.min(prev.emotions + 5, 25000)
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200">
      <header className="fixed w-full z-50 bg-white bg-opacity-70 backdrop-blur-md">
        <div className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e0LJuVXzkDgPB0ZXrLdbbVk7XKnuw3.png" alt="Flamme Logo" width={120} height={40} />
            <nav className="hidden md:flex space-x-6">
              {['Home', 'Features', 'Testimonials', 'FAQ', 'Get Flamme App'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                  {item}
                </Link>
              ))}
            </nav>
            <button className="md:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ opacity, scale }} className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">Reignite Your <span className="text-pink-600">Love</span></h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Connect deeper with Flamme's AI-powered relationship coach</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105">
                Download for iOS
              </button>
              <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                Download for Android
              </button>
            </div>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sfmwetRYe2CADPFDHGT1CPZaLJ6P35.png" alt="Flamme App Interface" layout="fill" objectFit="cover" className="opacity-30" />
          </div>
        </section>

        <section id="features" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience Flamme</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sfmwetRYe2CADPFDHGT1CPZaLJ6P35.png" 
                  alt="Flamme App Interface" 
                  width={600} 
                  height={600} 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-3xl font-semibold mb-6 text-pink-600">Strengthen Your Bond</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MessageCircle className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" />
                    <span>Daily questions to spark meaningful conversations</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" />
                    <span>Express your feelings with our emotion tracker</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" />
                    <span>Get personalized advice from our AI relationship coach</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" />
                    <span>Improve intimacy and communication with tailored activities</span>
                  </li>
                </ul>
                <button className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How Flamme Adds Value to Your Relationship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Daily Questions', icon: MessageCircle, description: 'Spark meaningful conversations and navigate modern relationship complexities.' },
                { title: 'Relationship Tools', icon: Calendar, description: 'Strengthen your bond with interactive quizzes and bucket list ideas.' },
                { title: 'Engagement Features', icon: Heart, description: 'Stay connected with quick updates, emojis, and reactions.' },
                { title: 'AI Love Coach', icon: Lightbulb, description: 'Get personalized advice to guide you through relationship ups and downs.' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(stats).map(([key, value]) => (
                <motion.div 
                  key={key}
                  className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-5xl font-bold text-white mb-2">{value.toLocaleString()}</p>
                  <p className="text-xl text-pink-200 capitalize">{key}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'John & Jane', years: '5', text: 'Flamme has transformed our relationship. We feel more connected than ever!' },
                { name: 'Mike & Sarah', years: '3', text: 'The daily questions have sparked conversations we never thought to have. It\'s been eye-opening!' }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-200 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-pink-600">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Together for {testimonial.years} years</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="get-flamme-app" className="py-20 px-6 bg-gradient-to-r from-purple-200 to-pink-200">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Ignite Your Relationship?</h2>
            <p className="text-xl text-gray-600 mb-8">Download Flamme now and start your journey to a stronger connection.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105">
                Download for iOS
              </button>
              <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105">
                Download for Android
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e0LJuVXzkDgPB0ZXrLdbbVk7XKnuw3.png" alt="Flamme Logo" width={120} height={40} className="mb-4" />
              <p className="text-sm">Connecting hearts, one question at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Blog', 'Privacy Policy', 'Terms of Use'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-pink-400 transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-col space-y-2">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="hover:text-pink-400 transition-colors duration-300">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Download</h3>
              <div className="space-y-2">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-pink-200 w-full transition-colors duration-300">
                  App Store
                </button>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-purple-200 w-full transition-colors duration-300">
                  Google Play
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Flamme. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}