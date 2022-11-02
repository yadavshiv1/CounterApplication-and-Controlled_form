import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class Controll extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      number:'',
      city:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      city: this.state.city
    });

    this.setState({
      items,
      name: '',
      email: '',
      number:'',
      city:''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    const mystyle = {
        color: "white",
        backgroundColor: "#30336b",
        paddingTop: "25px",
        fontSize: "20px",
    };
    return (
        <><h4 style={mystyle}>Controlled Form By Tubelight Communications Ltd</h4>
      <div className="Controll">
       
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          name={ this.state.name }
          email={ this.state.email } 
          number={ this.state.number }
          city={ this.state.city } />
           <Table items={ this.state.items }/>
      </div>
      </>
    );
  }
}

export default Controll;