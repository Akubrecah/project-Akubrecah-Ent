import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Shield } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@cyberkenya.com',
      subtitle: 'We respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 700 123 456',
      subtitle: '24/7 Emergency Hotline'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      subtitle: 'Westlands Business District'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      subtitle: 'EAT (GMT+3)'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your digital assets? Contact our cybersecurity experts for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-cyan-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Secure Contact Form</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    placeholder="+254 700 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Cybersecurity Consulting</option>
                  <option value="monitoring">Threat Detection & Response</option>
                  <option value="data-protection">Data Protection</option>
                  <option value="network-security">Network Security</option>
                  <option value="cloud-security">Cloud Security</option>
                  <option value="compliance">Compliance Management</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your cybersecurity needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-cyan-500/20 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                        <p className="text-cyan-200 font-medium">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Emergency Response</h4>
              <p className="text-gray-300 mb-4">
                Experiencing a security incident? Our emergency response team is available 24/7 to assist you.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Emergency Hotline: +254 700 911 911
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}