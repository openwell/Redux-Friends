import React, { Component } from 'react'
import { fetchingFri } from "../store/actions/index";
import { connect } from "react-redux";
export class Friends extends Component {
    componentDidMount(){
     this.props.fetchingFri()
     console.log('hi')
    }
    logOut=()=>{
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <p onClick={this.logOut}>LogOut</p>
                {this.props.friends.map(elem=> <p key={elem.id}>{elem.name}</p>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      friends: state.friends
    };
  };
  export default connect(
    mapStateToProps,
    { fetchingFri }
  )(Friends);
