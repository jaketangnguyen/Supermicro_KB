function Header() {
    return (
            <header className="header">
                <nav className="nav">
                    <img className="logo" src="./Photos/smc.png"/>
                    <ul className="nav-items">
                        <li className="nav-link"><a href="#">Product Families</a></li>
                        <li className="nav-link"><a href="#">Components</a></li>
                        <li className="nav-link"><a href="#">Common Questions</a></li>
                    </ul>
                </nav>
            </header>
    )
}

function Body() {
    return (
        <div class="wrapper">
        <div className="container">
            <div className="search_wrap search_wrap_5">
            <div class="statement">
		        <p>Supermicro Knowledge Base</p>
	        </div>
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..."/>
                    <div class="btn">
                        <p>Search</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
    )
}

function Footer() {
    return (
            <footer className="footer">
                <small>© 2022 Nguyen developement. All rights reserved.</small>
            </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))