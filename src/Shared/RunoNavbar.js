import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const RunoNavbar = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="bg-transparent text-white"
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Runo
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/articles"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"
                        }
                    >
                        Articles
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"
                        }
                    >
                        Contact Us
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default RunoNavbar;
