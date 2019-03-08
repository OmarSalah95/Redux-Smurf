import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/APIActions'
import { deleteSmurf } from '../actions/SmurfActions'

class SmurfList extends React.Component{

    componentDidMount() {
        this.props.getData()
    }

    deleteCurrentSmurf = (e ,id ) =>{
        e.preventDefault()
        this.props.deleteSmurf(id)
    }
    
    render(){
        return (
            !this.props.fetchingSmurfs && !this.props.addingSmurf && !this.props.deleting
            ?   <div className="smurf-list">
                    {this.props.smurfs.map(smurf =>
                        <div> 
                            <p>{smurf.name}</p>
                            <button onClick={(e) => this.deleteCurrentSmurf(e, smurf.id)}>Delete</button>
                            <button onClick={(e) => {} }>Edit Smurf</button>
                        </div>    
                    )}
                </div>
            :   <h2>Loading smurfs</h2>
        )
    }
}
const mapStateToProps = (state) => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    deleting: state.deleting
})

export default connect(mapStateToProps, { getData, deleteSmurf } )(SmurfList);