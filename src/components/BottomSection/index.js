import './index.css'

const avatarUrl = [
  {
    id: 1,
    name: 'Corey Korsgaard',
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693714959/Ellipse_1_ghpnbl.png',
  },
  {
    id: 2,
    name: 'Jakob Aminoff',
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693714984/Avatar_5_iwcwte.png',
  },
  {
    id: 3,
    name: 'Carla Press',
    url:
      'https://res.cloudinary.com/nithinpaidi-ccbp-tech/image/upload/v1693714975/Avatar_6_ugtfht.png',
  },
]

const BottomSection = () => (
  <div className="bottom-section-bg-container">
    <div className="Testimonials-section">
      <h1 className="heading">Testimonials</h1>
      <ul className="avatars-container">
        {avatarUrl.map(each => (
          <li className="each-item" key={each.id}>
            <img src={each.url} alt={each.name} className="avatar-img" />
            <p className="description">{each.name}</p>
            <hr className="line" />
            <p className="description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>
        ))}
      </ul>
    </div>
    <div className="Bottom-section-2">
      <div className="text">
        <h1 className="descriptions-2">
          Student Special: Discounted rates on tropical getaways!
        </h1>
        <p className="text-2">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <ul className="check-List">
        <li className="list-item">PrivacyPolicy</li>
        <li className="list-item">Terms of Use</li>
        <li className="list-item">Sales Ans Refunds</li>
        <li className="list-item">Legal</li>
        <li className="list-item">About</li>
        <li className="list-item">Schedules</li>
        <li className="list-item">Pricing</li>
        <li className="list-item">MemberShip</li>
        <li className="list-item">Joins</li>
      </ul>
    </div>
  </div>
)

export default BottomSection
