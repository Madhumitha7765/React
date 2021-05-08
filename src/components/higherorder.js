import React from "react"

const UpdatedComp = OriginalComp =>{
    class Newcomp extends React.Component{
        render(){
            return <OriginalComp name ="The user"/>;
        }
    }
    return Newcomp;
};

export default UpdatedComp;