import React from 'react';

class Form extends React.Component {
  render() {
    return (
        <div className='login-box'>
      <div id="Form" className='form'>
        <h3>User Details</h3>  
        <form onSubmit={this.props.handleFormSubmit} className="main_form">
          <label htmlFor="name">
          Name:
          <input id="name" value={this.props.name} 
            type="text" name="name"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="email">
          Email:
          <input id="email" value={this.props.email} 
            type="email" name="email"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="number" className='number'>
          Number:
          <input id="number" value={this.props.number} 
            type="text" name="number"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="city">
          City:
          <input id="city" value={this.props.city} 
            type="city" name="city"
            onChange={this.props.handleInputChange} />
          </label>
          <button className='form_btn' type="submit" value="Submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Form;