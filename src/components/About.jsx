import React from 'react'
import { useEffect, useState } from 'react'
import '../style/about.css'
import icon1 from "../image/icons8-code-100.png"
import icon2 from "../image/icons8-database-100.png"
import icon3 from "../image/icons8-imac-settings-100.png"
import icon4 from "../image/icons8-activities-96.png"
import img from '../image/a1-removebg-preview.png'



const About = () => {

  const [hoveredCard, setHoveredCard] = useState(null);
  let timeout;


  var cards = [
    {
      h2: "Programming Languages",
      icon: icon1,
      content1: "JAVA",
      content2: "JAVASCRIPT",
    },
    {
      h2: "Databases",
      icon: icon2,
      content1: "SQL",
      content2: "MONGODB",
    },
    {
      h2: "Web Development",
      icon: icon3,
      content1: "FRONTEND",
      content2: "BACKEND"
    },
    {
      h2: "Extra Activites",
      icon: icon4,
      content1: "GAMING",
      content2: "PHOTOGRAPHY",
    }
  ]



  const showSkills = (index) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setHoveredCard(cards[index]);
    }, 200);
  };

  const hideSkills = () => {
    clearTimeout(timeout);
    setHoveredCard(null);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);




  return (
    <>
      <div id='about-conatiner'>

        <div id='heading'>
          <h1>
            My Skills
          </h1>
        </div>
        <div id='main-container'>
          <div id='left-div'>
            {cards.map((card, index) => (
              <div id="card" onMouseOver={() => showSkills(index)} onMouseLeave={hideSkills} key={index}>
                {card.icon && <img id="card-icon" src={card.icon} width='60px' height='60px'></img>}
                <h2>
                  {card.h2}
                </h2>

                <div id='card-content'>
                  <h4>{card.content1 || ''}</h4>
                  <h4>{card.content2 || ''}</h4>
                </div>
              </div>
            ))}
          </div>

          <div id='right-div'>

            <div id='right-div-inner' style={{ display: hoveredCard ? '' : 'none' }}>
              {hoveredCard && (
                <>
                  <h1 id='right-div-inner-h1'>{hoveredCard.h2}</h1>
                  <div id='right-div-inner-content'>
                    <h2>{hoveredCard.content1 || ''}</h2>
                    <h2>{hoveredCard.content2 || ''}</h2>
                  </div>
                </>
              )}
            </div>

            <div id='right-div-img'>
              <img src={img} width='500px' height='500px'></img>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default About