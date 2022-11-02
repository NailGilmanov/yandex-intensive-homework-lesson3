import { Header } from '../Header/Header'

import style from './style.module.css'

export const Layout = (props) => {
    return <div>
        <header className={style.header}>
            <Header />
        </header>
        <main className={style.main}>
            { props.children }
        </main>
    </div>
}