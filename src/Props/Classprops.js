import React, { Component } from 'react';

class Classprops extends Component {
    render() {
        return (
            <div>
                <p>
                    Hello {this.props.name} from {this.props.place}
                </p>
                <p>
                    { /* When components doesnt know their children beforehand  */}
                    {this.props.children}
                </p>
            </div>
            
        );
    }
}

export default Classprops;