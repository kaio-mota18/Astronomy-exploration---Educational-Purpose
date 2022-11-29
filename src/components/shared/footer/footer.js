import React from 'react'
import './styles_footer.css'
import { AiFillCopyrightCircle } from 'react-icons/ai'

import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <p className="copyright-text">
          <AiFillCopyrightCircle /> 2022 | Kaio Mota -
          <a
            target="_blank"
            rel="noreferrer"
            className="icons-footer"
            href="https://www.linkedin.com/in/kaio-mota-51377a211/"
          >
            <BsLinkedin />
          </a>
        </p>
      </div>
    </div>
  )
}
