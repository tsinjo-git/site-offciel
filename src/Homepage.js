import React, { Component } from "react";
import View from "./components/View";
import style from "./css/style.css"
class Homepage extends Component {
    componentDidMount () {
        document.title = "Tsinjo Elie | Portfolio";
    }
    render () { 
        return (
            <View />
        )
    }
}

export default Homepage;