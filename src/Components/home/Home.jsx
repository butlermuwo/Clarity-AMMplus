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
          <h2 className='chart-header' id='historical'>Historical Perfomance</h2>
          <p className='chart-text'>
          The portfolio historical performance computes statistics such as volatility and sharpe ratio and which is then<strong className='bold-text' > benchmarked against</strong><strong className='bold-text'> BTC, S&P 500, and a custom AMM Index</strong>.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home