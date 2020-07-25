import React, { useState, useEffect } from 'react'
import Typist from 'react-typist'
import Footer from './Footer'

function Header() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <header id="header">
      <div className="inner">
        {/* <a href="#" className="image avatar"><img src={avatar} alt="" /></a> */}
        <p className="name-logo">Gabriel Atienza</p>
        {count ? (
          <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
            <span>Business Analyst</span>
            <Typist.Backspace count={16} delay={100} />
            <span>Frontend Developer</span>
            <Typist.Backspace count={16} delay={100} />
          </Typist>
        ) : (
          ''
        )}
      </div>
      <Footer />
    </header>
  )
}

export default Header
