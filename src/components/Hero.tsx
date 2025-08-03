import React from 'react';
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Secure Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kenya's premier cybersecurity firm providing comprehensive protection against evolving digital threats. 
              We safeguard your business with cutting-edge security solutions and expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Protected Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center">
                <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Advanced Protection</h3>
                <p className="text-gray-400 text-sm">24/7 monitoring and threat detection</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center mt-8">
                <Lock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Data Security</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade encryption</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center -mt-4">
                <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Threat Intelligence</h3>
                <p className="text-gray-400 text-sm">Proactive threat hunting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}