import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import PROJECTS from '../assets/projectList'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const { title, description, author, spiel } = this.props.data.site.siteMetadata
        const authDesc = "Analysis & Development "
        return (
            <Layout>
                <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <html lang="en"></html>
                </Helmet>

                <div id="main">
                    <section id="one">
                        <h2>My Work</h2>
                        <Gallery projects={PROJECTS.map(({ id, src, imgAlt, thumbnail, name, description, code, live }) => ({
                            src,
                            imgAlt,
                            thumbnail,
                            name,
                            description,
                            code,
                            live
                        }))} />

                        {/* <ul className="actions">
                          <li><a href="#">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>
                          {spiel}
                        </p>

                        

                    </section>

                    <section id="three">
                        <Contact></Contact>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        spiel
      }
    }
  }
`