import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Kimani',
      position: 'CTO, TechFlow Kenya',
      content: 'CyberKenya transformed our security posture completely. Their proactive approach and expert team gave us the confidence to scale our digital operations securely.',
      rating: 5,
      company: 'TechFlow Kenya'
    },
    {
      name: 'David Ochieng',
      position: 'IT Director, Nairobi Bank',
      content: 'The 24/7 monitoring and rapid incident response have been game-changers for our operations. CyberKenya truly understands the Kenyan business landscape.',
      rating: 5,
      company: 'Nairobi Bank'
    },
    {
      name: 'Grace Wanjiku',
      position: 'Founder, E-Commerce Plus',
      content: 'Working with CyberKenya has been exceptional. Their team not only secured our platform but also helped us achieve compliance with international standards.',
      rating: 5,
      company: 'E-Commerce Plus'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Kenya for their cybersecurity needs.
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
            <span className="text-gray-600">Average rating: 5.0/5 from 150+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}