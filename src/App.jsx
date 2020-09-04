import React, {Component} from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{

    render(){
        return(
            <div className="wrapper">
                <Router>
                <Header />
                    <Switch>
                        <Route path="/:id/" component={Main} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;