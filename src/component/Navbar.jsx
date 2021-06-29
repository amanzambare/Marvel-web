import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="#" style={{ color: "white" }}><span>Marvel</span>  |Developers</a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Why Marvel </a>
                            
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">option 1</a></li>
                                <li><a class="dropdown-item" href="#">option 2</a></li>
                                <li><a class="dropdown-item" href="#">option 3</a></li>

                            </ul>
                        </li>
                        <div style={{position:"absolute",top:"1%"}}>
                        
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Enterprise</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link" href="#">Signin</a>
                                <button style={{ backgroundColor: "white",borderRadius:"50px 50px 50px 50px"}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
