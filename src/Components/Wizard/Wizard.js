import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    render() {
        return (
            <div>
                <h1>Wizzard</h1>
                <Link to='/'>
                    <button>CANCEL</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;