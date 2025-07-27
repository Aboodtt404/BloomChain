import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../contexts/AuthContext'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
})

type NewsletterData = z.infer<typeof newsletterSchema>

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { isAuthenticated, principal } = useAuth()
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      if (isAuthenticated) {
        // TODO: Submit to backend canister
        console.log('Submitting to backend canister:', data)
        // const result = await submitMessage(data.message)
      } else {
        // Fallback to email service for non-authenticated users
        console.log('Using email service for non-authenticated user:', data)
      }
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-emerald-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with BloomChain
          </h2>
          <p className="text-gray-300 mb-8">
            {isAuthenticated 
              ? `Connected as ${principal?.toString().slice(0, 8)}... Send us a message directly through the blockchain!`
              : 'Get the latest updates on our presale, tokenomics, and launch announcements.'
            }
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <textarea
                  {...register('message')}
                  placeholder={isAuthenticated 
                    ? "Send us a message on-chain..." 
                    : "Tell us what you're most excited about..."
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-black px-8 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-blue-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting 
                ? 'Submitting...' 
                : isAuthenticated 
                  ? 'Send Message On-Chain' 
                  : 'Subscribe & Send'
              }
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-emerald-400 text-sm">
                {isAuthenticated 
                  ? 'Message submitted to the blockchain successfully!' 
                  : 'Thank you for subscribing! We\'ll be in touch soon.'
                }
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
          
          {!isAuthenticated && (
            <p className="text-gray-400 text-sm mt-4">
              💡 Connect with Internet Identity to send messages directly to our blockchain!
            </p>
          )}
        </div>
      </div>
    </section>
  )
} 