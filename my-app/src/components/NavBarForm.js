import React, { Component } from 'react'
import NavBarChild from './NavBarChild'
import css from "./css/NavBarForm.module.css"

class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }


    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {/* {
            this.state.isLoggedIn ? 
            <button onClick={this.handleButtonClick}>Login</button>
            :
            <form>
                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='username' id='username'/>

                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='password' id='username'/>

                <button onClick={this.handleButtonClick}>Submit</button>
            </form>
        } */}

        {/* This is how things should look after refactoring the code */}

        <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />
            
        </div>
        )
    }
}

export default NavBarForm