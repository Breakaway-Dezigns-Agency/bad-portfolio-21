import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Sticky = ({ children }) =>{

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      // console.log(scrollTop);
      if (currentPosition > scrollTop) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);

    }

    const mobileNav = document.querySelector('.sticky-wrap')
    const stick = mobileNav.offsetTop

    if (scrollTop >= stick){
      mobileNav.classList.add('sticky')
    }
    if(scrollTop <= 100){
      mobileNav.classList.remove('sticky')
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)

  }, [scrollTop]);

 return(
    <div className={`sticky-wrap`}>
      {children}
    </div>
  )
}

Sticky.propTypes = {
  children: PropTypes.node
}

export default Sticky