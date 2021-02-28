import { useState, useEffect } from "react";
import { FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa";

import photo from "../images/photo610.png";
import ecommerce from "../images/ecommerce610.png";
import slippery from "../images/slippery610.png";

export default function Portfolio() {
  const [cardNumber, setCardNumber] = useState(0)

  const handleCardArrows = (e) => {
    if (e.target.id === "left") {
      if (cardNumber === 0) {
        setCardNumber(2)
      } else {
        setCardNumber(cardNumber - 1)
      }
    }

    if (e.target.id === "right") {
      if (cardNumber === 2) {
        setCardNumber(0)
      } else {
        setCardNumber(cardNumber + 1)
      }
    }
  }

  return (
    <div className="Portfolio">
      <h2>PORTFOLIO</h2>

      {/* <div className="card-arrows">
        <span id="left" onClick={handleCardArrows}><FaChevronLeft />Previous</span>
        <span id="right" onClick={handleCardArrows}>Next<FaChevronRight /></span>
      </div> */}

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

      <div className="card-arrows-container">
        <div className="card-arrows">
          <span id="left" onClick={handleCardArrows}><FaChevronLeft />Previous</span>
          <span id="right" onClick={handleCardArrows}>Next<FaChevronRight /></span>
        </div>
      </div>

    </div>
  );
}

function PortfolioCard({ title, description, image, githubLink, siteLink }) {
  function onPan(event, info) {
    console.log(info.point.x, info.point.y)
  }
  return (
    <div className="PortfolioCard">
      <h3>{title}</h3>
      <div className="image-container">
        <img src={image} className="image" alt={image} />
      </div>
      <div className="content">
        {/* <h3>{title}</h3> */}
        <div className="description">{description}</div>

        <div className="portfolio-buttons">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer">
            <span>Visit Site</span>
          </a>
        </div>
      </div>
    </div>
  );
}
