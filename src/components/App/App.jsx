import { Component } from "react";
import { Counter } from "../Counter/Counter";
import { Header } from "../Layout/Header/Header";
import { Modal } from "../Modal/Modal";

import css from './App.module.css'
import LoginForm from "components/LoginForm/LoginForm";
import { saveToLocalStorage } from "helpers/entWithLS";



class App extends Component{
  state={
    isModalLoginOpen: false
  }

  hendleModadalLoginToggle = () => {
    this.setState({isModalLoginOpen: true})    
  }

  closeModalLogin = () => {
    this.setState({isModalLoginOpen: false})
  }

  createUser = (data) => {
    console.log('data ==>', data)
    saveToLocalStorage(data)
  }

  render() {
    return (
      <div className="App">
        <div className={css.appContainer}>
          <Header hendleModadalLoginToggle={this.hendleModadalLoginToggle}/>
          <Counter/>
          {this.state.isModalLoginOpen &&
            <Modal closeModalLogin={this.closeModalLogin}>
              <LoginForm createUser={this.createUser} closeModalLogin={this.closeModalLogin} />
            </Modal>}
        </div>      
      </div>
    );
  
  }
 
}

export default App;