// Animation.jsx
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class AnimElement {
  constructor(animType, duration, stagger) {
    this.animType = animType;
    this.duration = duration;
    this.stagger = stagger;
  }
}

const fadeIn = (item, animDuration) => {
  gsap.set(item, { scale: 1.1, opacity: 0, transformOrigin: 'left' });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'top 85%',
        markers: false,
        ease: 'none',
      },
    })
    .to(item, { scale: 1, opacity: 1, duration: animDuration,  delay: 0.28  });
};

const fadeInUp = (item, animDuration) => {
  gsap.set(item, { y: 35, opacity: 0 });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'top 85%',
        markers: false,
        ease: 'none',
      },
    })
    .to(item, { y: 0, opacity: 1, duration: animDuration, delay: 0.28 });
};



const Animation = () => {
  useEffect(() => {
    const animationElements = document.querySelectorAll('.anim');

    animationElements.forEach((item) => {
      const animType = item.getAttribute('data-anim');
      const animDuration = item.getAttribute('data-duration');
      const animComp = new AnimElement(animType, animDuration);

      switch (animComp.animType) {
        default:
          break;
        case 'fade-in':
          fadeIn(item, animComp.duration);
          break;
        case 'fade-in-up':
          fadeInUp(item, animComp.duration);
          break;
      }
    });
  }, []); // Empty dependency array, useEffect will run once when the component mounts

  return null; // This component doesn't render anything directly
};

export default Animation;
