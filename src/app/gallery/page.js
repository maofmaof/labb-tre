"use client";
import "../styles/gallery.css"
import ImageCard from "../components/imageCards.js"
import { useEffect, useState } from "react"

function Pictures() {

    const [isLoading, setIsLoading] = useState(true)
    const [renderImages, setRenderImages] = useState([])

    async function fetchAvailableIds() {
        let randomNr = Math.floor(Math.random() * 10) + 1
        const response = await fetch("https://picsum.photos/v2/list?page=" + randomNr + "&limit=10")
        const images = await response.json()
        console.log(images)
        setRenderImages(images)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAvailableIds();
    }, [])

    return (
        <div className="gallery-container">
            <h1> Gallery here</h1>
            {isLoading ? <h1>Page is loading...</h1> :
                <div className="gallery-card-container">
                    {renderImages.map((e) => {
                        return <ImageCard url={e.download_url} author={e.author} key={e.id} />
                    })}

                </div>
            }


        </div>
    )
}

export default Pictures;