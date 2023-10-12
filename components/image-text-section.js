import { useEffect } from "react";
import Image from 'next/image';


export default function ImageTextSection() {
    
    useEffect(() => {
        const element = document.querySelector('.image-text-paragraph');
        const observer = new IntersectionObserver(entries => {
            element.classList.toggle( 'is-inview', entries[0].intersectionRatio );
        },
        {threshold: 0.5}
        );

        observer.observe( element );
    }, [])

    return (
        <section className="imageTextSection image-text-paragraph section">
                <div className='container'>
                    <div className='columns is-align-items-center is-justify-content-space-around paragraph img-left' id="partnership">
                        <div className='column is-narrow no-padding-mobile'>
                            <div className="img-container">
                                <Image
                                    src='/rallydiaries-partner.jpg'
                                    alt="Become RallyDiaries Partner"
                                    height={376} width={562}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                        <div className="column is-5 text-side">
                            <article>
                                <h4 className="img-text-subtitle">PARTNERSHIP ENQUIRIES</h4>
                                <h3 className="img-text-title">BECOME OUR <strong>PARTNER</strong> IN <strong>MOTORSPORT</strong> OR <strong>SIMRACING</strong> AND <strong>BENEFIT</strong> YOUR BUSINESS.</h3>
                                <p>Contact us to discuss how we can help your business grow through motorsport or simracing.</p>
                                <p className="link">
                                    <a href="https://rallydiaries.eu/en/contact-us" target="_blank" rel="noreferrer" className="button">SEND A MESSAGE</a>
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="columns ordered-mobile is-align-items-center is-justify-content-space-around paragraph img-right">
                        <div className="column order-mobile-2 is-5 text-side">
                            <h4 className="img-text-subtitle">CONTACT US</h4>
                            <h3 className="img-text-title">OUR <strong>TEAM</strong> IS HAPPY TO HELP WITH ANYTHING REGARDING OUR eRALLY CHAMPIONSHIP.</h3>
                            <p className="link">
                                    <a href="https://rallydiaries.eu/en/contact-us" target="_blank" rel="noreferrer" className="button">CONTACT US</a>
                                </p>
                        </div>
                        <div className="column order-mobile-1 is-narrow no-padding-mobile">
                            <div className="img-container">
                                <Image
                                    src='/erally-championship-contact.jpg'
                                    alt="Become RallyDiaries Partner"
                                    height={376} width={562}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
