/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Laptop, 
  Monitor, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Menu, 
  X, 
  Store, 
  ShieldCheck, 
  Home, 
  Truck, 
  ArrowRight, 
  User, 
  Star, 
  MapPin, 
  Mail, 
  Twitter, 
  Facebook, 
  Instagram,
  Router,
  PenTool,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="text-accent w-8 h-8" />
            <h1 className="text-primary text-xl font-heading font-bold tracking-tight">NS IT Solutions</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-red-200 font-heading"
            >
              Book Repair Now
            </a>
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-slate-600 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="block w-full text-center bg-accent text-white font-bold py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Repair Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold font-heading">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Trusted in Mumbai
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight font-heading">
              Mumbai’s Most Trusted <span className="text-accent">Printer Repair</span> Specialists
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Expert service for HP, Canon, Epson & More. We provide same-day onsite support for all your hardware needs, ensuring your business never stops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-xl shadow-red-100 transition-all transform hover:-translate-y-1 font-heading"
              >
                <Calendar size={20} />
                Book Repair Now
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-primary text-lg font-semibold py-4 px-8 rounded-lg hover:bg-slate-50 transition-colors font-heading"
              >
                <Phone size={20} />
                Call Expert
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                <span>On-site Service</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                <span>Genuine Parts</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl transform scale-90"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="https://picsum.photos/seed/printer-repair/800/1000" 
                alt="Professional technician repairing a large office printer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100 hidden sm:flex">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Certified Experts</p>
                <p className="text-primary font-bold font-heading">100% Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Satisfied Clients', value: '5000+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Turnaround Time', value: 'Same-Day' },
  ];

  return (
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <p className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">{stat.value}</p>
              <p className="text-slate-300 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Lamington Road Expertise',
      desc: 'Located in Mumbai’s tech hub, we have immediate access to rare parts and components, ensuring faster turnaround times for your repairs.',
      icon: <Store className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'No Fix, No Fee Guarantee',
      desc: 'We stand by our expertise. If Nagendra Sharma and our team can\'t fix your issue, you don\'t pay a single rupee. Risk-free repair service.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-red-100 text-accent',
      highlight: true
    },
    {
      title: 'On-Site Support & Convenience',
      desc: 'Skip the traffic. We come to your doorstep for diagnostics and repairs, minimizing your downtime and maximizing convenience.',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 font-heading">Why Choose NS IT Solutions?</h2>
          <p className="text-slate-600 text-lg">Reliable expertise and honest service that Mumbai businesses trust.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              whileHover={{ y: -5 }}
              className={`bg-slate-50 p-8 rounded-2xl text-center transition-all duration-300 ${feature.highlight ? 'border-b-4 border-accent shadow-md' : ''}`}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { id: 1, title: 'Schedule Online', desc: 'Fill our simple form or call us to book your preferred time slot instantly.' },
    { id: 2, title: 'We Pick Up', desc: 'Our trusted agent arrives at your doorstep to securely collect your device.' },
    { id: 3, title: 'Repaired & Delivered', desc: 'Precision repair by experts followed by safe delivery back to you.' },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 font-heading">Mumbai-wide Pick-up & Drop</h2>
          <p className="text-slate-600 text-lg">Hassle-free repair process from the comfort of your home or office.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-200 rounded-full overflow-hidden z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-blue-500/50"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 relative border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-blue-500 font-heading">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-navy-dark hover:bg-primary text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-heading"
          >
            Book a Pickup Today
            <Truck size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Printer Repair',
      desc: 'Expert diagnostics and repair for Laser, Inkjet, and Plotters. We fix paper jams, printhead issues, and connectivity problems.',
      icon: <Printer className="w-8 h-8" />,
      color: 'bg-blue-50 text-primary'
    },
    {
      title: 'Laptop Repair',
      desc: 'Screen replacement, battery upgrades, keyboard fixes, and motherboard chip-level repair for all major brands.',
      icon: <Laptop className="w-8 h-8" />,
      color: 'bg-purple-50 text-primary'
    },
    {
      title: 'Desktop Support',
      desc: 'Custom PC builds, hardware upgrades, virus removal, and OS installation. Full optimization for peak performance.',
      icon: <Monitor className="w-8 h-8" />,
      color: 'bg-orange-50 text-primary'
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 font-heading">Our Repair Services</h2>
          <p className="text-slate-600 text-lg">From complex motherboard issues to routine maintenance, we handle it all with precision and care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.title}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <a href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-200 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src="https://picsum.photos/seed/founder/600/800" 
                alt="Nagendra Sharma - Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-8 right-8 lg:-right-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-accent max-w-xs hidden sm:block">
              <p className="text-sm font-bold text-slate-900 font-heading">Nagendra Sharma</p>
              <p className="text-xs text-slate-500">Founder & Chief Technician</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 font-heading">
              <User size={16} />
              Meet the Founder
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">The Expertise Behind NS IT Solutions</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded by <strong className="text-slate-900">Nagendra Sharma</strong>, NS IT Solutions is built on a foundation of technical excellence and integrity. With over a decade of hands-on experience in the bustling tech hub of Lamington Road, Nagendra has mastered the nuances of intricate hardware repair.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              His philosophy is simple yet powerful: treat every device as if it were your own. This commitment to quality and our signature <strong className="text-accent">"No Fix, No Fee"</strong> honesty policy has earned us the trust of thousands of businesses across Mumbai.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-slate-200 pl-4">
                <p className="text-2xl font-bold text-slate-900 font-heading">12+</p>
                <p className="text-sm text-slate-500">Years Industry Expertise</p>
              </div>
              <div className="border-l-4 border-slate-200 pl-4">
                <p className="text-2xl font-bold text-slate-900 font-heading">100%</p>
                <p className="text-sm text-slate-500">Transparent Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Inspection',
      price: '₹500',
      period: '/visit',
      features: ['Diagnostic check', 'Issue Identification', 'Cost Estimation'],
      cta: 'Select Plan',
      popular: false
    },
    {
      name: 'Standard Repair',
      price: 'Custom',
      period: ' quote',
      features: ['Full Hardware Repair', 'Genuine Part Replacement', '30-Day Warranty', 'Cleanup & Service'],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Annual Maintenance',
      price: 'AMC',
      period: '/year',
      features: ['Regular Preventive Maintenance', 'Priority Support', 'Discounted Parts'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 font-heading">Transparent Pricing</h2>
          <p className="text-slate-600 text-lg">No hidden costs. Choose the plan that fits your needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <motion.div 
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl p-8 border transition-all duration-300 relative ${plan.popular ? 'border-2 border-accent shadow-2xl md:-translate-y-4 z-10' : 'border-slate-200 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg font-heading">POPULAR</div>
              )}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 font-heading">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6 font-heading">{plan.price}<span className="text-sm font-normal text-slate-500 font-sans">{plan.period}</span></div>
              <ul className="space-y-4 mb-8 text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block w-full text-center py-3 px-4 rounded-lg font-bold transition-all ${plan.popular ? 'bg-accent text-white hover:bg-red-700 shadow-lg shadow-red-100' : 'bg-slate-50 border border-slate-300 text-primary hover:bg-slate-100'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { name: 'Enterprise Laser Printer', desc: 'High-volume, heavy-duty printing for large offices.', price: '₹24,999', icon: <Printer className="w-12 h-12" /> },
    { name: 'Professional Laptop', desc: 'Built for performance and portability for pros.', price: '₹58,500', icon: <Laptop className="w-12 h-12" /> },
    { name: 'High-Speed Router', desc: 'Seamless connectivity for multiple office devices.', price: '₹4,200', icon: <Router className="w-12 h-12" /> },
    { name: 'Original Toner Cartridge', desc: 'Genuine supplies for long-lasting print quality.', price: '₹1,850', icon: <PenTool className="w-12 h-12" /> },
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 font-heading">Premium Hardware & Supplies</h2>
          <p className="text-slate-600 text-lg">We don't just repair; we also provide the best-in-class hardware for your office needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.name}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className="aspect-square bg-slate-50 relative flex items-center justify-center text-slate-300 group-hover:text-accent transition-colors">
                {product.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary font-heading">{product.price}</span>
                  <button className="bg-accent hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors font-heading shadow-md shadow-red-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Rahul M.', role: 'Small Business Owner', text: 'My office printer broke down right before a big deadline. NS IT Solutions sent a technician within 2 hours and fixed it on the spot. Lifesavers!', img: 'https://picsum.photos/seed/user1/100/100' },
    { name: 'Priya S.', role: 'Graphic Designer', text: 'Very professional service. They explained the issue with my laptop motherboard clearly and the repair cost was reasonable compared to others.', img: 'https://picsum.photos/seed/user2/100/100' },
    { name: 'Amit K.', role: 'IT Manager', text: 'We have been using their AMC service for our office computers for 3 years now. The regular maintenance keeps our systems running smoothly.', img: 'https://picsum.photos/seed/user3/100/100' },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center font-heading mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-8 italic text-sm flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm font-heading">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 font-heading">Book a Repair</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 30 minutes.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                      placeholder="+91 98765 43210" 
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Device Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                      <option>Printer (Laser/Inkjet)</option>
                      <option>Laptop</option>
                      <option>Desktop PC</option>
                      <option>Plotter</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                      placeholder="e.g. HP, Dell, Epson" 
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Describe the Issue</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                    placeholder="My printer is jamming repeatedly..." 
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-accent hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-200 font-heading" 
                  type="button"
                >
                  Schedule Service Now
                </button>
              </form>
            </div>
            <div className="relative bg-slate-100 h-full min-h-[400px]">
              <div className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-80" style={{ backgroundImage: "url('https://picsum.photos/seed/mumbai-map/800/800')" }}></div>
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-6 font-heading">Visit Our Center</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <MapPin className="text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-lg font-heading">NS IT Solutions</p>
                        <p className="text-slate-300">366 Ahmed Mansion, Lamington Road</p>
                        <p className="text-slate-300">Mumbai, Maharashtra 400007</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <Phone className="text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-lg font-heading">Call Us</p>
                        <p className="text-slate-300">+91 98765 43210</p>
                        <p className="text-slate-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                        <Mail className="text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-lg font-heading">Email Us</p>
                        <p className="text-slate-300">support@nsitsolutions.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-slate-200 transition-colors w-full sm:w-auto font-heading"
                >
                  <Navigation size={20} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="bg-primary py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">Join our Tech Tips Newsletter</h3>
            <p className="text-slate-300">Get maintenance tips and exclusive offers directly to your inbox.</p>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <form className="flex gap-2">
              <input 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent" 
                placeholder="Enter your email" 
                type="email"
              />
              <button 
                className="bg-accent hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors font-heading" 
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Printer className="text-accent w-8 h-8" />
              <h2 className="text-white text-xl font-bold font-heading">NS IT Solutions</h2>
            </div>
            <p className="text-slate-400 mb-6">Your trusted partner for comprehensive IT hardware repair and maintenance services in Mumbai.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Laptop Repair</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Printer Maintenance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Desktop Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Data Recovery</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AMC Contracts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-1 text-accent flex-shrink-0" size={20} />
                <span className="font-bold text-white">366 Ahmed Mansion,<br />Lamington Road, Mumbai</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span>info@nsitsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© 2023 NS IT Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Process />
        <Services />
        <Founder />
        <Pricing />
        <Products />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
