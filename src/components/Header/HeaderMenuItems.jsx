import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HeaderMenuItems extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    getMenu(){

        fetch("/wp-json/components/v1/menu")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            items: result
                        })
                    }
                )
    }

    componentDidMount(){

        this.getMenu();
        this.timerID = setInterval(() => {
                this.getMenu();
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render(){
        return( this.state.items.map((item) =>
                <li key={item.ID} >
                    <Link to={item.url}>
                            <span href={item.url}>{item.title}</span>
                        
                    </Link>
                </li>
            )
        )
    }
}

export default HeaderMenuItems;