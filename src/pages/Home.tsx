import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Wrench, Home as HomeIcon, Building, Palette, Hammer, Shield, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build Africa,<br />
              <span className="text-secondary-light">Brick by Bond</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
              Welcome to Afribond Builders, your trusted partner in quality construction and building excellence. 
              With a commitment to precision, community, and lasting craftsmanship, we offer services that are 
              not only reliable but transformative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="xl"
                className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/portfolio">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { icon: HomeIcon, title: 'General Building' },
              { icon: Wrench, title: 'Renovations' },
              { icon: Building, title: 'Tiling & Plastering' },
              { icon: Shield, title: 'Roofing & Ceilings' },
              { icon: Palette, title: 'Painting' },
              { icon: Hammer, title: 'Electrical & Plumbing' }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Choose Afribond Builders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Award, title: 'Level 1 B-BBEE', desc: 'Certified Level 1 B-BBEE status for government and private projects' },
              { icon: CheckCircle, title: 'Workmanship Guarantee', desc: 'We stand by our work with comprehensive guarantees' },
              { icon: Users, title: 'Community Empowered', desc: 'Local workforce building local futures' },
              { icon: Star, title: 'Affordable Rates', desc: 'Cost-effective solutions without compromising quality' },
              { icon: Clock, title: 'Timely Delivery', desc: 'Projects completed on schedule, every time' },
              { icon: Shield, title: 'Safety Compliant', desc: 'Health & safety policy compliant operations' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:border-secondary-light hover:shadow-medium transition-all duration-300 group">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mx-auto mb-4 group-hover:text-secondary-dark transition-colors" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            Contact us today for a free consultation and let's bring your vision to life
          </p>
          <Button 
            asChild
            variant="hero"
            size="xl"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;