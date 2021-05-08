import React, { Component } from 'react';
import UpdatedComp from "./higherorder"
class counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        };
        }

    Incrementcount = () =>{
        this.setState({count:this.state.count +1});
    };



    render() {
        const {count} = this.state;
        
        
        return (           
            <div>
                <p></p>
                <button  onMouseEnter= {this.Incrementcount}>{this.props.name} incremented to {count}</button>
            </div> 
        );
    }
}


export default UpdatedComp(counter);