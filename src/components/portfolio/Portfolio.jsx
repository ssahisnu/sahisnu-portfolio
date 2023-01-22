import React from 'react'
import './portfolio.css'
import Scribe from '../../assets/P_Scribe.png'
import creditUK from '../../assets/P_CreditUK.jpg'
import SMM from '../../assets/P_SMM.jpg'
import GDPR from '../../assets/P_GDPR.jpg'
import HT from '../../assets/P_Hometitle.png'
import DWM from '../../assets/P_DWM.png'

const data = [
  {
    id: 1,
    image: Scribe,
    title: 'Kindle Scribe',
    purchase: 'https://www.amazon.com/Introducing-Kindle-Scribe-the-first-Kindle-for-reading-and-writing/dp/B09BS26B8B',
    moreinfo: 'https://www.youtube.com/watch?v=QSl721wVaqI&ab_channel=AmazonNews'
  },
  {
    id: 2,
    image: creditUK,
    title: 'Credit Monitoring',
    purchase: 'https://uk.norton.com/products/identity-advisor-plus',
    moreinfo: 'https://support.norton.com/sp/en/us/home/current/solutions/v126234502'
  },
  {
    id: 3,
    image: SMM,
    title: 'Social Media Monitoring',
    purchase: 'https://jp.norton.com/feature/social-media-monitoring',
    moreinfo: 'https://www.youtube.com/watch?v=R7_C8pTWJ-Y'
  },
  {
    id: 4,
    image: GDPR,
    title: 'Data Privacy - GDPR, CCPA',
    purchase: 'https://lifelock.norton.com/#planschart',
    moreinfo: 'https://support.norton.com/sp/en/us/home/current/solutions/v127350378'
  },
  {
    id: 5,
    image: HT,
    title: 'HomeTitle Monitoring',
    purchase: 'https://lifelock.norton.com/home-title-protect',
    moreinfo: 'https://support.norton.com/sp/en/us/home/current/solutions/v126241834'
  },
  {
    id: 6,
    image: DWM,
    title: 'Dark Web Monitoring and ID Restoration',
    purchase: 'https://lifelock.norton.com/products/lifelock-identity-advisor',
    moreinfo: 'https://www.youtube.com/watch?v=YNunYeUnpqU&ab_channel=Norton'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent work</h5>
    <h2>Portfolio</h2>
    
    <div className="container portfolio__container">
    {
      data.map(({id, image, title, purchase, moreinfo}) => {
        return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={purchase} className='btn' target='_blank'>Purchase</a>
            <a href={moreinfo} className='btn btn-primary' target='_blank'>More info</a>
          </div>
        </article>
        )

      })
    }
    </div>
    
    </section>
  )
}

export default Portfolio