import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: "🏥",
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams and state-of-the-art equipment.",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Doctors",
      description: "Highly qualified medical professionals with years of experience in various specialties.",
    },
    {
      icon: "💉",
      title: "Vaccination",
      description: "Comprehensive vaccination services for all age groups with proper medical consultation.",
    },
    {
      icon: "🔬",
      title: "Laboratory",
      description: "Advanced diagnostic laboratory with accurate and timely test results.",
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description: "Complete dental care services from routine check-ups to complex procedures.",
    },
    {
      icon: "👶",
      title: "Pediatric Care",
      description: "Specialized medical care for infants, children, and adolescents.",
    },
    // New services added below
    {
      icon: "✂",
      title: "Surgery",
      description: "Comprehensive surgical services with state-of-the-art facilities and experienced surgeons.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Planning",
      description: "Family planning services including consultations, contraceptives, and reproductive health education.",
    },
  
{
  icon: "🩺",
  title: "Cardiology",
  description: "Comprehensive cardiac care services including diagnosis, treatment, and rehabilitation.",
},

    {
      icon: "🤰",
      title: "Obstetrics and Gynaecology",
      description: "Specialized care for women's health, including pregnancy, childbirth, and reproductive system disorders.",
    },
    {
      icon: "💉",
      title: "Immunisation",
      description: "Routine immunisation services to protect against various infectious diseases.",
    },
    {
      icon: "🖥️",
      title: "Ultrasound Scan",
      description: "Advanced ultrasound imaging services for accurate diagnosis and monitoring.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive healthcare services for you and your family
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;