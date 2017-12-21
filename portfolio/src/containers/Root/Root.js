import React, { Component } from "react";
import { Background } from "./Root.style";
import { withRouter } from 'react-router';

class Root extends Component {
  
  componentDidMount(props) {
    const { history } = this.props;
    console.log(history);
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <div>
        <Background />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Root);
