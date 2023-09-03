import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="Home-page-container">
          <div className="home-page-description-container">
            <div>
              <svg
                width="64"
                height="64"
                viewBox="0 64 64 0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z"
                  fill="#BE554B"
                />
              </svg>
            </div>
            <div>
              <p className="theory">Discover the beauty of the topics</p>
              <h1 className="main-description">
                Tropical destinations
                <span className="separator"> For students</span>
              </h1>
              <p className="theory">
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
                bibendum integer rutrum nisi. A nec nisl vitae
              </p>
            </div>
            <div className="pointer">
              <button type="button" className="signup-button">
                signup
              </button>

              <svg
                width="10"
                height="10"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z"
                  fill="#505C59"
                />
              </svg>
            </div>
          </div>
          <div className="border">
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693629424/Ellipse_49_dw7o25.png"
              className="elipse"
              alt="s"
            />
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693629924/Ellipse_48_osrevj.png"
              alt="4"
              className="extra-pointer"
            />
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693628916/Group_171_f3qvcm.png"
              alt="random"
              className="home-page-image"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z"
                fill="#87CC81"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
