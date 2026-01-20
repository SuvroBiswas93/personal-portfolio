import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { fadeIn } from '../utils/animations';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Suvro',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        'Message sent successfully! I will get back to you soon.',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );

      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-linear-to-br from-blue-50 to-purple-50">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind? Let's work together"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <motion.div variants={fadeIn('right', 0.2)} className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={fadeIn('right', 0.1 * index)}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    <p className="text-gray-900 font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div variants={fadeIn('left', 0.2)} className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                {...register('name', {
                  required: 'Please enter your name',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Your name..."
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Your email..."
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: { value: 3, message: 'Subject is too short' },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Subject..."
              />
              {errors.subject && (
                <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register('message', {
                  required: 'Please write a message',
                  minLength: {
                    value: 10,
                    message: 'Message should be at least 10 characters',
                  },
                })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              icon={Send}
              size="lg"
              className="w-full cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
