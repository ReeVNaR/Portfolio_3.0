import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactItem = ({ icon, title, value, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 group hover:text-blue-500 transition-all duration-300"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-gray-900 dark:text-white font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;

    const templateParams = {
      from_name: name,
      user_email: email,
      message: e.target.message.value
    };

    try {
      await emailjs.send(
        'service_xgq3fja',
        'template_v4r72jm',
        templateParams,
        'ORFeE3WXbcgrQai9c'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[500px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Column */}
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            Get in Touch
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.
          </motion.p>
        </div>
        
        <div className="space-y-6">
          <ContactItem
            icon={<HiMail size={24} />}
            title="Email"
            value="ranveerghorpade1516@gmail.com"
            link="mailto:ranveerghorpade1516@gmail.com"
          />
          <ContactItem
            icon={<HiPhone size={24} />}
            title="Phone"
            value="+91 7498772829"
            link="tel:+917498772829"
          />
          <ContactItem
            icon={<HiLocationMarker size={24} />}
            title="Location"
            value="Sangli, Maharashtra, India"
            link="https://maps.google.com/?q=Sangli,Maharashtra,India"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-4 pt-4"
        >
          {[
            { icon: <FiGithub size={24} />, link: "https://github.com/ReeVNaR", color: "hover:text-green-500 dark:hover:text-green-400" },
            { icon: <FiLinkedin size={24} />, link: "https://www.linkedin.com/in/ranveer-ghorpade-gg/", color: "hover:text-blue-500 dark:hover:text-blue-400" },
            { icon: <FiInstagram size={24} />, link: "https://www.instagram.com/ranveer._.15/", color: "hover:text-pink-500 dark:hover:text-pink-400" },
            { 
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ), 
              link: "https://x.com/Ranveer52251721", 
              color: "hover:text-neutral-950 dark:hover:text-neutral-200" 
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700/50`}
              whileHover={{ y: -2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Right Column - Form */}
      <motion.form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6 bg-white/50 dark:bg-gray-800/50 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
            <input
              type="user_name"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
            <input
              type="user_email"
              name="user_email"
              required
              placeholder="your.email@example.com"
              className="w-full p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message"
              className="w-full p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-500 text-center">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
