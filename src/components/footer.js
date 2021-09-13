import React from 'react'
// import { Link } from 'gatsby'
// import UniversalLink from './utils/universal-link'
import PropTypes from 'prop-types'


const Footer = () => {

  return(
    <footer className={`py-5 bg-black-soft`}>
      <div class="footer-content text-center text-white">
        <h6>breakaway dezign agency © 2021</h6>
      </div>
    </footer>
  )
}

export default Footer

Footer.propTypes = {
  footerNav: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      slug: PropTypes.string
    })
  )
}

Footer.defaultProps = {
  footerNav: [
    {
      label: 'Book an Appointment',
      slug: '/page-2'
    },
    {
      label: 'Our Locations',
      slug: '/page-2'
    },
    {
      label: 'Careers',
      slug: '/page-2'
    },
    {
      label: 'Products',
      slug: '/page-2'
    },
    {
      label: 'Patient Portal',
      slug: '/page-2'
    },
    {
      label: 'Contact Us',
      slug: '/page-2'
    },
    {
      label: 'FAQ',
      slug: '/page-2'
    },
    {
      label: 'Pay Bill Online',
      slug: '/page-2'
    },
    {
      label: 'Stay Conected',
      slug: '/page-2'
    }
  ]
}