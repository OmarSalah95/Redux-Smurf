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

    render() { 
        return ( 
            <form onSubmit={this.addNewSmurf}>
                <input
                    type="text"
                    name="name"
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="height"
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <button>Add Smurf</button>
            </form>
         );
    }
}
 
export default connect(null, { addSmurf })(SmurfForm);