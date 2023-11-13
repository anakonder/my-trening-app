import { Component } from 'react'
import css from './LoginForm.module.css'

class LoginForm extends Component {
    state={
        email: '',
        password: '',
        passwordRepeat: '',
    }

    handleChange = ({target})=>{
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser({
            email: this.state.email,
            password: this.state.password
        })
    } 


    render() {
        return(
        <form className={css.loginForm} onSubmit={this.handleSubmit}>
            <h2 className={css.loginTitle}>User autorisation</h2>
            <label className={css.loginLabel}>
                Email:
                <input 
                    className={css.loginInput} 
                    type="email" 
                    name='email' 
                    placeholder='test@mail.com'
                    onChange={this.handleChange}
                />
            </label>
            <label className={css.loginLabel}>
                Password:
                <input 
                    className={css.loginInput} 
                    type="password" 
                    name='password'
                    onChange={this.handleChange}
                />
            </label>
            <label className={css.loginLabel}>
                Repeat the password:
                <input 
                    className={css.loginInput} 
                    type="password" 
                    name='passwordRepeat'
                    onChange={this.handleChange}
                />
            </label>
            <button className={css.loginBtn} type='submit'>Submit</button>
            
        </form>
        )
    }
   
    
}



export default LoginForm