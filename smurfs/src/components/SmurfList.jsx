import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/APIActions'

class SmurfList extends React.Component{

    componentDidMount() {
        this.props.getData()
    }

    render(){
        return (
            !this.props.fetchingSmurfs && !this.props.addingSmurf
            ?   <div className="smurf-list">
                    {this.props.smurfs.map(smurf => <p>{smurf.name}</p>)}
                </div>
            :   <h2>Loading smurfs</h2>
        )
    }
}
const mapStateToProps = (state) => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
})

export default connect(mapStateToProps, { getData } )(SmurfList);