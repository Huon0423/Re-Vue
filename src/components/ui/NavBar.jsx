import LoginModal from "../../pages/Home/LoginModal";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">리:뷰</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/map">Map</a>
                        </li>
                        <li className="nav-item">
                            <LoginModal></LoginModal>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/map">회원가입</a>
                        </li>
                        {/*프로필?*/}
                        {/* <a class="navbar-item" href="/profile">
                            <img src="src/assets/logo.png" alt="Avatar Logo" style={{ width: "20px;" }} class="rounded-pill"></img>
                        </a> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;