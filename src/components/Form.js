import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
    /*
            TODO - set initial state for link name and URL 
        */

    this.state = { Name: " ", URL: " ", }
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */

    if (event.target.id === "Name"){
      this.setState( {Name: event.target.value} )
    } else {
      this.setState( {URL: event.target.value} )
    }
 
  }

  

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    let addedLink = {Name: this.state.Name, URL: this.state.URL};
    this.props.handleSubmit(addedLink);
    this.setState({ Name: " ", URL: " "});

  }

  render() {
    return (

      <form>
        {/*TODO - Logic for returning a form element with labels and inputs for link name and URL */}

       <label>Name</label> 

        <br></br>

        <input type = "Text" 
        id = "Name" 
        value = {this.state.Name} 
        onChange = {this.handleChange} 
        style={{width: "700px",height:"25px"}}
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <label>URL</label>

        <br></br>

        <input type = "Text" 
        id = "URL" 
        value = {this.state.URL} 
        onChange = {this.handleChange}  
        style = {{width: "700px",height:"25px"}}
        />
        
        <button onClick={this.onFormSubmit} >Submit</button>

      </form>
    )
  }
}


export default Form