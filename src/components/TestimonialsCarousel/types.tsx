export interface Testimonial {
    quote: string;
    author: string;
    role?: string;
  }
  
  export interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
  }
  