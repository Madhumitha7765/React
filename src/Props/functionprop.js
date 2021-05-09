import React from "react";

function Functionprops(props) {
    return (
        <div>
        <p>This is functional component</p>
        <p>Hello ! {props.name} from {props.place} This is a trial</p>
        </div>
    );
}

export default Functionprops;    


//pass props to functional comp,not needed for classcomp