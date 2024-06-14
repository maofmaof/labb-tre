"use client";
import "../styles/gallery.css"
import ImageCard from "../components/imageCards.js"
import { useEffect, useState } from "react"
import Pagination from "../components/pagination.js"

function Pictures() {

    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [imagesPerPage, setImagesPerPage] = useState(6) 

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);


    async function fetchImages() {
        let randomNr = Math.floor(Math.random() * 10) + 1
        const response = await fetch("https://picsum.photos/v2/list?page=" + randomNr + "&limit=30")
        const data = await response.json()
        setImages(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchImages();
    }, [])

    function handlePagination(pageNumber) {
        setCurrentPage(pageNumber)
 
    }

    return (
        <div className="gallery-container">
            <h1> Gallery here</h1>
            {isLoading ? <h1>Page is loading...</h1> :
                <div className="gallery-card-container">
                    <ImageCard images={currentImages} />
                </div>
            }
            <Pagination
                handlePagination={handlePagination}
                length={images.length / imagesPerPage}
            />
        </div>
    )
}

export default Pictures;