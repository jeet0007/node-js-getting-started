import React, { PureComponent } from "react";
import "./header.css";

export default class Header extends PureComponent {
    render() {
        return (
            <header className="component-header">
                <img
                    src="https://1000logos.net/wp-content/uploads/2017/05/WWE-logo.png"
                    alt="logo image"
                />
            WWE
            </header>

        );
    }
}