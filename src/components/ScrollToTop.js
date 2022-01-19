import React from 'react'
import { BiArrowFromBottom } from 'react-icons/bi';
import { useState, useEffect } from "react";

export const ScrollToTop= () => {
  const [isVisible, setVisible] = useState(false)

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    };
    
    const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
    }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <button type="button" onClick={scrollToTop} className={classNames(
        isVisible ? 'opacity-100' : 'opacity-0',
        'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-green-600 transition-opacity hover:bg-green-700 focus:outline-none focus:ring-offset-2 focus:ring-green-500'
      )}>
              <BiArrowFromBottom className='h-6 w-6 hover:' aria-hidden='true' />
      </button>
    
      </div>
  );
}


