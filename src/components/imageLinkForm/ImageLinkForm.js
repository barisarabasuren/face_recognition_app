import Rank from './rank/Rank';
import Animation from './animation/Animation';
import UrlInput from './urlInput/UrlInput';

const ImageLinkForm = ( {onInputChange, onSubmit, renderedImage, box, user } ) => {
    return(
        <div className='form-wrapper'>
            <div className="form tc">
                <Rank user={user} />
                <Animation/>
                <UrlInput 
                    onInputChange={onInputChange}
                    onSubmit={onSubmit}
                    renderedImage={renderedImage}
                    box={box}
                /> 
            </div>    
        </div>
        
    )
};

export default ImageLinkForm;