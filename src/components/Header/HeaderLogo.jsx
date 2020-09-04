import React, {Component} from "react";

class HeaderLogo extends Component{
    render(){
        return(
            <div className="header__logo">
                <a href="/">
                    <img src={this.props.src} alt="logo"/>
                    <span className="header__logo-title">save the history</span>
                </a>
            </div>
        )
    }
}

export default HeaderLogo;