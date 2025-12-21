import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Neuromorphix
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Neuromorphic Computing · AI Research · Brain-Inspired Systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/research"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Research
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of computing through brain-inspired technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neural Networks</h3>
              <p className="text-gray-600 mb-4">
                Advanced spiking neural networks that mimic biological brain processes for energy-efficient computation.
              </p>
              <Link to="/research" className="text-blue-600 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neuromorphic Hardware</h3>
              <p className="text-gray-600 mb-4">
                Custom chip architectures designed to implement brain-like computing paradigms at scale.
              </p>
              <Link to="/research" className="text-purple-600 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Ultra-low-power AI systems that consume orders of magnitude less energy than traditional approaches.
              </p>
              <Link to="/research" className="text-green-600 font-semibold inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in advancing the future of neuromorphic computing and artificial intelligence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us Today
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}