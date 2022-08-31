export default function NewsSection({postData}) {
    console.log(postData);
    return (
        <section className="newsSection section">
        <div className="container">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h3 className="blockTitle has-text-centered">NEWS</h3>
                </div>
                <div className="column is-12 no-padding">
                  <div className="columns is-multiline is-gapless">
                    {postData.slice(0, 3).map((post, i) => (
                      <div className="column is-4" key={i}>
                        <article className="article-with-background">
                          <div className="img-container">
                            <picture>
                                <source srcSet={`https://rallydiaries.eu${post.field_media_image_1}`} media="(max-width: 500px)" type="image/webp" />
                                <source srcSet={`https://rallydiaries.eu${post.field_media_image}`} media="(max-width: 850px)" type="image/webp" />
                                <source srcSet={`https://rallydiaries.eu${post.field_media_image}`} media="(min-width: 851px)" type="image/webp" />
                                  <img loading="lazy"
                                        width="460"
                                        height="370"
                                        src={`https://rallydiaries.eu${post.field_media_image_1}`}
                                        alt={post.title}
                                        typeof="foaf:Image"
                                  />
                              </picture>
                          </div>
                          <section className="article-details">
                            <h2 className="card-title">
                              <a href={post.view_node}>{post.title}</a>
                            </h2>
                          </section>
                        </article>
                      </div>
                    ))}
                    {postData.slice(3,5).map((post, i) => (
                      <div className="column is-6" key={i}>
                        <article className="article-with-background">
                          <div className="img-container">
                            <picture>
                              <source srcSet={`https://rallydiaries.eu${post.field_media_image_1}`} media="(max-width: 500px)" type="image/webp" />
                              <source srcSet={`https://rallydiaries.eu${post.field_media_image}`} media="(max-width: 850px)" type="image/webp" />
                              <source srcSet={`https://rallydiaries.eu${post.field_media_image}`} media="(min-width: 851px)" type="image/webp" />
                                <img loading="lazy"
                                      width="460"
                                      height="370"
                                      src={`https://rallydiaries.eu${post.field_media_image_1}`}
                                      alt={post.title}
                                      typeof="foaf:Image"
                                />
                            </picture>
                          </div>
                          <section className="article-details">
                            <h2 className="card-title">
                              <a href={post.view_node}>{post.title}</a>
                            </h2>
                          </section>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="column is-12 has-text-centered button-wrapper">
                    <a href="https://rallydiaries.eu/news" className="button" target="_blank" aria-label="Read more news" rel="noreferrer">Read more news</a>
                </div>
            </div>
        </div>
    </section>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://rallydiaries.eu/en/rest/articles');
    // res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=10, stale-while-revalidate=59'
    // )

    const postData = await res.json()

    if (!res.ok) {
        throw new Error(`Failed to fetch posts, received status ${res.status}`)
    }

    return { props: 
        { postData },
        revalidate: 10
    };
}