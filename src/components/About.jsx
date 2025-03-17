import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "5+", text: "Years Experience" },
    { number: "20+", text: "Medical Specialists" },
    { number: "20K+", text: "Happy Patients" },
    { number: "24/7", text: "Emergency Service" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              className="w-full rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Hospital Team"
            />
            <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Excellence in Healthcare
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our hospital is committed to providing compassionate, patient-centered care with a focus on excellence. We blend advanced medical technology with a human touch, ensuring that every individual receives the highest level of treatment and attention. Our experienced team is dedicated to delivering comprehensive healthcare services, from preventive care to specialized treatments, in a comfortable and modern environment. Your health and well-being are our top priorities, and we are here to support you on your journey to better health.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="mt-2 text-gray-500">{stat.text}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;