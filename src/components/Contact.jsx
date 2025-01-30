import React from 'react';
import {
  WifiHigh,
  LineChart,
  Triangle,
  Smartphone,
  Laptop,
  Satellite,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const Contact = () => {
    const WifiDecoration = () => (
        <div className="absolute right-10 top-10 opacity-20 text-cyan-400">
          <WifiHigh size={48} className="animate-pulse" />
        </div>
      );
    
      const LineChartDecoration = () => (
        <div className="absolute left-10 bottom-20 opacity-20 text-purple-400">
          <LineChart size={48} className="animate-bounce" />
        </div>
      );
    
      const TriangleDecoration = () => (
        <div className="absolute right-20 bottom-10 opacity-20 text-pink-400">
          <Triangle size={48} className="animate-spin-slow" />
        </div>
      );
    
      const SmartphoneDecoration = () => (
        <div className="absolute left-20 top-20 opacity-20 text-cyan-400">
          <Smartphone size={48} className="animate-float" />
        </div>
      );
    
      const LaptopDecoration = () => (
        <div className="absolute right-1/4 top-1/4 opacity-20 text-purple-400">
          <Laptop size={48} className="animate-tilt" />
        </div>
      );
    
      const SatelliteDecoration = () => (
        <div className="absolute left-1/3 bottom-1/4 opacity-20 text-pink-400">
          <Satellite size={48} className="animate-orbit" />
        </div>
      );
  return (
    <section id='contact' className="relative min-h-screen w-full overflow-hidden px-4 py-12 lg:py-16">
    <div
      className="absolute inset-0 bg-gradient-to-br from-[#0000ff] via-[#251447] to-[#2e1a5a]"
      style={{
        backgroundSize: "200% 200%",
        animation: "gradientMove 5s ease infinite"
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl">
      <h2
        className="mb-8 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Fortrose, serif" }}
      >
        Our Contact
      </h2>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="h-[300px] overflow-hidden rounded-xl shadow-lg sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2300792693604!2d80.28974!3d13.089761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689bb60132bb%3A0x549cf8edf62b60a6!2sSMJ%2C%20Mannady%20St%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e0!3m2!1sen!2sin!4v1705734864813!5m2!1sen!2sin&markers=color:red%7C13.089761,80.28974"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 rounded-xl bg-white/5 p-6 backdrop-blur-sm sm:p-8 md:space-y-8 lg:p-10">
          <div className="absolute inset-0">
            <WifiDecoration />
            <LineChartDecoration />
            <TriangleDecoration />
            <SmartphoneDecoration />
            <LaptopDecoration />
            <SatelliteDecoration />
          </div>

          <div className="group space-y-3 transition-all duration-300 hover:translate-x-2">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Our Location</h3>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
               Shop No. 3A ,SMJ Parrys Plaza, Mannady Street, Parrys,<br />
                Chennai,<br />
                Tamil Nadu 600001
              </p>
            </div>
          </div>

          <div className="group space-y-3 transition-all duration-300 hover:translate-x-2">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Contact Numbers</h3>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 flex-shrink-0 text-green-500" />
              <div className="text-white/90">
                <p className="text-base sm:text-lg">+91 98409 41577</p>
                <p className="text-base sm:text-lg">044 42134244</p>
              </div>
            </div>
          </div>

          <div className="group space-y-3 transition-all duration-300 hover:translate-x-2">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Email</h3>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 flex-shrink-0 text-blue-500" />
              <p className="text-base text-white/90 sm:text-lg">contact@example.com</p>
            </div>
          </div>

          <div className="group space-y-3 transition-all duration-300 hover:translate-x-2">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Business Hours</h3>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-500" />
              <div className="text-white/90">
                <p className="text-base sm:text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-base sm:text-lg">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-base sm:text-lg">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact