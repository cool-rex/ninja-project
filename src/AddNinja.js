import React, {Component} from "react";

class AddNinja extends Component{
    state ={
        name:null,
        age:null,
        belt:null
    }
    handleChange=(e)=>{
        this.setState({
           [e.target.id ]  : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addNinja(this.state); 
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor="Belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddNinja