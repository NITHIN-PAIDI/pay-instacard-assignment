import {Component} from 'react'
import './index.css'

const Avatars = [
  {
    id: 1,
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v16951206/avatar_2_yfdh4z.png',
  },
  {
    id: 2,
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693651313/avatar_4_zaye4k.png',
  },
  {
    id: 3,
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693651213/avatar_3_ks3iw9.png',
  },
]

const Destinations = [
  {
    id: 1,
    tittle: 'Harvard University',
    location: 'Cambridge, Massachusetts, UK',
    imageurl:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693667157/card-image_e6atrr.png',
  },
  {
    id: 2,
    tittle: 'Oxford University',
    location: 'Oxford, England',
    imageurl:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693667346/card-image-1_ggfpsu.png',
  },
  {
    id: 3,
    tittle: 'Stanford University',
    location: 'Stanford, California',
    imageurl:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693667370/card-image-2_zbgyyi.png',
  },
  {
    id: 4,
    tittle: 'Nanyang Technological University',
    location: 'Nanyang Ave, Singapura',
    imageurl:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693667362/card-image-3_nrbyas.png',
  },
]

class About extends Component {
  render() {
    return (
      <div className="outer-container">
        <div className="About-bg-container">
          <ul className="feedback-container">
            {Avatars.map(each => (
              <div className="avatar-container" key={each.id}>
                <img src={each.url} alt="id" className="avatar" />
                <div>
                  <h1 className="name">Jenny Wilson</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
              </div>
            ))}
          </ul>
          <div className="border-design">
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693623016/Ellipse_46_bmuppc.png"
              className="border-symbol"
              alt="3"
            />
          </div>
          <div className="description-container">
            <h1 className="main-description">
              Tropical destinations <br />
              <span className="separator"> For students</span>
            </h1>
            <p className="text-1">
              Student Tropical Vacation: Relax and Recharge
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <div>
              <button type="button" className="eplorebutton">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="destinations-container">
          <h1 className="destinations">Our destinations</h1>
          <ul className="destiantions-region">
            {Destinations.map(each => (
              <li className="college-item" key={each.id}>
                <img
                  src={each.imageurl}
                  className="image-item"
                  alt={each.tittle}
                />
                <div className="text-container">
                  <div>
                    <h1 className="text-tittle">{each.tittle}</h1>
                    <p className="text-locations">{each.location}</p>
                  </div>
                  <button className="threeDots" type="button">
                    ...
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default About
