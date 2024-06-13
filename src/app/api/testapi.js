
 async function fetchAvailableIds() {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir")
    const paintings = await response.json()
    return paintings;
}


 async function fetchPaintings(arr) {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers")
    const paintings = await response.json()
    console.log(paintings)
    return paintings
}

export {fetchAvailableIds, fetchPaintings}