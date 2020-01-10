import React, {useState, useEffect} from 'react'
import Typist from 'react-typist';
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

function Header() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  
  return (
      <header id="header">
          <div className="inner">
              {/* <a href="#" className="image avatar"><img src={avatar} alt="" /></a> */}
              <h1><strong>Gabriel Atienza</strong>
              { count ? (
                <Typist avgTypingDelay={200} onTypingDone={() => setCount(0)}>
                  <span>Business Analyst</span>
                  <Typist.Backspace count={16} delay={200} />
                  <span>Frontend Developer</span>
                </Typist>
              ) : ("")
              }
              </h1>
          </div>
          <Footer />
      </header>
  )
    
}

export default Header


