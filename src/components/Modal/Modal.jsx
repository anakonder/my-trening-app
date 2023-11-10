import { LoginForm } from '../LoginForm/LoginForm'
import css from './Modal.module.css'

export const Modal = ({closeModalLogin}) => {
    return(
        <div className={css.modalWraper}>
            <div className={css.modalBody}>
                <LoginForm/>
            </div>
        </div>
    )
}