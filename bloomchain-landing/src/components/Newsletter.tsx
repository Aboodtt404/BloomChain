import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Check, AlertCircle, Sparkles, Gift } from 'lucide-react'

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  notifications: z.boolean(),
  updates: z.boolean(),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

const Newsletter: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      notifications: true,
      updates: true,
    },
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true)
    
    // Simulate API call (replace with actual newsletter service)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Newsletter signup:', data)
    setIsSubmitted(true)
    setIsLoading(false)
    reset()
  }

  const benefits = [
    "Early access to beta testing",
    "Exclusive NFT airdrops for supporters", 
    "Priority in game events and competitions",
    "Developer insights and behind-the-scenes content"
  ]

  if (isSubmitted) {
    return (
      <section id="newsletter" className="py-20 bg-gradient-to-br from-earth-900 via-gray-900 to-web3-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-earth-500/20 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-earth-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to the BloomChain Family! 🌱
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              You're now on the wishlist! Check your email for a confirmation and your first exclusive update.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-golden-500/20 border border-golden-500/30 rounded-full px-6 py-3 text-golden-300">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Exclusive NFT airdrop coming soon!</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-earth-900 via-gray-900 to-web3-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-golden-500/20 border border-golden-500/30 rounded-full px-4 py-2 text-sm font-medium text-golden-300">
                <Sparkles className="w-4 h-4" />
                <span>Join the Community</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-gradient-gold">Be Among</span>{' '}
                <span className="text-white">the First</span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Join our exclusive wishlist and be the first to experience the future of Web3 gaming. 
                Get early access, exclusive rewards, and shape the development of BloomChain.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-4">What you'll get:</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-earth-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-earth-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-web3-400 animate-pulse" />
                <span>Built on ICP</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-golden-400 animate-pulse" />
                <span>No Spam Promise</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-golden-500/10 to-earth-500/10 rounded-3xl blur-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-tl from-web3-500/10 to-accent-500/10 rounded-3xl blur-2xl transform -rotate-3" />
            
            <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-earth-500 focus:ring-2 focus:ring-earth-500/20 transition-all duration-200"
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </div>
                  )}
                </div>

                {/* Preferences */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      {...register('notifications')}
                      type="checkbox"
                      id="notifications"
                      className="w-4 h-4 text-earth-500 bg-gray-900 border-gray-600 rounded focus:ring-earth-500 focus:ring-2"
                    />
                    <label htmlFor="notifications" className="text-sm text-gray-300">
                      Get notified about game updates and new features
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      {...register('updates')}
                      type="checkbox"
                      id="updates"
                      className="w-4 h-4 text-earth-500 bg-gray-900 border-gray-600 rounded focus:ring-earth-500 focus:ring-2"
                    />
                    <label htmlFor="updates" className="text-sm text-gray-300">
                      Receive exclusive content and early access opportunities
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-golden text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Wishlist</span>
                      <Sparkles className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time. 
                  <br />
                  By joining, you agree to our terms and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter 