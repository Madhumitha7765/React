import React, { Component } from 'react';

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
                <button onMouseEnter= {this.Incrementcount}>incremented to {count}</button>
            </div> 
        );
    }
}

export default counter;