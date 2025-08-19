import React from 'react';
import { Star } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Work Speaks for Itself</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Over the years, we've worked on diverse projects ranging from home renovations to commercial developments
          </p>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { title: 'Residential Projects', count: '150+', color: 'from-primary to-primary-light' },
            { title: 'Office Spaces', count: '50+', color: 'from-secondary to-secondary-dark' },
            { title: 'Community Projects', count: '25+', color: 'from-green-500 to-green-600' },
            { title: 'Commercial Builds', count: '75+', color: 'from-blue-500 to-blue-600' }
          ].map((category, index) => (
            <div key={index} className={`bg-gradient-to-br ${category.color} text-white p-4 sm:p-6 rounded-xl text-center shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.count}</h3>
              <p className="text-sm sm:text-lg font-medium">{category.title}</p>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Featured Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Modern Family Home',
                location: 'Centurion, Gauteng',
                type: 'Residential',
                description: 'Complete renovation and extension of a 4-bedroom family home with modern finishes.'
              },
              {
                title: 'Community Health Clinic',
                location: 'Mamelodi, Pretoria',
                type: 'Community',
                description: 'New construction of a community health facility serving 500+ families.'
              },
              {
                title: 'Commercial Office Complex',
                location: 'Sandton, Johannesburg',
                type: 'Commercial',
                description: 'Multi-story office building with modern amenities and sustainable features.'
              },
              {
                title: 'School Renovation Project',
                location: 'Atteridgeville, Pretoria',
                type: 'Community',
                description: 'Complete renovation of primary school classrooms and facilities.'
              },
              {
                title: 'Luxury Townhouse Development',
                location: 'Midrand, Gauteng',
                type: 'Residential',
                description: 'Development of 12 luxury townhouses with premium finishes and landscaping.'
              },
              {
                title: 'Industrial Warehouse',
                location: 'Kempton Park, Gauteng',
                type: 'Industrial',
                description: 'Large-scale warehouse construction with specialized loading facilities.'
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Project Image</span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  project.type === 'Residential' ? 'bg-blue-100 text-blue-800' :
                  project.type === 'Community' ? 'bg-green-100 text-green-800' :
                  project.type === 'Commercial' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {project.type}
                </span>
                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Mrs. Tshabalala',
                project: 'Home Renovation',
                rating: 5,
                comment: 'Afribond turned our old house into a dream home. Highly professional and affordable. The team was respectful and completed everything on time.'
              },
              {
                name: 'Mr. Mokwena',
                project: 'Commercial Building',
                rating: 5,
                comment: 'Quality work and on time! Will work with them again. Their attention to detail and commitment to excellence is outstanding.'
              },
              {
                name: 'Thabo Enterprises',
                project: 'Office Extension',
                rating: 5,
                comment: 'Professional service from start to finish. Great value for money and the team went above and beyond our expectations.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Compliance */}
        <div className="mt-12 sm:mt-16 bg-gradient-primary rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Certified & Compliant</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              'CIPC Registered',
              'Level 1 B-BBEE',
              'SARS Tax Compliant',
              'Health & Safety Compliant'
            ].map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                <p className="font-medium text-sm sm:text-base">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;