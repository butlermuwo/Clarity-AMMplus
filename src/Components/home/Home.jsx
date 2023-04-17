import './home.css'

const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <section className="container hero-section">
          <h1 className='hero'>Clarity AMM+ helps you Build, Backtest, Simulate, Track & Optimize DeFi Strategies</h1>
          <p className='hero-text'>AMM+ is a model that aims to replicate the process of identifying the highest yields in DeFi among preferred tokens automatically. By helping you Build, Backtest, Simulate, Track & Optimize DeFi Strategies.</p>
          <button className='hero-button'>Give it a try→</button>
        </section>

      </div>

      <section className="chart-section">
        <div className="container chart-div">
          <h2 className='chart-header'>Historical Perfomance</h2>
          <p className='chart-text'>
          The portfolio historical performance computes statistics such as volatility and sharpe ratio and which is then<strong className='bold-text' > benchmarked against</strong><strong className='bold-text'> BTC, S&P 500, and a custom AMM Index</strong>.
          </p>

          <div className="chart-holder">
          </div>

          <div className='container btn-div '>
            {/* <button className='hero-button chart-btn>Backtest →</button> */}
          </div>
        </div>
      </section>



      <section className="chart-section">
        <div className="container chart-div">
          <h2 className='chart-header'></h2>
          <p className='chart-text'>
            Sharpe ratio and Volatiity
          </p>

          <div className="phase-info">
            <h3 className='phase-header'>Sharpe ratio and Volatiity</h3>

            <p className='phase-text'>The tabe to beplaced here will be showing the Sharpe ratio and volatility .</p>
          </div>

          <div className='container btn-div '>
            <button className='hero-button chart-btn' >Learn more →</button>
          </div>
        </div>
      </section>




      <section className="chart-section">
        <div className="container chart-div">
          <h2 className='chart-header'>Learn more</h2>
          <p className='chart-text'>
          To learn more about DeFi and its potential benefits, keep exploring our webpage and stay up to date with the latest developments in this exciting and rapidly evolving field.
          </p>

          <ul className='feedback-questions'>
            <li>
              <p className='chart-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </li>
            <li>
              <p className='chart-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </li>
            <li>
              <p className='chart-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </li>
            <li>
              <p className='chart-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>
            </li>
          </ul>

          <div className='container btn-div '>
            <button className='hero-button chart-btn' >FAQs →</button>
          </div>
        </div>
      </section>

      <div className="container hr-line">
        <hr />
      </div>

      {/* <section className="chart-section ">
        <div className="container chart-div ">
          <div className='see-more'>
            <p className='chart-text'>
              See the technical details on Github or give feedback
            </p>
            <div className="see-more-btn-div">
              <div className='container btn-div '>
                <button className='hero-button chart-btn' >Github →</button>
              </div>
              <div className=' btn-div '>
                <button className='hero-button chart-btn' >Feedback →</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default Home