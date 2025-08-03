import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Kimani',
      position: 'Business Owner',
      content: 'CyberKenya made my KRA registration process so smooth and hassle-free. Their team handled everything professionally and kept me updated throughout.',
      rating: 5,
      company: 'Kimani Enterprises'
    },
    {
      name: 'David Ochieng',
      position: 'University Student',
      content: 'The academic writing support I received was exceptional. They helped me with my research proposal and I got accepted into my dream program.',
      rating: 5,
      company: 'University of Nairobi'
    },
    {
      name: 'Grace Wanjiku',
      position: 'Small Business Owner',
      content: 'From logo design to website creation, CyberKenya transformed my business digital presence. Highly recommend their graphic design services.',
      rating: 5,
      company: 'Grace Fashion House'
    },
    {
      name: 'John Mwangi',
      position: 'IT Professional',
      content: 'Their cybersecurity training was comprehensive and practical. I now feel confident about protecting my business from digital threats.',
      rating: 5,
      company: 'Tech Solutions Ltd'
    },
    {
      name: 'Mary Njeri',
      position: 'Entrepreneur',
      content: 'The virtual assistance services have been a game-changer for my business. Professional, reliable, and always available when needed.',
      rating: 5,
      company: 'Njeri Consultancy'
    },
    {
      name: 'Peter Kamau',
      position: 'Travel Enthusiast',
      content: 'CyberKenya handled my visa application perfectly. The process was smooth and I got my visa approved without any issues.',
      rating: 5,
      company: 'Personal Client'
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-gray-50 to-cyan-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by individuals and businesses across Kenya for their digital service needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-cyan-500" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-sm text-cyan-600 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-8 py-4 shadow-md">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600">Average rating: 5.0/5 from 200+ clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}