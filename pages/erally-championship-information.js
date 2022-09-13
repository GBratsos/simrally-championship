import DiscordSection from '../components/discord-section';
import Image from 'next/image';

export default function Season() {
    return (
        <section className="page page--communityRules">
            <Image
                    src='/erally-championship-poster.webp'
                    alt="RallyDiaries eRally Championship"
                    height={720} width={1280}
                    layout="responsive"
                    priority
            />
            <div className="container">
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
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between">
                    <div className="column is-6">
                    <div className="img-container">
                        <img loading="lazy" width="500" height="333" src="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0" alt="" typeof="foaf:Image" />
                    </div>
                    </div>
                    <div className="column is-5">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP SEASONS</h2>
                            <p>RallyDiaries eRally Championship seasons, consist of <strong><i>5 rallies</i></strong> with 1 or 2 legs for each rally.</p>
                            <p>There will be a general and class classifications. There will be no group classification.</p>
                            <p>You will find all information about our current season on championship's website at <a href="#" target="_blank" rel="noreferrer">Rallysimfans.hu</a>.</p>
                        </div>
                    </div>
                </div>
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between">
                    <div className="column is-5">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP RULES</h2>
                            <p>
                                <i>In order to finish first, you first have to finish.</i>
                            </p>
                            <p>The rules of RallyDiaries eRally Championship are simple.</p>
                            <ul className="has-text-left">
                                <li>Drive safe.</li>
                                <li>Try not to lose your concentration.</li>
                                <li>Have fun and share it with the community.</li>
                                <li>Stay on the road because this will get you to the finish line.</li>
                                <li>Don't try to cheat because we don't care <i>for now</i>.</li>
                                <li>Stay inside the road limits of the Rallysimfans.hu.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column is-6">
                    <div className="img-container">
                        <img loading="lazy" width="500" height="333" src="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0" alt="" typeof="foaf:Image" />
                    </div>
                    </div>
                </div>
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between">
                    <div className="column is-6">
                        <div className="img-container">
                            <img loading="lazy" width="500" height="333" src="https://rallydiaries.eu/sites/default/files/styles/image_text_style_mobile/public/2021-05/5o-httc-trackday.jpg?itok=-YqtAGL0" alt="" typeof="foaf:Image" />
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="content">
                            <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP DRIVER'S PROMO</h2>
                            <p>We love to share our work with the world of social media. We also love the work of <a href="https://www.rallysimfans.hu/" target="_blank" rel="noreferrer">Rallysimfans.hu</a> community.</p>
                            <p>In order to help the community to grow we encourage our drivers to share your <strong>photos</strong> or <strong>videos</strong> form our rallies on <i>Instagram / Facebook / TikTok / Twitter</i> and use the hashtags <strong>#rallydiarieseRally</strong> & <strong>#rallysimfans</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <DiscordSection />
        </section>
    )
}