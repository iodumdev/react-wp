import React, {Component} from "react";
import HeaderMenuItems from "./HeaderMenuItems.jsx"

class HeaderMenu extends Component{

    render(){
        return(
            <div className="header__menu">
                <ul>
                    <HeaderMenuItems />
                </ul>
            </div>
        )
    }
}

export default HeaderMenu;