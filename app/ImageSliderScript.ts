const imageSliderJs = () => {
    const runImageSlider = () => {
      const activeElements = document.querySelectorAll('.active');
  
      if (activeElements.length === 0) {
        return; // No elements with 'active' class, exit the function
      }
  
      const slides = document.querySelectorAll('.slide');
      const btns = document.querySelectorAll('.btn');
      let currentSlide = 1;
  
      // TypeScript for image slider manual navigation
      const manualNav = (manual: number) => {
        slides.forEach((slide) => {
          slide.classList.remove('active');
  
          btns.forEach((btn) => {
            btn.classList.remove('active');
          });
        });
  
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
      };
  
      btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          manualNav(i);
          currentSlide = i;
        });
      });
  
      // TypeScript for image slider autoplay navigation
      const repeat = () => {
        const active = document.getElementsByClassName('active');
        let i = 0;
  
        const repeater = () => {
          setTimeout(() => {
            // Convert HTMLCollection to array
            const activeArray = Array.from(active);
  
            activeArray.forEach((activeSlide) => {
              activeSlide.classList.remove('active');
            });
  
            if (slides.length > 0) {
              slides[i].classList.add('active');
              btns[i].classList.add('active');
              i++;
  
              if (i >= slides.length) {
                i = 0;
              }
            }
            repeater();
          }, 4000);
        };
        repeater();
      };
  
      repeat();
    };
  
    // Check if window is defined (i.e., running on the client side)
    if (typeof window !== 'undefined') {
      // Run imageSliderJs when the component mounts
      runImageSlider();
    }
  };
  
  export default imageSliderJs;
  