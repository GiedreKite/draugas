import draugas from './img/draugas.png'
import { Link } from 'react-router-dom'
export function Header() {
return <>

        <header class="">
        <img src={draugas} alt="" />
            <nav>
                <Link to="/draugas">
                    <a>Pagrindinis</a>
                </Link>
                <Link to="/draugas/second">
                    <a>Second</a>
                </Link>
                {/* <Link to="/">
                    <a>Pagrindinis</a>
                </Link> */}
            </nav>
        </header>`;

</>
}