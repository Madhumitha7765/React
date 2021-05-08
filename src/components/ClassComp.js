import React from 'react'

//react.compoenent is the base class
export class Classcomp extends React.Component{
    render(){
        return <p>This is Class Component</p>;
    }
}


export class Class1 extends React.Component{
    render(){
        return (
            <div>
                    <p>    hey this is another non default class</p>
                    <p>    hey this is another non default class line 2</p>
            </div>
        ); 
            
    }
}

//export default Classcomp;
