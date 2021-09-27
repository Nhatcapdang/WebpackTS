import './styles.scss'

export default function SlashSreen() {
  return (
    <div className="animation-body">
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning white" />
          <div className="lightning red" />
        </div>
        <div className="boom-container">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape triangle big yellow" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
        <div className="boom-container second">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
      </div>
      {/* <div className="footer">Loading...</div> */}
      <div className="classic-4"></div>
    </div>
  )
}
