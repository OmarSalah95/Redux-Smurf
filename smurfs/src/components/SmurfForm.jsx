import React from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/SmurfActions'

class SmurfForm extends React.Component {
    state = { 
        newSmurf:{
            name: '',
            age: '',
            height: '',
        }
     }

     handleChange = e => {
        this.setState({
          newSmurf: {
            ...this.state.newSmurf,
            [e.target.name]: e.target.value
          }
        });
    };

    addNewSmurf = e =>{
        e.preventDefault();
        this.state.newSmurf.name
        this.props.addSmurf(this.state.newSmurf)
    }

    render() { 
        return ( 
            <form onSubmit={this.addNewSmurf}>
                <input
                    type="text"
                    name="name"
                    placeholder='Smurf Name'
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder='Smurf Age'
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="height"
                    placeholder='Smurf Height'
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <button>Add Smurf</button>
            </form>
         );
    }
}
 
export default connect(null, { addSmurf })(SmurfForm);