import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    nextProps, nextState === this.props, this.state

    return false;
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
