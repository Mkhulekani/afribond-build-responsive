import React from 'react';

const About = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Who We Are</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">About Afribond Builders</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Afribond Builders is a 100% black-owned South African construction company committed to rebuilding, 
              restoring, and reshaping our communities through quality infrastructure and empowered service delivery. 
              We are passionate about building the future of Africa, one brick at a time, with precision, pride, and purpose.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded by passionate professionals with a deep-rooted belief in transforming the built environment, 
              Afribond offers a full spectrum of construction services across residential, commercial, and public sectors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent to-secondary/10 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Our Leadership</h3>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-soft">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Azania M Mosiroe</h4>
              <p className="text-secondary font-medium mb-3">Founder & Managing Director</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                A visionary builder dedicated to transforming South African townships and rural communities 
                through meaningful construction work, economic participation, and legacy projects.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-gradient-primary text-white p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              To become a leading force in African construction and infrastructure development, 
              setting new standards for quality, sustainability, and community empowerment.
            </p>
          </div>
          <div className="bg-gradient-secondary text-white p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="text-base sm:text-lg space-y-2 leading-relaxed">
              <li>• Deliver reliable and affordable building services</li>
              <li>• Uplift local talent through employment and training</li>
              <li>• Promote sustainable development</li>
              <li>• Build with integrity, safety, and long-term impact</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Integrity', desc: 'We build on truth' },
              { title: 'Excellence', desc: 'No shortcuts, only strong foundations' },
              { title: 'Community', desc: 'Local hands building local futures' },
              { title: 'Innovation', desc: 'African solutions for African challenges' },
              { title: 'Accountability', desc: 'We stand by our work' }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">{value.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Communities Served' },
              { number: '100+', label: 'Local Jobs Created' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;