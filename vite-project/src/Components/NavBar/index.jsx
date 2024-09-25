import React from "react";
import "./style.css"

export function NavBar() {

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src="https://cdn-icons-png.flaticon.com/128/11124/11124069.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item"> Workspaces </a>
                            <a className="navbar-item"> Recent </a>
                            <a className="navbar-item"> Starred </a>
                            <a className="navbar-item"> Templates </a>
                            <a className="navbar-item is-active"> Create </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}