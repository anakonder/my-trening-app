import css from './Header.module.css'

export const Header = ({hendleModadalLoginToggle}) => {
    return (
        <div className={css.header}>
            <button className={css.loginBtn} type='button' onClick={hendleModadalLoginToggle}>Sign in</button>
        </div>
    )
}