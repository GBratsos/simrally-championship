import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">   
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <Image
                            src='/logo.svg'
                            alt="RallyDiaries eRally Championship"
                            height={62} width={136}
                            layout="fixed"
                            priority
                        />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainnavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="mainnavbar" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link href="/erally-championship-information">
                                ERALY CHAMPIONSHIP
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link href='/'>
                                SEASON RESULTS
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link href="/">
                                NEWS
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link href="/">
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}