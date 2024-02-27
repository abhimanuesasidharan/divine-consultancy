import React, { useState, useEffect } from 'react';

const Carousel = ({ carouselData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % carouselData.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentSlide, carouselData.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative mt-5 md:mt-20 mb-16 mx-10 shadow-lg">
      <div className="overflow-hidden">
        <div className="flex">
          {carouselData.map((item, index) => (
            <div key={index} className={`w-full m-5 ${index === currentSlide ? 'block' : 'hidden'}`}>
              <div className="flex">
                <div className="w-1/2 pr-4 flex justify-center items-center ">
                  <img src={item.imageUrl} alt={`Slide ${index + 1}`} className="h-40 object-cover rounded-lg md:h-52 w-52" />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <p className="text-gray-600 text-xl">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-1 transform -translate-y-1/2 text-gray-800 text-3xl opacity-70 py-1 rounded-full" onClick={prevSlide}>
        
      </button>
      <button className="absolute top-1/2 right-1 transform -translate-y-1/2 text-gray-800 text-3xl opacity-70 py-1 rounded-full" onClick={nextSlide}>
        
      </button>
    </div>
  );
};

const CarouselPage = () => {
  const carouselData = [
    { imageUrl: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: '"Grateful 1 for their dedication and guidance. Highly recommend!"' },
    { imageUrl: 'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: '"Grateful 2 for their dedication and guidance. Highly recommend!"' },
    { imageUrl: 'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D', text: '"Grateful 3 for their dedication and guidance. Highly recommend!"' },
  ];

  return (
    <div>
      <Carousel carouselData={carouselData} />
    </div>
  );
};

export default CarouselPage;
