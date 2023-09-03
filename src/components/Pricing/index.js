import {Component} from 'react'
import './index.css'

class Pricing extends Component {
  state = {
    value: 1,
    Room: 1,
  }

  incrementValue = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }))
  }

  decrementValue = () => {
    const {value} = this.state
    if (value > 1) {
      this.setState(prevState => ({
        value: prevState.value - 1,
      }))
    }
  }

  incrementRoom = () => {
    this.setState(prevState => ({
      Room: prevState.Room + 1,
    }))
  }

  decrementRoom = () => {
    const {Room} = this.state
    if (Room > 1) {
      this.setState(prevState => ({
        Room: prevState.Room - 1,
      }))
    }
  }

  render() {
    const {value, Room} = this.state
    return (
      <div className="xyz-container">
        <div className="pricing-bg-container">
          <div className="border-design">
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693623016/Ellipse_46_bmuppc.png"
              className="border-symbol"
              alt="3"
            />
          </div>
          <div className="description-container-1">
            <p>Get 20% off for student</p>
            <h1 className="main-description">
              Student discounts available. <br />
              <span className="separator">
                Get ready for some fun in the sun!
              </span>
            </h1>
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
          <div className="container">
            <div className="pricing-image-container">
              <img
                src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693671564/Mask_group_fmmyai.png"
                alt="4"
                className="pricingImage"
              />
            </div>
          </div>
        </div>
        <div className="booking-bg-container">
          <div className="booking-container">
            <img
              src="https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693708587/Group_167_kpgfbi.png"
              alt="4"
              className="booking-image"
            />
            <div className="booking-details">
              <h1>Book Now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <label htmlFor="city" className="labelElement">
                City
              </label>
              <br />
              <input
                type="text"
                id="city"
                className="input-container"
                placeholder="placeholder"
              />
              <div className="date-container">
                <div className="arrival">
                  <label htmlFor="arrival" className="labelElement">
                    Arrival
                  </label>
                  <br />
                  <input
                    type="date"
                    id="arrival"
                    className="input-container selecetion-container"
                    placeholder="placeholder"
                  />
                </div>
                <div className="arrival">
                  <label htmlFor="arrival" className="labelElement">
                    Departure
                  </label>
                  <br />
                  <input
                    type="date"
                    id="arrival"
                    className="input-container selecetion-container"
                    placeholder="placeholder"
                  />
                </div>
              </div>
              <div className="star-room-container">
                <div className="booking-count-container">
                  <label className="labelElement" htmlFor="count">
                    Star
                  </label>
                  <br />
                  <div className="count-container">
                    <button
                      type="button"
                      className="functionalButtons"
                      onClick={this.decrementValue}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="count"
                      className="input-container value-container"
                      value={value}
                    />
                    <button
                      type="button"
                      className="functionalButtons"
                      onClick={this.incrementValue}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="booking-count-container">
                  <label className="labelElement" htmlFor="count">
                    Room
                  </label>
                  <br />
                  <div className="count-container">
                    <button
                      type="button"
                      className="functionalButtons"
                      onClick={this.decrementRoom}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="count"
                      className="input-container value-container"
                      value={Room}
                    />
                    <button
                      type="button"
                      className="functionalButtons"
                      onClick={this.incrementRoom}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button type="button" className="BookNow-Button">
                BookNow
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing
