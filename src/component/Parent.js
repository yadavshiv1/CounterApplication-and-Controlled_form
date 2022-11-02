import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Child } from './Child'

export class Parent extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.IncrementCounter = this.IncrementCounter.bind(this)
        this.DecrementCounter = this.DecrementCounter.bind(this)
    }
    IncrementCounter() {
        this.setState({
            count: this.state.count + 1
        })
    }
    DecrementCounter() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "#FF8DC7",
            padding: "10px",
            fontSize: "20px",
            borderRadius: "10px"
        };
        return (
            <><h4><Link to='/controll' style={mystyle}>Click Here &nbsp;Controlled Form</Link></h4>
                <div className='main_div'>

                    <div className='center_div'>
                        <h2>Counter Application <br />Tubelight Communications Ltd</h2>

                        <h1>
                            {this.state.count}
                        </h1>
                        <div className='btn_div'>
                            <Child data={this.IncrementCounter} buttonName="Increment" />
                            <Child data={this.DecrementCounter} buttonName="Decrement" />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}