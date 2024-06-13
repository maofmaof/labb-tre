import "../styles/imageCard.css"

function ImageCards(props) {

 // author, width, , height, url, 

    return (

        <div className="imagecard-container">
            <h2 className="h2"> {props.author} </h2>
            <img className="img"
                src={props.url}
                width={500}
                height={250}
            />
           
        </div>
    )
}



export default ImageCards;