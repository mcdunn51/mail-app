import React, { Component } from 'react';
import LogInContainer from './components/loginContainer';
import Radium, { StyleRoot } from 'radium';
import MailTable from './components/table';
import NoMail from './components/noMail';
// import ShowMap from './components/showMap';

class App extends Component {
    state = {
      showLogin: true,
      showMailTable: false,
      showNoMail: false
    }
   
    toggleShowLoginHandler = () => {
      const doesShow = this.state.showLogin;
      this.setState({showLogin: !doesShow});
    }

    toggleShowEitherMailTableOrNoMail = () => {
      let oneOrZero = Math.round(Math.random());
      if (oneOrZero == 0) {
        this.toggleShowNoMail();
      } else {
        this.toggleShowMailTableHandler();
      }
    }
    
    toggleShowMailTableHandler = () => {
      const doesShow = this.state.showMailTable;
      this.setState({showMailTable: !doesShow});
    }

    toggleShowNoMail = () => {
      const doesShow = this.state.showNoMail;
      this.setState({showNoMail: !doesShow});
    }

    render() {
      let login = null;
      if (this.state.showLogin) {
        login = (<LogInContainer
        click = { () => {this.toggleShowLoginHandler(); this.toggleShowEitherMailTableOrNoMail() }}
        />);
      }

      let mailTable = null;
      if (this.state.showMailTable) {
        mailTable = (<MailTable
        />);
      }

      let noMail = null;
      if (this.state.showNoMail) {
        noMail = (<NoMail
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
        {noMail}
        
      </StyleRoot>
    );
  }
}

export default Radium (App);
