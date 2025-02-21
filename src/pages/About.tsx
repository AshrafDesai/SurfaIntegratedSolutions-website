// surfatech-web-solution/src/pages/About.tsx
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <div className="card bg-blue-50 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300"> {/* Card for Vision */}
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  To be the leading provider of innovative powder coating solutions, setting industry standards for quality and customer satisfaction while promoting sustainable practices in surface finishing technology.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Innovate continuously to meet evolving market demands.</li>
                  <li>Enhance customer satisfaction through exceptional service.</li>
                  <li>Commit to sustainable practices that protect the environment.</li>
                  <li>Lead the industry in quality and reliability.</li>
                </ul>
              </div>
            </div>
            <div className="animate-fade-up">
              <div className="card bg-green-50 border border-green-200 shadow-md hover:shadow-lg transition-shadow duration-300"> {/* Card for Mission */}
                <h2 className="text-3xl font-bold mb-6 text-green-800">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To deliver exceptional powder coating solutions through technical excellence, quality products, and outstanding customer service, helping our clients achieve superior finish results while maintaining environmental responsibility.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Provide tailored solutions that meet specific client needs.</li>
                  <li>Ensure rigorous quality control and testing for all products.</li>
                  <li>Offer expert consultation and ongoing support to clients.</li>
                  <li>Foster a culture of innovation and continuous improvement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
            <div className="card">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* Owner Image */}
                <div className="md:w-1/3">
                  <img 
                    src="https://surfatechintesoln.netlify.app/img/owner.png" 
                    alt="Mr. M.N. Desai - Founder" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                {/* Owner Description */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Mr. M.N. Desai</h3>
                  <p className="text-gray-600 mb-4">Founder & Technical Director</p>
                  <p className="text-gray-600 mb-4">
                    With over 20 years of expertise in powder coating technology, Mr. M.N. Desai brings unparalleled experience and knowledge to SurfaTech Integrated Solution. His journey includes significant tenures at industry giants like Kansai Nerolac Paints and Asian Paints, where he honed his expertise in powder coating technologies and solutions.
                  </p>
                  <p className="text-gray-600">
                    Under his leadership, SurfaTech has grown to become a trusted name in the powder coating industry, serving clients with innovative solutions and technical excellence.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: 'Industry Expertise',
                description: '20+ years of experience in powder coating technology',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control and testing procedures',
              },
              {
                title: 'Technical Support',
                description: 'Expert consultation and after-sales support',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions for specific industry needs',
              },
              {
                title: 'Environmental Focus',
                description: 'Commitment to sustainable coating practices',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for quality products and services',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;