import { useEffect } from "react";
import "../styles/imageCard.css"

function ImageCards({ images }) {

    useEffect(() => {
        console.log(images)
    }, [])
    return (

        <div className="gallery-card-container" >
            {images.map((e) => {
                return <div>
                    <h3 className="h2"> photo by {e.author} </h3>
                    <img className="img" src={e.download_url} 
                    width={550} height={300}
                    />
                </div>
            })}


        </div>
    )
}



export default ImageCards;