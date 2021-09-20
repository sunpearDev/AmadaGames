import React, { Component } from 'react'
import GameRow from '../components/GameRow'
import axios from 'axios'


export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    async componentDidMount() {

        // let abc = await axios.get('https://thongtindoanhnghiep.co/api/company?l=ha-noi&p=1', {
        //     mode: 'no-cors',
        //     headers: {
        //         'Access-Control-Allow-Origin': 'http://localhost:3000',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
        //     },
        //     withCredentials: true,
        //     credentials: 'same-origin'
        // })
        // console.log(abc)
    }
    render() {
        return (
            <>
            
                <GameRow title="All" />
            </>
        )
    }
}
