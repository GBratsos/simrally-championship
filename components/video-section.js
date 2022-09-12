import { useRef, useEffect } from "react";
import Image from 'next/image';

export default function VideoSection() {

    const playButton = useRef([]);

    useEffect(() => {
        playButton.current[1].addEventListener('click', function() {
            document.querySelector('.desktopVid').play();
            playButton.current[1].classList.add('is-hidden');
        })
    }, [])


    return (
        <section className="videoSection">
            <div className="container">
                <div className="columns">
                    <div className="column is-12 no-padding">
                        <div className="video-container is-hidden-mobile">
                            <div className="playButton" ref={(el) => (playButton.current[1] = el)}>
                                <svg width="49" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 50.426V5.697C0 1.84 4.183-.565 7.516 1.377L46.473 24.06c3.336 1.942 3.306 6.771-.054 8.673L7.462 54.776C4.13 56.663 0 54.255 0 50.426Z" fill="#F9CA00"/></svg>
                            </div>
                            <video preload='metadata' controls poster='/erally-championship-poster.webp' width="1280" height="720" className="desktopVid">
                                <source src="/erally-championship.mp4?v=1" type='video/mp4'></source>
                            </video>
                        </div>
                        
                        <div className="img-container is-visible-mobile-only">
                            <Image src='/erally-mobile-gif.gif' alt="RallyDiaries eRally Championship" height={300} width={300} layout="responsive" priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}