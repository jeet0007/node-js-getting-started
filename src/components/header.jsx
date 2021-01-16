import React, { PureComponent } from "react";
import "./header.css";

export default class Header extends PureComponent {
    render() {
        return (
            <div className="component-header ">
                <img
                    src="https://1000logos.net/wp-content/uploads/2017/05/WWE-logo.png"
                    alt="wwe-logo"
                    className="App-logo"
                />
                WWE
            </div>

        );
    }
}