import React, { Component } from 'react';
import {Link} from "react-router-dom" ;
 const Navbar = (props) =>  {
 

    // static propTypes =  {
    //     title: PropTypes.string.isRequired ,
    //     icon: PropTypes.string.isRequired    
    // };
    
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={props.icon} />{props.title}

                </h1>
                <ul>
                <Link to="/about">About </Link>
                </ul>

            </nav>
        )

    
}

Navbar . defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar;