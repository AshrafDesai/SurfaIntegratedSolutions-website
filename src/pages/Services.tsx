
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Industrial Powder Supply',
      description: 'We offer a comprehensive range of high-quality powder coating materials suitable for various industrial applications. Our powder coatings are sourced from leading manufacturers and meet international quality standards.',
      features: [
        'Custom color matching',
        'Various finish options',
        'Temperature-resistant coatings',
        'Anti-corrosive solutions',
      ],
    },
    {
      title: 'Touch-up Sprays',
      description: 'Our professional touch-up spray solutions ensure perfect finishes for repairs and small-scale applications. We provide color-matched sprays that seamlessly blend with existing coatings.',
      features: [
        'Exact color matching',
        'Quick-drying formulas',
        'UV-resistant options',
        'Easy application',
      ],
    },
    {
      title: 'Industrial Ovens',
      description: 'We supply and install state-of-the-art curing ovens designed for optimal powder coating results. Our ovens are energy-efficient and provide consistent curing temperatures.',
      features: [
        'Temperature control systems',
        'Energy-efficient design',
        'Multiple size options',
        'Installation service',
      ],
    },
    {
      title: 'Paint Booth Setup',
      description: 'Complete paint booth solutions including design, installation, and maintenance. Our booths are designed for maximum efficiency and minimal powder waste.',
      features: [
        'Custom booth design',
        'Ventilation systems',
        'Powder recovery systems',
        'Maintenance services',
      ],
    },
    {
      title: 'Technical Consultation',
      description: 'Expert consultation services for powder coating applications, equipment selection, and process optimization. Our team provides comprehensive support for all your coating needs.',
      features: [
        'Process optimization',
        'Equipment selection',
        'Training programs',
        'Troubleshooting',
      ],
    },
    {
      title: 'Maintenance Services',
      description: 'Regular maintenance and servicing of powder coating equipment to ensure optimal performance and longevity. We provide comprehensive maintenance packages.',
      features: [
        'Preventive maintenance',
        'Equipment repairs',
        'Performance optimization',
        'Emergency support',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
