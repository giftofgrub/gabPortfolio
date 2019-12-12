import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              author
            }
          }
        }
      `
    )
    const author = data.site.siteMetadata.author
      return (
          <div id="footer">
              <div className="inner">
                  <ul className="icons">
                      {/* <li><a href="https://www.twitter.com/webappseed/" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="https://www.facebook.com/webappseed/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="https://blog.appseed.us" className="icon fa-rss"><span className="label">Github</span></a></li> */}
                      <li><a href="https://github.com/giftofgrub" className="icon fa-github"><span className="label">Github</span></a></li>
                      <li><a href="https://github.com/giftofgrub" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                  </ul>
                  <ul className="copyright">
                    <li>&copy; {author}</li>
                  </ul>
              </div>
          </div>
      )
    
}


