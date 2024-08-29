import draugas from './img/draugas.png'
import { Link } from 'react-router-dom'
import style from './Header.module.css';
export function Header() {
return <>

        <header className="">
        <img className={style.img}src={draugas} alt="Logo" />
            <nav>
                <Link to="/draugas">
                    <button>Pagrindinis</button>
                </Link>
                <Link to="/draugas/second">
                    <button>Second</button>
                </Link>
                <Link to="/draugas/third">
                    <button>Third</button>
                </Link>
                {/* <Link to="/">
                    <a>Pagrindinis</a>
                </Link> */}
            </nav>
        </header>`;

</>
}