
import css from './Modal.module.css'

export const Modal = ({closeModalLogin, children}) => {
    return(
        <div className={css.modalWraper}>
            <div className={css.modalBody}>
                {children}
            </div>
        </div>
    )
}