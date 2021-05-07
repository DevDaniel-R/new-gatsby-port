import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h4>Hello, I'm</h4>
            <div className="underline"></div>
            <h1>Daniel Rodriguez</h1>
            <div></div>
            <h3>
              I create functionally rich &<br /> aesthetically stunning
              websites.
            </h3>
            <Link to="/contact" className="btn">
              contact
            </Link>
            <div className="social-links"></div>
            {socialLinks.map(link => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              )
            })}
          </div>
        </article>
        <StaticImage
          src="../assets/images/thinkcode.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
