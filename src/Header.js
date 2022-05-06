import React from "react";
import PropTypes from "prop-types";

import NavItem from "./NavItem";


const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    My logo
                </a>

                <nav>
                    <ul className="nav-list">
                        {
                            props.items.map((navItem) => {
                                return <NavItem link={navItem.link} key={navItem.title}>{navItem.title}</NavItem>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )

};

Header.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired
};

export default Header;