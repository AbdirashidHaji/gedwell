import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll'; 
import logo from '../../assets/passport.jpg'
// Import the Link component

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-10 py-4 md:py-6">
        {/* Left Side - Logo */}
        <div>
          <h1 className="text-bold md:text-bold w-20 h-auto md:w-24">GEDWELL SOLUTION</h1> 
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            <MdMenu />
          </button>
        </div>

        {/* Right Side - Navigation Menu */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:flex items-center md:space-x-6 space-y-4 md:space-y-0 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-70} // Adjust the offset for better alignment
              duration={500} // Animation duration
              className="hover:text-blue-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-blue-400 cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-blue-400 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Hero Section
const Hero = () => {
  return (
    <div
      id="home" // Assign an ID for smooth scrolling
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center px-6 md:px-8 bg-gray-900 text-white"
      style={{ backgroundImage: "url('path-to-hero-image.jpg')" }}
    >
      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">
        Welcome to Our Website
      </h1>
      
      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
        Explore our services and discover how we can help you achieve your goals with excellence and innovation.
      </p>
      
      {/* Call to Action Button */}
      <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition duration-300 ease-in-out mb-4">
        Learn More
      </button>

      {/* Additional Call to Action */}
      <p className="text-md mb-6">
        Ready to get started? Contact us today for a free consultation and see how we can take your business to the next level.
      </p>

      {/* Core Values Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
          <h4 className="text-xl font-semibold mb-3">Innovation</h4>
          <p className="text-sm">We bring the latest technologies and creative solutions to ensure your success in a fast-paced digital world.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
          <h4 className="text-xl font-semibold mb-3">Integrity</h4>
          <p className="text-sm">We are committed to delivering high-quality, transparent services that you can trust for the long-term.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
          <h4 className="text-xl font-semibold mb-3">Customer-Centric</h4>
          <p className="text-sm">Your satisfaction is our priority. We tailor our solutions to your unique business needs and goals.</p>
        </div>
      </div>

      {/* Secondary Button */}
      <button className="px-6 py-3 bg-green-500 text-white text-lg rounded hover:bg-green-600 transition duration-300 ease-in-out">
        Get Started Now
      </button>
    </div>
  );
};



const AboutUs = () => {
  return (
    <div
      id="about"
      className="py-16 px-4 text-center bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-12">About Us</h2>
      <p className="text-lg mb-8">
        Gedwell Solutions is a leading provider of digital services, specializing in creating stunning websites, web applications, mobile apps, and digital marketing solutions. Our team is passionate about building innovative and user-friendly solutions to help businesses grow and succeed online.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1: Our Story */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg mb-4">
            Founded in 2015, Gedwell Solutions began as a small team of developers and designers with a shared passion for technology and design. The company was born out of the desire to help businesses establish a strong online presence through beautiful, functional websites and digital marketing strategies.
          </p>
        </div>

        {/* Card 2: Growth & Expansion */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Growth & Expansion</h3>
          <p className="text-lg mb-4">
            Over the years, we have expanded our services to include web development, mobile app development, e-commerce solutions, and digital marketing. Our team has grown to include a talented group of designers, developers, marketers, and strategists, each committed to providing exceptional service to our clients.
          </p>
        </div>

        {/* Card 3: Serving All Clients */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Serving Clients of All Sizes</h3>
          <p className="text-lg mb-4">
            Today, Gedwell Solutions serves clients of all sizes—from small startups to large enterprises—across a variety of industries. We continue to innovate, adapt, and grow alongside the ever-changing digital landscape, always keeping our clients’ success at the heart of everything we do.
          </p>
        </div>

        {/* Card 4: Collaboration */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
          <p className="text-lg mb-4">
            At Gedwell Solutions, we believe in the power of collaboration. Our team works closely with clients to understand their unique needs, goals, and challenges, delivering tailored solutions that drive results. Whether it's building a custom website, developing a mobile app, or launching a digital marketing campaign, we are dedicated to helping our clients achieve their business objectives.
          </p>
        </div>

        {/* Card 5: Our Vision */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg mb-4">
            Our vision is to be a trusted partner for businesses looking to thrive in the digital world. We aim to empower our clients with cutting-edge solutions that elevate their online presence, engage their audiences, and drive measurable growth.
          </p>
        </div>

        {/* Card 6: Our Mission */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg mb-4">
            Our mission is to provide exceptional digital services that help businesses succeed. We strive to offer innovative, user-centric solutions that deliver real results. Our goal is to exceed client expectations by combining creativity, technology, and strategy to produce outstanding digital experiences.
          </p>
        </div>

      </div>
    </div>
  );
};



const Services = () => {
  return (
    <div
      id="services" // Assign an ID for smooth scrolling
      className="py-16 px-4 text-center bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        {/* Pro Plan Section */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Gedwell Pro Plan</h3>
          <p className="text-lg mb-6">Our Pro Plan is designed for businesses that need a comprehensive, all-in-one solution for their digital presence. It includes everything you need to succeed online, from web design to digital marketing, mobile apps, and more.</p>
          <p className="text-xl text-blue-500 font-semibold">$4999 - Gedwell Pro Plan</p>
          <ul className="mt-4 text-left mx-auto max-w-2xl">
            <li className="mb-2">✔ Custom Website Design</li>
            <li className="mb-2">✔ Full Web Development</li>
            <li className="mb-2">✔ E-Commerce Integration</li>
            <li className="mb-2">✔ SEO Optimization</li>
            <li className="mb-2">✔ Digital Marketing Campaign</li>
            <li className="mb-2">✔ Mobile App Development</li>
            <li className="mb-2">✔ Premium Branding & Design</li>
            <li className="mb-2">✔ 24/7 Dedicated Support</li>
          </ul>
          <button className="px-6 py-3 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Basic Plan Section */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Gedwell Basic Plan</h3>
          <p className="text-lg mb-6">A cost-effective solution for small businesses looking to establish a strong online presence. Includes essential services like website design and SEO.</p>
          <p className="text-xl text-blue-500 font-semibold">$1999 - Gedwell Basic Plan</p>
          <ul className="mt-4 text-left mx-auto max-w-2xl">
            <li className="mb-2">✔ Custom Website Design</li>
            <li className="mb-2">✔ SEO Optimization</li>
            <li className="mb-2">✔ Basic Branding</li>
            <li className="mb-2">✔ 24/7 Support</li>
          </ul>
          <button className="px-6 py-3 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Advanced Plan Section */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Gedwell Advanced Plan</h3>
          <p className="text-lg mb-6">A comprehensive plan for businesses aiming to scale. Includes everything from custom websites to advanced marketing strategies.</p>
          <p className="text-xl text-blue-500 font-semibold">$3499 - Gedwell Advanced Plan</p>
          <ul className="mt-4 text-left mx-auto max-w-2xl">
            <li className="mb-2">✔ Custom Website Design</li>
            <li className="mb-2">✔ E-Commerce Integration</li>
            <li className="mb-2">✔ SEO Optimization</li>
            <li className="mb-2">✔ Digital Marketing Campaign</li>
            <li className="mb-2">✔ Mobile App Development</li>
          </ul>
          <button className="px-6 py-3 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan Section */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Gedwell Enterprise Plan</h3>
          <p className="text-lg mb-6">Our most advanced plan tailored for large enterprises that need a fully integrated solution for their global operations. Includes everything from website design to global marketing campaigns.</p>
          <p className="text-xl text-blue-500 font-semibold">$7999 - Gedwell Enterprise Plan</p>
          <ul className="mt-4 text-left mx-auto max-w-2xl">
            <li className="mb-2">✔ Custom Website Design</li>
            <li className="mb-2">✔ Full Web Development</li>
            <li className="mb-2">✔ E-Commerce Integration</li>
            <li className="mb-2">✔ SEO Optimization</li>
            <li className="mb-2">✔ Advanced Digital Marketing</li>
            <li className="mb-2">✔ Global Mobile App Development</li>
            <li className="mb-2">✔ 24/7 Dedicated Support</li>
          </ul>
          <button className="px-6 py-3 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};


// Contact Section
const Contact = () => {
  return (
    <div
      id="contact" // Assign an ID for smooth scrolling
      className="py-16 px-4 text-center bg-gray-800 text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-4">We'd love to hear from you! Get in touch with us for more information or assistance.</p>
      <form className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 bg-gray-700 text-white rounded"
          rows="4"
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="py-16 px-6 text-center bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      
      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonial 1 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs">
          <div className="mb-4">
            <img
              src={logo} // Replace with actual image path
              alt="Customer 1"
              className="w-16 h-16 rounded-full mx-auto"
            />
          </div>
          <p className="text-lg italic mb-4">
            "Gedwell Solutions helped us redesign our website, and the results were fantastic! Our site looks amazing, and we've seen a significant increase in traffic and conversions."
          </p>
          <h4 className="text-xl font-semibold">Abdirashid M Haji</h4>
          <p className="text-sm text-gray-400">CEO, TechInnovate</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs">
          <div className="mb-4">
            <img
              src={logo} // Replace with actual image path
              alt="Customer 2"
              className="w-16 h-16 rounded-full mx-auto"
            />
          </div>
          <p className="text-lg italic mb-4">
            "Their digital marketing strategy helped us reach a wider audience. We saw a 40% increase in leads in just three months. Truly an amazing team!"
          </p>
          <h4 className="text-xl font-semibold">Noor Ibrahim</h4>
          <p className="text-sm text-gray-400">Marketing Director, GreenTech</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs">
          <div className="mb-4">
            <img
              src={logo} // Replace with actual image path
              alt="Customer 3"
              className="w-16 h-16 rounded-full mx-auto"
            />
          </div>
          <p className="text-lg italic mb-4">
            "The Gedwell team created a seamless mobile app for our business. It was a game-changer for us, improving customer engagement and satisfaction."
          </p>
          <h4 className="text-xl font-semibold">Ibrahim Jimale Noor</h4>
          <p className="text-sm text-gray-400">Founder, FitnessPro</p>
        </div>
      </div>
    </div>
  );
};


// Footer Section
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#!" className="hover:text-blue-400">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#!" className="hover:text-blue-400">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#!" className="hover:text-blue-400">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#!" className="hover:text-blue-400">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="bg-gray-900 text-white pt-16"> {/* Add padding-top to avoid content hiding under navbar */}
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials/>
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Home;
