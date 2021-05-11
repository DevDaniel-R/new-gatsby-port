import React from "react"
import {
  FaCode,
  FaShopify,
  FaMailBulk,
  FaWordpress,
  FaTools,
  FaEye,
} from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `I use a variety of front-end technologies to develope modern, responsive, and appealing web pages & applications.`,
  },
  {
    id: 2,
    icon: <FaShopify className="service-icon" />,
    title: "Shopify Development",
    text: `Develop responsive, custom Shopify Ecommerce themes with an effective user interface. Giving back a profitable, stunning, and a impactful storefront.`,
  },
  {
    id: 3,
    icon: <FaMailBulk className="service-icon" />,
    title: "Email Development",
    text: `Incorporating modern tools and code to develop professional emails. Giving products/website a competitive edge.`,
  },
  {
    id: 4,
    icon: <FaEye className="service-icon" />,
    title: "UI / UX",
    text: ` Developing components from bare ideas is my passion. Which is why I enjoy creating unique and functional sites that keep users engaged.`,
  },
  {
    id: 5,
    icon: <FaWordpress className="service-icon" />,
    title: "CMS Development",
    text: `I developing the logical core and the rest is up to the user. Giving them full mobility to create, manage, and modify content for thier website.`,
  },
  {
    id: 6,
    icon: <FaTools className="service-icon" />,
    title: "Web Maintanance",
    text: `The ongoing goal is to keep sites efficent, fast, and up to date with current & future web standards to insure scalability.`,
  },
]

export default services
