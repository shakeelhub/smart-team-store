import React from 'react';
import e1 from '../assets/im1.png'
import e2 from '../assets/im2.png'
import e3 from '../assets/im3.png'
import e4 from '../assets/im4.png'
import e5 from '../assets/im5.png'
import e6 from '../assets/im7.png';
import e7 from '../assets/im8.png';
import e8 from '../assets/im6.png';

const Gallery = () => {
    const galleryImages = [
        e1, e2, e3, e4, e5, e6, e7, e8
      ];
    
      return (
        <section id='gallery' className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0000ff] via-[#251447] to-[#2e1a5a] px-4 py-12 lg:py-16">
          <h2
            className="mb-8 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Fortrose, serif" }}
          >
            Our Gallery
          </h2>
    
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="translate-y-4 text-lg font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                      View Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Gallery