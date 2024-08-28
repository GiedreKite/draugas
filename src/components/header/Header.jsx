import {draugas} from './img/draugas.png'

export function Header() {
return <>

        <header class="">
        <img src={draugas} alt="" />
            <nav>
                <a class={currentPageHref === '/' ? 'active' : ''} href="/">Pagrindinis</a>
                <a class={currentPageHref === '/about' ? 'active' : ''} href="/about">Apie projekta</a>
                <a class={currentPageHref === '/accounts' ? 'active' : ''} href="/accounts">Paskyros</a>
            </nav>
        </header>`;

</>
}