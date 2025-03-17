import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chinelo Okafor",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      quote: "The care I received was exceptional. The staff treated me with genuine kindness and professionalism throughout my stay."
    },
    {
      name: "Emeka Nwosu",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "State-of-the-art facilities combined with compassionate care made my recovery swift and stress-free."
    },
    {
      name: "Ifeoma Adeyemi",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      quote: "Every step of my treatment was managed with precision and heart. I felt supported and confident in my care team."
    }
  ];
  

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real experiences from our valued patients
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;