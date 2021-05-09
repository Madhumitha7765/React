import React, { Component } from 'react';
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : "Maddy"
        }
    }

        componentDidMount(){
            setInterval(() => {
                this.setState({
                    name : "Jaddu cool"
                });
            },3000);
        }

    render() {
        console.log("Parent Component Render")

        return (
            <div>
                <br></br>
                This is parent component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />

            </div>
        );
    }
}

export default ParentComp;