import DiscordSection from '../components/discord-section';
import Image from 'next/image';
import { useEffect } from "react";

export default function Season() {

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
        <section className="page page--communityRules">
            <div className="bg-image"></div>
            <section className='top-section'>
                <div className='container'>
                    <div className="columns is-multiline is-justify-content-center">
                        <div className="column is-narrow has-text-centered">
                            <h1 className="pageTitle">RALLYDIARIES ERALLY CHAMPIONSHIP<br />INFORMATION</h1>
                            <div className="content">
                                <p>Welcome to RallyDiaries eRally Championship.</p>
                                <p>This championship is all about having fun & driving our favorite cars on the challenging simulator of Richard Burns Rally.<br />
                                Our purpose is to deliver the atmosphere and challenge of real rallies, to our drivers.</p>
                                <p>The main idea behind our championship is to have small seasons of 5 weekly rallies, every two weeks.<br />
                                Our roadbooks will consist of wide variety of car classes for our drivers to use.<br />
                                Our goal is for drivers is to have fun and finish our rallies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <div className="container image-text-paragraph">
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between paragraph img-left">
                    <div className="column is-6 no-padding-mobile">
                    <div className="img-container">
                        <Image
                            src='/erally-championship-seasons.jpg'
                            alt="RallyDiaries eRally Championship Seasons"
                            height={509} width={760}
                            layout="responsive"
                            priority
                        />
                    </div>
                    </div>
                    <div className="column is-5 text-side">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP SEASONS</h2>
                            <p>RallyDiaries eRally Championship seasons, consist of <strong><i>5 rallies</i></strong> with 1 or 2 legs for each rally.</p>
                            <p>There will be general and class classifications. There will be no group classification.</p>
                            <p>You will find all information about our current season on championship&apos;s website at <a href="https://www.rallysimfans.hu/rbr/bajnoksag2.php?b=reszletek&bajnoksag_id=258" target="_blank" rel="noreferrer">Rallysimfans.hu</a>.</p>
                        </div>
                    </div>
                </div>
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between ordered-mobile">
                    <div className="column is-5 text-side order-mobile-2">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP RULES</h2>
                            <p>
                                <i>In order to finish first, you first have to finish.</i>
                            </p>
                            <p>The rules of RallyDiaries eRally Championship are simple.</p>
                            <ul className="has-text-left">
                                <li>Drive safe.</li>
                                <li>Have fun and share it with the community.</li>
                                <li>Stay on the road because this will get you to the finish line.</li>
                                <li>Stay on the road limits of the Rallysimfans.hu.</li>
                                <li>Don&apos;t try to cheat because we don&apos;t care <i>for now</i>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column is-6 no-padding-mobile order-mobile-1">
                    <div className="img-container">
                        <Image
                            src='/erally-championship-rules.jpg'
                            alt="RallyDiaries eRally Championship Rules"
                            height={509} width={760}
                            layout="responsive"
                            priority
                        />
                    </div>
                    </div>
                </div>
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between paragraph img-left">
                    <div className="column is-6 no-padding-mobile">
                        <div className="img-container">
                            <Image
                                src='/erally-championship-promo.jpg'
                                alt="RallyDiaries eRally Championship Social Media Promo"
                                height={509} width={760}
                                layout="responsive"
                                priority
                            />
                        </div>
                    </div>
                    <div className="column is-5 text-side">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP DRIVER&apos;S PROMO</h2>
                            <p>We love to share our work with the world of social media. We also love the work of <a href="https://www.rallysimfans.hu/" target="_blank" rel="noreferrer">Rallysimfans.hu</a> community.</p>
                            <p>In order to help the community to grow we encourage our drivers to share your <strong>photos</strong> or <strong>videos</strong> from our rallies on <i>Instagram / Facebook / TikTok / Twitter</i> and use the hashtags <strong>#rallydiarieseRally</strong> & <strong>#rallysimfans</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <DiscordSection />
        </section>
    )
}