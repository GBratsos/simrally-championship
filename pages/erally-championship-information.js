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
                            We want to have good roadbooks with lots of car classes for our drivers to use.<br />
                            Our goal is for drivers to do our rallies, without having to train, to have fun and finish.</p>

                        </div>
                    </div>
                </div>
                <div className="columns zig-zag is-align-items-center is-justify-content-space-between">
                    <div className="column is-6">
                    <div className="img-container">
                        <Image src='/erally-mobile-gif.gif' alt="RallyDiaries eRally Championship" height={300} width={300} layout="responsive" priority />
                    </div>
                    </div>
                    <div className="column is-5">
                        <div className="content">
                        <h2 className="pageSubTitle">ERALLY CHAMPIONSHIP DESCRIPTION</h2>
                        <p>This is the first time we organise eRally Championship. This version of the championship will start in <strong><i>October</i></strong> and finish <strong><i>10 weeks</i></strong>. It will consist of <strong><i>5 tarmac rallies</i></strong> 1 or 2 legs for each rally.</p>
                        <p>There will be a general car classification and classification per car class. There will be no group classification.</p>
                        <p>You will find all information about our point system on rally's website at <a href="#" target="_blank" rel="noreferrer">Rallysimfans.hu</a>.</p>
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
                        <Image src='/erally-mobile-gif.gif' alt="RallyDiaries eRally Championship" height={300} width={300} layout="responsive" priority />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}