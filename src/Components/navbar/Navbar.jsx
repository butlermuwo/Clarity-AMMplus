import './navbar.css'
// import logo from '../../assets/logo.png'
const Navbar = () => {

	return (
		<header className='header'>
			<div className="container">
				<nav className='navbar '>
					<div className='header-left'>
						<div className='d-flex '>
							<div className='logo-div'>
								{/* <img src={logo} alt="logo" /> */}
							</div>
							<div className="verticle-line"></div>
							<div>
								<span className='title'>Clarity AMM+</span>
							</div>
						</div>

					</div>

					<div className='header-right'>
						<ul className='d-flex'>
							<li>Backtest</li>

							<li>View on Github →</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Navbar