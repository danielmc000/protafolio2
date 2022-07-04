import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com" target="_black"><BsLinkedin/></a>
        <a href="https://www.github.com" target="_black"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial