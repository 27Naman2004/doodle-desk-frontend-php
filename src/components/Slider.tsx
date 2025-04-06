
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Slider.css';

interface SliderProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
  }[];
  autoPlayInterval?: number;
}

const Slider = ({ slides, autoPlayInterval = 5000 }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentSlide ? 'slider-slide-active' : ''}`}
        >
          <div className="slider-overlay"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="slider-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x500?text=Doodle+Desk';
            }}
          />
          <div className="slider-content">
            <div className="slider-text">
              <h2 className="slider-title">{slide.title}</h2>
              <p className="slider-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="slider-btn slider-btn-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="slider-btn slider-btn-next"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'slider-dot-active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
