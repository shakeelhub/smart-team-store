import React from 'react';
import { WifiHigh, Laptop } from 'lucide-react';


const Team = () => {
    const teamMembers = [
        {
          name: "Sarah Johnson",
          role: "CEO",
          image: e1
        },
        {
          name: "Michael Chen",
          role: "CTO",
          image: e2
        },
        {
          name: "Emma Davis",
          role: "Lead Designer",
          image: e3
        },
        {
          name: "Alex Rivera",
          role: "Senior Developer",
          image: e4
        }
      ];

      const WifiDecoration = () => (
        <div className="absolute right-10 top-10 opacity-20 text-cyan-400">
          <WifiHigh size={48} className="animate-pulse" />
        </div>
      );
    
      const LaptopDecoration = () => (
        <div className="absolute right-1/4 top-1/4 opacity-20 text-purple-400">
          <Laptop size={48} className="animate-tilt" />
        </div>
      );
  return (
    <section className="relative h-auto min-h-[40vh] w-full overflow-hidden bg-gradient-to-br from-[#2e1a5a] via-[#251447] to-[#0000ff] py-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientMove 5s ease infinite"
        }}
      />

      <div className="container relative z-10 mx-auto h-full px-4">
        <h2
          className="mb-8 mt-4 text-center text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: "Fortrose, serif" }}
        >
          Our Team
        </h2>

        <div className="absolute inset-0">
          <WifiDecoration />
          <LaptopDecoration />
        </div>

        <div id='team' className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-square w-48 overflow-hidden rounded-lg sm:w-40 md:w-44">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10 group-hover:animate-glow" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="mt-4 text-center">
                <h3
                  className="text-lg font-semibold text-white md:text-base lg:text-lg"
                  style={{ fontFamily: "Fortrose, serif" }}
                >
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}

export default Team