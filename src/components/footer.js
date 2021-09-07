import React from 'react'
import { Link } from 'gatsby'
import UniversalLink from './utils/universal-link'
import PropTypes from 'prop-types'


const Footer = () => {

  return(
    <footer className={`max-w-7xl py-10`}>

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