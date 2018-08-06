import React, { Component } from 'react';
import LogInContainer from './components/loginContainer';
import Radium, { StyleRoot } from 'radium';
import MailTable from './components/table';


class App extends Component {
    state = {
      showLogin: true,
      showMailTable: false
    }
   
    toggleShowLoginHandler = () => {
      const doesShow = this.state.showLogin;
      this.setState({showLogin: !doesShow});
    }

    toggleShowMailTableHandler = () => {
      const doesShow = this.state.showMailTable;
      this.setState({showMailTable: !doesShow});
    }

    render() {
      let login = null;
      if (this.state.showLogin) {
        login = (<LogInContainer
        click = { () => {this.toggleShowLoginHandler(); this.toggleShowMailTableHandler() }}
        />);
      }

      let mailTable = null;
      if (this.state.showMailTable) {
        mailTable = (<MailTable
        />);
      }

    const style = {
      width:'100%',
      height: '100%',
    }

    return (
      <StyleRoot style={style}>
        {login}
        {mailTable}
      </StyleRoot>
    );
  }
}

export default Radium (App);
