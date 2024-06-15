'use client'
import "../styles/spacenews.css"
import SpaceCard from "../components/spaceCard"
import { useState, useEffect } from 'react';

function SpaceNews() {

    const [spaceNewsArr, setSpaceNewsArr] = useState([])
    const [nextOffset, setNextOffset] = useState(10)
    const [isLoading, setIsLoading] = useState([])

    async function fetchSpaceNews() {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=10&offset=" + nextOffset)
        const data = await response.json()
        console.log(data)
        setSpaceNewsArr(data.results)
        setNextOffset(data.next)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchSpaceNews()
    }, [])

    return <div className="spacenews-container">

        {isLoading ? <h1>It's loading..</h1> :

            <div> <button onClick={() => {
                fetchSpaceNews()
            }}>Fetch more news</button> 
            {spaceNewsArr.map((e, i) => {
                return <SpaceCard key={e.id} info={e} />
            })}
            </div>
        }

    </div>
}


export default SpaceNews;
