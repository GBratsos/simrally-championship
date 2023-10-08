import DiscordSection from '../components/discord-section';

export default function SeasonInformation() {
    return (
        <section className="page page--season-information">
            <div className="bg-image"></div>
            <div className="top-section">
                <div className="container">
                    <div className="columns is-justify-content-center">
                        <div className="column is-8 has-text-centered">
                            <h1 className="pageTitle">RALLYDIARIES ERALLY CHAMPIONSHIP</h1>
                            <div className="content">
                                <p>RallyDiaries eRally Championship seasons, consist of <strong><i>5 rallies</i></strong> with 1 or 2 legs for each rally.</p>
                                <p>There will be general and class classifications. There will be no group classification.</p>
                                <p>You will find all information about our current season on championship&apos;s website at <a href="https://www.rallysimfans.hu/rbr/bajnoksag2.php?b=reszletek&bajnoksag_id=247" target="_blank" rel="noreferrer">Rallysimfans.hu</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="seasonInformation section">
                    <div className="container">
                        <div className="columns is-justify-content-center">
                            <div className="column is-8 has-text-centered">
                                <h2 className="blockTitle">SEASON 4 CALENDAR</h2>
                            </div>
                        </div>
                        <div className="columns is-multiline is-justify-content-center">
                            <div className="column is-5">
                                <div className="rally">
                                    <h3 className="rally-title">RallyDiaries eRally Championship S4 Round 1</h3>
                                    <p className="rally-date">16 - 22 October 2023</p>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="rally">
                                    <h3 className="rally-title">RallyDiaries eRally Championship S4 Round 2</h3>
                                    <p className="rally-date">30 - 05 November 2023</p>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="rally">
                                    <h3 className="rally-title">RallyDiaries eRally Championship S4 Round 3</h3>
                                    <p className="rally-date">13 - 19 November 2023</p>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="rally">
                                    <h3 className="rally-title">RallyDiaries eRally Championship S2 Round 4</h3>
                                    <p className="rally-date">27 - 03 December 2023</p>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="rally">
                                    <h3 className="rally-title">RallyDiaries eRally Championship S4 Round 5</h3>
                                    <p className="rally-date">11 - 17 December 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="seasonStandings section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6">
                            <div className="result">
                                <svg width="295" height="218" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.31 50.509H51.7V17.005H35.03v5.052h11.619v28.452h-11.62v5.052h28.28v-5.052Z" fill="#231F20"/><path d="M295 75.081V70.03H100.866V0h-5.052v70.03H0v5.051h95.814v67.504H0v5.051h95.814v70.03h5.052v-70.03H295v-5.051H100.866V75.081H295Z" fill="#231F20"/><path d="M35 112.829v15.287h28.31v-5.052H40.051v-7.052l23.25-11.175V89.56H35v13.691h5.051v-8.64h18.197v7.053L35 112.829ZM35.02 175.805h5.052v-8.638H58.27v6.84l-11.62 4.041v6.679l11.62 4.042v6.85H40.072v-8.639H35.02v13.691h28.3v-15.489l-10.89-3.789 10.89-3.789v-15.489h-28.3v13.69Z" fill="#231F20"/></svg>
                                <h3 className="resultTitle">
                                    <a href="https://www.rallysimfans.hu/rbr/bajnoksag2.php?b=reszletek_min&bajnoksag_id=247&rally_lista" target="_blank" rel="noreferrer">SEASON STANDINGS</a>
                                </h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="result">
                                <svg width="295" height="219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M149.983 90.532h-16.389V95.5h11.423v27.972h-11.423v4.967h27.813v-4.967h-11.424V90.532Z" fill="#231F20"/><path d="M217.669 134.438C253.667 123.928 295 107.936 295 77.261c0-13.509-9-26.094-25.35-35.452-15.317-8.77-35.452-13.727-56.928-14.085V0H82.278v27.724c-21.476.357-41.611 5.314-56.928 14.085C9 51.167 0 63.752 0 77.261c0 30.675 41.323 46.667 77.331 57.177 33.902 9.893 35.253 30.972 34.906 37.011-10.559 2.345-20.284 5.742-28.658 10.102-17.632 9.189-27.336 21.596-27.336 34.926v2.483h182.515v-2.483c0-13.33-9.705-25.737-27.337-34.926-8.374-4.36-18.089-7.757-28.638-10.102-.268-5.999 1.282-27.207 34.886-37.011ZM147.5 167.714c-5.165 0-10.271.239-15.268.686v-14.245a47.111 47.111 0 0 0 30.536 0V168.4a171.542 171.542 0 0 0-15.268-.686Zm0-15.982c-23.304 0-42.256-18.953-42.256-42.257 0-23.303 18.952-42.256 42.256-42.256s42.256 18.953 42.256 42.256c0 23.304-18.952 42.257-42.256 42.257Zm29.989-79.11v.398c-8.165-6.725-18.605-10.768-29.989-10.768s-21.824 4.043-29.989 10.768v-.397c-16.688 0-30.276-13.58-30.276-30.277v-2.791h120.511v2.79c0 16.689-13.579 30.278-30.277 30.278h.02Zm-64.497 4.67c-7.878 8.443-12.715 19.757-12.715 32.183 0 5.086.814 9.973 2.304 14.562-9.873-6.546-23.303-11.145-36.415-15.635-21.575-7.38-41.959-14.353-41.959-28.19 0-23.403 29.79-32.125 58.468-32.542 2.344 15.446 14.761 27.625 30.307 29.621h.01Zm69.026 0c15.556-2.007 27.963-14.176 30.307-29.622 28.677.427 58.467 9.139 58.467 32.542 0 13.837-20.383 20.81-41.958 28.19-13.122 4.49-26.552 9.099-36.415 15.635a47.093 47.093 0 0 0 2.304-14.562c0-12.426-4.837-23.74-12.715-32.184h.01Zm25.748-72.335v29.64H87.254V4.958h120.512ZM78.732 129.66C27.724 114.77 4.977 98.608 4.977 77.251c0-24.128 34.458-43.825 77.3-44.56V42.713c-38.958.606-63.046 14.86-63.046 37.509 0 17.383 22.012 24.912 45.326 32.889 17.214 5.89 35.005 11.979 43.339 22.042a47.56 47.56 0 0 0 19.37 16.986v16.777c-3.427.408-6.795.904-10.092 1.52-.05-8.572-3.716-30.634-38.452-40.766l.01-.01Zm154.93 84.324H61.348c2.543-22.996 40.21-41.313 86.152-41.313s83.609 18.317 86.152 41.313h.01Zm-65.918-45.078v-16.777a47.56 47.56 0 0 0 19.37-16.986c8.334-10.072 26.125-16.152 43.339-22.042 23.304-7.977 45.326-15.506 45.326-32.89 0-22.647-24.088-36.892-63.047-37.508V32.681c42.853.735 77.301 20.433 77.301 44.56 0 21.357-22.747 37.529-73.755 52.409-34.727 10.142-38.402 32.194-38.452 40.766a154.315 154.315 0 0 0-10.092-1.52l.01.01Z" fill="#231F20"/></svg>
                                <h3 className="resultTitle">
                                    <a href="https://www.rallysimfans.hu/rbr/bajnoksag2.php?b=reszletek_min&bajnoksag_id=247&ponttabla" target="_blank" rel="noreferrer">SEASON RESULTS</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DiscordSection />
        </section>
    )
}