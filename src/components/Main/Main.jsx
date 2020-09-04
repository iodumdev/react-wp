import React, {Component} from "react";
import "./Main.scss";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: ''
        }
    }

    getContent(){

        fetch("/wp-json/components/v1/post/" + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        post: result
                    })
                }
            )
    }

    componentDidUpdate(){
        this.getContent();
    }

    componentDidMount(){
        this.getContent();
    }

    render(){
        return(
            <div className="content">
                <div dangerouslySetInnerHTML={{__html: this.state.post.post_content}}></div>
            </div>
        )
    }
}


export default Main;
