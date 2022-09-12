import { useEffect } from "react";


export default function ImageTextSection() {
    
    useEffect(() => {
        const element = document.querySelector('.image-text-paragraph');
        const observer = new IntersectionObserver(entries => {
        element.classList.toggle( 'is-inview', entries[0].isIntersecting );
        });

        observer.observe( element );
    }, [])

    return (
        <section className="imageTextSection image-text-paragraph section">
                <div className='container'>
                    <div className='columns is-align-items-center is-justify-content-space-between paragraph img-left'>
                        <div className='column is-7 no-padding-mobile'>
                            <div className="img-container">
                                {/* <picture>
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.webp?itok=-YqtAGL0 1x" media="(max-width: 500px)" type="image/webp">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style/public/2021-05/5o-httc-trackday.webp?itok=LjTw-NQJ 1x" type="image/webp">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0 1x" media="(max-width: 500px)" type="image/jpeg">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style/public/2021-05/5o-httc-trackday.jpg?itok=LjTw-NQJ 1x" type="image/jpeg">
                                </picture> */}
                                <img loading="lazy" width="500" height="333" src="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0" alt="" typeof="foaf:Image" />

                            </div>
                        </div>
                        <div className="column is-5 text-side">
                            <article>
                                <h4 className="img-text-subtitle">PARTNERSHIP ENQUIRIES</h4>
                                <h3 className="img-text-title">BECOME OUR <strong>PARTNER</strong> IN <strong>MOTORSPORT</strong> OR <strong>SIMRACING</strong> AND <strong>BENEFIT</strong> YOUR BUSINESS.</h3>
                                <p>Contact us to discuss how we can help your business grow through motorsport or simracing.</p>
                                <p className="link">
                                    <a href="https://rallydiaries.eu/en/contact" target="_blank" className="button">SEND A MESSAGE</a>
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="columns ordered-mobile is-align-items-center is-justify-content-space-between paragraph img-right">
                        <div className="column order-mobile-2 is-5 text-side">
                            <h4 className="img-text-subtitle">CONTACT US</h4>
                            <h3 className="img-text-title">OUR <strong>TEAM</strong> IS HAPPY TO HELP WITH ANYTHING REGARDING OUR eRALLY CHAMPIONSHIP.</h3>
                            <p className="link">
                                    <a href="https://rallydiaries.eu/en/contact" target="_blank" className="button">CONTACT US</a>
                                </p>
                        </div>
                        <div className="column order-mobile-1 is-7 no-padding-mobile">
                            <div className="img-container">
                                {/* <picture>
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.webp?itok=-YqtAGL0 1x" media="(max-width: 500px)" type="image/webp">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style/public/2021-05/5o-httc-trackday.webp?itok=LjTw-NQJ 1x" type="image/webp">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0 1x" media="(max-width: 500px)" type="image/jpeg">
                                    <source srcset="https://rallydiaries.eu/sites/default/files/styles/image_text_style/public/2021-05/5o-httc-trackday.jpg?itok=LjTw-NQJ 1x" type="image/jpeg">
                                </picture> */}
                                <img loading="lazy" width="500" height="333" src="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0" alt="" typeof="foaf:Image" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
