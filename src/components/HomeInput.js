import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
 import {toggleCheckbox} from '../actions/index'


class HomeInput extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.onToggle}>BOOM</button>
        <br />
        {this.props.a}
        <input type="checkbox" checked={this.props.isCheckBoxChecked} onChange={()=>{}}></input>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    isCheckBoxChecked: state.todos.isCheckBoxChecked
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onToggle : () =>{
      console.log(dispatch, 'dispatch')

      dispatch(toggleCheckbox())
    }
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeInput)

