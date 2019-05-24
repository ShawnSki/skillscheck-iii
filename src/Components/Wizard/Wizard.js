import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null,
            img: '',
            mortgage: null,
            rent: null
        }
    }

    handleInputUpdate = (e) => {
        this.setState({
            // [e.target.name]: e.target.value
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        });
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>CANCEL</button></Link>
                </div>
                <div>
                    <h2>Property Name</h2>
                    <input name='name' value={this.state.name} onChange={this.handleInputUpdate}></input>
                </div>
                <div>
                    <h2>Address</h2>
                    <input name='address' value={this.state.address} onChange={this.handleInputUpdate}></input>
                </div>
                <div>
                    <div>
                        <h2>City</h2>
                        <input name='city' value={this.state.city} onChange={this.handleInputUpdate}></input>
                    </div>
                    <div>
                        <h2>State</h2>
                        <input name='state' value={this.state.state} onChange={this.handleInputUpdate}></input>
                    </div>
                    <div>
                        <h2>Zip Code</h2>
                        <input name='zip' type='number' value={this.state.zip} onChange={this.handleInputUpdate}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wizard;