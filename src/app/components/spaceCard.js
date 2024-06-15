import "../styles/spaceCard.css"

function SpaceCard({ info }) {
    /*
        "id": 23849,
        "title": "U.S. to rely on commercial satellites to image spacecraft in orbit",
        "url": "https://spacenews.com/u-s-to-rely-on-commercial-satellites-to-image-spacecraft-in-orbit/",
        "image_url": "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/01_overview-of-International-Space-Station-with-Boeing-Starliner-spacecraft_07june2024.jpg",
        "news_site": "SpaceNews",
        "summary": "The National Geospatial-Intelligence Agency is interested in “commercial unclassified non-Earth imaging and associated analytics\"",
        "published_at": "2024-06-13T20:10:12Z",
        "updated_at": "2024-06-13T20:18:42.345238Z",
        "featured": false,
        "launches": [],
        "events": []
    */
    return (
        <div>
            <h1 className="spacecard-header">{info.title}</h1>
            <div className="spacecard-flex">
                <p className="spacecard-list-items">{info.summary}</p>
                <a className="spacecard-list-items" href={info.url}>Link to article</a>
                <p className="spacecard-list-items"> published at {info.published_at}</p>
                <p className="spacecard-list-items"> updated at{info.updated_at}</p>
            </div>
            <div className="spacecard-flex">
                <img className="spacecard-image" src={info.image_url} width={500} height={250}></img>
            </div>
        </div>
    )
}



export default SpaceCard;