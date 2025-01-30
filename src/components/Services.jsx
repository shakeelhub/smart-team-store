import React from 'react';
import { Smartphone, Watch, Wallet, Shield, Cable, WifiHigh, LineChart, Triangle, Laptop, Satellite } from 'lucide-react';
import e1 from '../assets/im1.png'
import e2 from '../assets/im2.png'
import e3 from '../assets/im3.png'
import e4 from '../assets/im6.png'
import e5 from '../assets/im5.png'
import e7 from '../assets/im7.png'
import e8 from '../assets/im8.png'

const Services = () => {
    const services = [
        { name: "Expert repairs for all smartphone brands", icon: Smartphone },
        { name: "Trendy and classic watches for all occasions", icon: Watch },
        { name: "Quality wallets and electronic accessories", icon: Wallet },
        { name: "Premium tempered glass and screen protectors", icon: Shield },
        { name: "Chargers, cases, and other essential accessories", icon: Cable }
      ];
    
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
        <section id='services' className="relative min-h-screen w-full overflow-hidden py-8 sm:py-16 md:py-20">
              {/* Enhanced gradient background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#0000ff] via-[#251447] to-[#2e1a5a]"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientMove 5s ease infinite"
                }}
              />
    
              {/* Glowing overlay with all decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20">
                <WifiDecoration />
                <LineChartDecoration />
                <TriangleDecoration />
                <SmartphoneDecoration />
                <LaptopDecoration />
                <SatelliteDecoration />
              </div>
    
              {/* Content container */}
              <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <h1
                  className="mb-4 text-center text-3xl font-bold text-cyan-50 sm:text-4xl md:mb-8 md:text-5xl"
                  style={{ fontFamily: "Fortrose, serif" }}
                >
                  Our Services
                </h1>
    
                {/* Grid layout */}
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left Section: Dynamic Images with enhanced glow effect */}
                  <div className="flex items-center justify-center">
                    <div className="relative h-[320px] w-[320px] overflow-hidden rounded-xl sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
                      <div className="absolute inset-0 animate-glow rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />
                      {[e1, e2, e3, e4, e5,e7,e8].map((image, index) => (
                        <div
                          key={index}
                          className="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000"
                          style={{
                            backgroundImage: `url(${image})`,
                            opacity: index === 0 ? 1 : 0,
                            animation: `fadeInOut 9s ${index * 3}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
    
                  {/* Right Section: Service List with enhanced glass effect */}
                  <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 sm:p-4"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative flex items-center">
                            <Icon className="mr-3 h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-purple-400 sm:h-6 sm:w-6" />
                            <h2 className="text-sm font-bold tracking-wide text-white sm:text-lg md:text-xl">
                              {service.name}
                            </h2>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
    
              {/* Enhanced animations */}
              <style jsx>{`
            @keyframes gradientMove {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            
            @keyframes fadeInOut {
              0%, 100% { opacity: 0; }
              33%, 66% { opacity: 1; }
            }
            
            @keyframes glow {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.8; }
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            
            @keyframes tilt {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(5deg); }
            }
            
            @keyframes orbit {
              0% { transform: rotate(0deg) translateX(10px) rotate(0deg); }
              100% { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
            }
            
            .animate-gradient {
              animation: gradientMove 10s ease infinite;
            }
            
            .animate-glow {
              animation: glow 3s ease-in-out infinite;
            }
            
            .animate-spin-slow {
              animation: spin 6s linear infinite;
            }
            
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            
            .animate-tilt {
              animation: tilt 4s ease-in-out infinite;
            }
            
            .animate-orbit {
              animation: orbit 8s linear infinite;
            }
          `}</style>
            </section>
  )
}

export default Services