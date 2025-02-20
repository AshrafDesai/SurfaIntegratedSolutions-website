
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';

const Index = () => {
  const services = [
    { title: 'Industrial Powder Supply', description: 'High-quality powder coating materials for industrial applications' },
    { title: 'Touch-up Sprays', description: 'Professional touch-up solutions for perfect finishes' },
    { title: 'Industrial Ovens', description: 'State-of-the-art curing ovens for optimal results' },
    { title: 'Paint Booth Setup', description: 'Complete paint booth solutions and installations' },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Manufacturing Co.',
      content: 'SurfaTech has consistently delivered high-quality powder coating solutions for our projects.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Industrial Solutions Ltd.',
      content: 'Their expertise and professional service have made them our go-to partner for all coating needs.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-up">
              Professional Powder Coating Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-up">
              Trusted provider of industrial powder coating services and supplies
            </p>
            <div className="flex justify-center gap-4 animate-fade-up">
              <Link to="/contact" className="button-primary">
                Get in Touch
              </Link>
              <Link to="/services" className="button-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Industry Leading Expertise',
              'Quality Guaranteed Products',
              'Professional Support',
              'Competitive Pricing',
              'Fast Turnaround Time',
              'Custom Solutions',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
