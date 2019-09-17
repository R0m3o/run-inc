import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav>
            <ol className="row">
                <li className="col-md-3"><NavLink to="/">Home</NavLink></li>
                <li className="col-md-3"><NavLink to="/Events">Events</NavLink></li>
                <li className="col-md-3"><NavLink to="/Shop">Shop</NavLink></li>
                <li className="col-md-3"><NavLink to="/Contact">Contact us</NavLink></li>
            </ol>
        </nav>
    );
}
 
export default Navbar;