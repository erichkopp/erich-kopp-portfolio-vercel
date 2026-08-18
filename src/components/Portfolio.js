import { useState } from "react";
import { FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa";

import photo from "../images/photo610.png";
import ecommerce from "../images/ecommerce610.png";
import slippery from "../images/slippery610.png";
import theorum from "../images/theorum610.png";
import wildcoast from "../images/wildcoast610.png";

export default function Portfolio() {
  const [cardNumber, setCardNumber] = useState(0)

  const handleCardArrows = (e) => {
    if (e.target.id === "left") {
      if (cardNumber === 0) {
        setCardNumber(4)
      } else {
        setCardNumber(cardNumber - 1)
      }
    }

    if (e.target.id === "right") {
      if (cardNumber === 4) {
        setCardNumber(0)
      } else {
        setCardNumber(cardNumber + 1)
      }
    }
  }

  return (
    <div className="Portfolio">
      <h2>PORTFOLIO</h2>

      {
        cardNumber === 0 &&
          <PortfolioCard
            title="Photography Gallery"
            description="A collection of photos from one of my other interests—35mm and medium-format film photography."
            image={photo}
            githubLink="https://github.com/erichkopp/React-Photo-Portfolio/"
            siteLink="https://photo.erichkopp.com/"
          />
      }
      {
        cardNumber === 1 &&
          <PortfolioCard
            title="Slippery-Hill Player"
            description="An extension of a non-profit project, Slippery-Hill.com, which catalogs old-time fiddle tunes and serves as an educational resource. Created as a mobile-friendly way to listen to these tunes. Data is periodically scraped and cleaned with a Python script."
            image={slippery}
            githubLink="https://github.com/erichkopp/Slippery-Hill-WebPlayer_vercel/"
            siteLink="https://slippery.erichkopp.com/"
          />
      }
      {
        cardNumber === 2 &&
          <PortfolioCard
            title="e-Commerce Store"
            description="A demo example of an e-Commerce store / theme."
            image={ecommerce}
            githubLink="https://github.com/erichkopp/eCommerceStore/"
            siteLink="https://shop.erichkopp.com/"
          />
      }
      {
        cardNumber === 3 &&
          <PortfolioCard
            title="Theorum Wheel"
            description="A tiny music theory app that displays chord theory in a visual way. One of the the first projects I ever made, I still personally use it frequently as a quick music theory reference."
            image={theorum}
            githubLink="https://github.com/erichkopp/ChordApp"
            siteLink="https://erichkopp.github.io/TheorumWheel"
          />
      }
      {
        cardNumber === 4 &&
          <PortfolioCard
            title="WildCoast Digital Studio"
            description="A landing page for my freelance web development business specializing in custom-coded projects, WordPress, and e-commerce solutions."
            image={wildcoast}
            githubLink=""
            siteLink="https://www.wildcoastdigitalstudio.com/"
          />
      }



      <div className="card-arrows-container">
        <div className="card-arrows">
          <span id="left" onClick={handleCardArrows}><FaChevronLeft />&nbsp; Previous</span>

          <div id="card-indicators">{[0,1,2,3,4].map((num) => (
            <span key={num} onClick={() => setCardNumber(num)}>
              <p style={{ opacity: cardNumber === num ? 1 : 0.3 }}>&bull;</p>
            </span>
          ))}</div>

          <span id="right" onClick={handleCardArrows}>Next &nbsp;<FaChevronRight /></span>
        </div>
      </div>

    </div>
  );
}

function PortfolioCard({ title, description, image, githubLink, siteLink }) {
  return (
    <div className="PortfolioCard">
      <h3 className="mobile-title">{title}</h3>
      <div className="image-container">
        <img src={image} className="image" alt={image} />
      </div>
      <div className="content">
        <h3 className="desktop-title">{title}</h3>
        <div className="description">{description}</div>

        <div className="portfolio-buttons">
          { githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
          <a href={siteLink} target="_blank" rel="noreferrer">
            <span>Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}
