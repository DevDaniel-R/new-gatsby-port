import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <div className="formgroup">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="phone"
                className="form-control"
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
