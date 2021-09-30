import Box from './Box'

const FaceRecognition = ( { imageUrl, box } ) => {    
    if(imageUrl) {
        return(
            <div className="mw6 center mt4">
                <div className='relative'>
                    <img id="inputimage" alt="Image_not_found" src={imageUrl} className="br3"/>
                    {
                        Object.keys(box).map((key)=> {
                            return (<Box key={key} styleValue={{top: box[key].topRow, right: box[key].rightCol, bottom: box[key].bottomRow, left: box[key].leftCol}}></Box>)
                        })
                    } 
                </div>
            </div>
        )     
    } else {
        return(
            <div></div>
        )
    }  
};

export default FaceRecognition;