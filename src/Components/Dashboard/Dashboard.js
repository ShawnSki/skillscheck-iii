import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houseList: []
        }
    }

    componentDidMount() {
        this.handleGetListings();
    }

    handleGetListings() {
        axios.get('/api/listings').then((res) => {
          this.setState({
            houseList: res.data
          })
        })
    }
    
    

    


    render() {
        console.log(this.state.houseList)
        const houseListMapped = this.state.houseList.map((listObj, indx) => {
            return (
                <House key={indx} listObj={listObj} />
            )
        })

        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'><button>ADD NEW</button></Link>
                </div>
                <div>
                    {houseListMapped}
                </div>
            </div>
        )
    }
}

export default Dashboard;