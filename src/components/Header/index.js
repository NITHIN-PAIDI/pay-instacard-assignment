import {GiHamburgerMenu} from 'react-icons/gi'
import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    showMobileView: false,
  }

  OnClickHamburgerButton = () => {
    console.log('ni')
    this.setState(prevState => ({showMobileView: !prevState.showMobileView}))
  }

  getNavIcons = () => (
    <div className="nav-bar-mb-container">
      <a href="https" className="Nav-link">
        Home
      </a>
      <a href="https://" className="Nav-link">
        About
      </a>
      <a href="https;//" className="Nav-link">
        Schedules
      </a>
      <a href="https://" className="Nav-link">
        Membership
      </a>
      <a href="https://" className="Nav-link">
        Pricing
      </a>
    </div>
  )

  render() {
    const {showMobileView} = this.state
    return (
      <div className="header-container">
        <div className="navigation-container">
          <a href="https" className="Nav-link">
            Home
          </a>
          <a href="https://" className="Nav-link">
            About
          </a>
          <a href="https;//" className="Nav-link">
            Schedules
          </a>
          <a href="https://" className="Nav-link">
            Membership
          </a>
          <a href="https://" className="Nav-link">
            Pricing
          </a>
        </div>
        <div className="buttons-container">
          <button type="button" className="description">
            Offers
          </button>
          <button type="button" className="description courses">
            Courses
          </button>
        </div>
        <div className="mobile-view-approach">
          <div className="button-container">
            <button
              type="button"
              className="nav-button"
              onClick={this.OnClickHamburgerButton}
            >
              <GiHamburgerMenu className="hamburgerButton" />
            </button>
          </div>
          {showMobileView && this.getNavIcons()}
        </div>
      </div>
    )
  }
}

export default Header
