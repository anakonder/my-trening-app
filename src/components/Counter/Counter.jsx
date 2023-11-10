import { Component } from "react"
import css from './Counter.module.css'

export class Counter extends Component {
    state = {
        value: 0,
    }

   handleChangeIncr = (e) => {
        this.setState((prevState) => {
            return {value: prevState.value += 1}
        }) 
    }

    handleChangeDecr = (e) => {
        this.setState((prevState) => {
            return {value: prevState.value -= 1}
        }) 
    }

    HandleChangeValue = (e) => { 
        const newValue = prompt("enter your new value")
        if (newValue !== null) { 
            this.setState(()=>{return {value: parseInt(newValue, 10)}})
        }
    }

    render() {
    return (
        <div className={css.counterContainer}>
            <h1 className={css.counterTitle}>Counter</h1>
            <p>{this.state.value}</p>
            <div className={css.btnContainer}>
                <button className={`${css.btn} ${css.increment}`} type="button" onClick={this.handleChangeIncr}>+</button>
                <button className={`${css.btn} ${css.decrement}`} type="button" onClick={this.handleChangeDecr}>-</button>
            </div>

            <button className={css.btn} type="button" onClick={this.HandleChangeValue}>Enter value counter</button>
        </div>
    )
    }
}