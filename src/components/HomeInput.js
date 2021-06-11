import React, { PureComponent } from 'react';

class HomeInput extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <div>
        <button>BOOM</button>
        <br />
        {this.props.a}
        <input type="checkbox" value={} onChecked={false}></input>
      </div>
    );
  }
}

export default HomeInput;
