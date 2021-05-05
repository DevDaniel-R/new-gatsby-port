import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import Title from "./Title"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Quote = () => {
  return (
    <header className="hero2">
      <Title title="Whats Next?" />
      <section className="section-center hero-center2">
        <article className="hero-info2">
          <div>
            <h2>Lets talk about it,</h2>
            <div>
              <br />
            </div>
            <p className="lineheight ending">
              I do more than make websites pretty. I utilize my web development
              expertise to make wondering users focus and act. Giving your
              product or platform an online advantage! By analyzing web trends
              and technology I have the ability to create the solution to your
              online success!
            </p>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <Link to="/about" className="btn2">
              My Blog
            </Link>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Quote
