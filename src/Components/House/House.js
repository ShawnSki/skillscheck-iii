import React, { Component } from 'react';

class House extends Component {
    render(props) {
        const { name, address, city, state, zip } = this.props.listObj;

        return (
            <div>
                <div>
                    <button>X</button>
                    <p>Property Name:</p>
                    <p>{name}</p>
                </div>
                <div>
                    <p>Address:</p>
                    <p>{address}</p>
                </div>
                <div>
                    <p>City:</p>
                    <p>{city}</p>
                </div>
                <div>
                    <p>State:</p>
                    <p>{state}</p>
                </div>
                <div>
                    <p>Zip:</p>
                    <p>{zip}</p>
                </div>
            </div>
        )
    }
}

export default House;