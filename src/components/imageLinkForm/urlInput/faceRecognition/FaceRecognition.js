const FaceRecognition = ( { imageUrl } ) => {
    if(imageUrl) {
    return(
        <div className="mw6 center mt4">
            <img alt="Image not found" src={imageUrl} className="br3"/>  
        </div>
    )     
    } else {
        return(
            <div></div>
        )
    }  
};

export default FaceRecognition;