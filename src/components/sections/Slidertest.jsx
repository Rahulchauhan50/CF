import React, { useEffect } from 'react';

const Slidertest = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);
    
            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
    
            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true);
              duplicatedItem.setAttribute("aria-hidden", true);
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);

    return (
      <>
        {/* Onovo Awards */}
		<section className="onovo-section">
            <div className="scroller" data-direction="left" data-speed="slow">
                <div className="scroller__inner hover_filter top_slider slideicons">
                    <img src="/images/whiteicons/ACE-Logo.png" alt="ACE" />
                    <img src="/images/whiteicons/Hmd.png" alt="HMD" />
                    <img src="/images/whiteicons/JCB.png" alt="JCB" />
                    <img src="/images/whiteicons/babysaffron.png" alt="BabySaffron" />
                    <img src="/images/whiteicons/Luxebook.png" alt="Luxebook" />
                    <img src="/images/whiteicons/Vector.png" alt="Techno" />
                    <img src="/images/whiteicons/Vector-1.png" alt="Incredible India" />
                    <img src="/images/whiteicons/Vector-2.png" alt="Safari" />
                    <img src="/images/whiteicons/Vector-3.png" alt="Uno Minda" />
                    <img src="/images/whiteicons/Vector-4.png" alt="GJEPC" />
                    <img src="/images/whiteicons/Vector-5.png" alt="Ministry of Ayush" />
                    <img src="/images/whiteicons/Vector-6.png" alt="Council of Architecture" />
                    <img src="/images/whiteicons/Cocacola_logo.png" alt="Coca Cola" />
                </div>
            </div>
		</section>
      </>
    );
};

export default Slidertest;