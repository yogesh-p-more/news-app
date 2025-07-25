import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link text-capitalize active" aria-current="page" to="/">Home</Link></li>
                                <li><Link className="nav-link text-capitalize" to="/business">business</Link></li>
                                <li><Link className="nav-link text-capitalize" to="/entertainment">entertainment</Link></li>
                                {/* <li><Link className="nav-link text-capitalize" to="/general">general</Link></li> */}
                                <li><Link className="nav-link text-capitalize" to="/health">health</Link></li>
                                <li><Link className="nav-link text-capitalize" to="/science">science</Link></li>
                                <li><Link className="nav-link text-capitalize" to="/sports">sports</Link></li>
                                <li><Link className="nav-link text-capitalize" to="/technology">technology</Link></li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar