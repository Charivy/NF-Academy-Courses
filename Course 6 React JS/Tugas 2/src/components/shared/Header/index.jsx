import { Link, NavLink } from "react-router";

export default function Header(){
    const getLinkClass = ({ isActive }) =>
        isActive
            ? "nav-link px-2 link-primary fw-bold border-bottom border-2 border-primary" 
            : "nav-link px-2 link-secondary";
    
    return(
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
                <div className="col-md-3 mb-2 mb-md-0" bis_skin_checked="1"> 
                    <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
                    <i className="fa-solid fa-book fa-lg" style={{ color: "#74C0FC"}}></i>
                    <span className="ms-2 fs-4">bookstore</span>
                    </Link>
                </div> 
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
                    <li><NavLink to ="/" className="nav-link px-2">Home </NavLink></li> 
                    <li><NavLink to ="/books" className="nav-link px-2">Book</NavLink></li> 
                    <li><NavLink to ="/team" className="nav-link px-2">Team</NavLink></li> 
                    <li><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></li>
                </ul> 
                <div className="col-md-3 text-end" bis_skin_checked="1">
                    <Link to="/login" className>
                        <button type="button" className="btn btn-outline-primary me-2">Login</button> 
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-primary">Register</button>
                    </Link> 
                </div> 
            </header>
        </>
    )
}