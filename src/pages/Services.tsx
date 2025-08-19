import React from 'react';
import { CheckCircle, Users, Wrench, Home as HomeIcon, Building, Palette, Hammer } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What We Do</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From foundations to finish, we manage complete building projects with precision and pride
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          
          {[
            {
              icon: HomeIcon,
              title: 'Residential & Commercial Building',
              desc: 'Complete building projects from foundations to finish for homes and commercial spaces',
              features: ['New Construction', 'Extensions', 'Structural Work']
            },
            {
              icon: Wrench,
              title: 'Renovations & Extensions',
              desc: 'Transform your existing spaces with professional renovation and extension services',
              features: ['Home Renovations', 'Office Upgrades', 'Space Optimization']
            },
            {
              icon: Building,
              title: 'Paving & Tiling',
              desc: 'Professional tiling and paving services for interior and exterior applications',
              features: ['Floor Tiling', 'Wall Tiling', 'Driveway Paving']
            },
            {
              icon: Palette,
              title: 'Painting & Roofing',
              desc: 'Quality painting and roofing services with durable, weather-resistant solutions',
              features: ['Interior Painting', 'Exterior Painting', 'Roof Installation']
            },
            {
              icon: Users,
              title: 'Project Management',
              desc: 'Complete project oversight ensuring your builds stay on track and within budget',
              features: ['Timeline Management', 'Budget Control', 'Quality Assurance']
            },
            {
              icon: Hammer,
              title: 'Civil Works & Partnerships',
              desc: 'Comprehensive civil works including drainage, foundations, and utility partnerships',
              features: ['Water Drainage', 'Foundation Work', 'Plumbing & Electrical']
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-soft">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Our Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free initial consultation and site assessment' },
              { step: '02', title: 'Planning', desc: 'Detailed project planning and cost estimation' },
              { step: '03', title: 'Construction', desc: 'Professional construction with quality materials' },
              { step: '04', title: 'Completion', desc: 'Final inspection and project handover' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">{process.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Market */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Who We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            {[
              'Homeowners',
              'Government Housing Projects',
              'SMEs & Private Developers',
              'Schools & Clinics',
              'Retail & Industrial Spaces'
            ].map((market, index) => (
              <div key={index} className="p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-secondary hover:shadow-soft transition-all duration-300 group">
                <p className="font-medium text-gray-700 group-hover:text-primary transition-colors text-sm sm:text-base">{market}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;