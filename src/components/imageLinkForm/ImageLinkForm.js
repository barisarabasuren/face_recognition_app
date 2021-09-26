import Rank from './rank/Rank';
import Animation from './animation/Animation';
import UrlInput from './urlInput/UrlInput';

const ImageLinkForm = ( {onInputChange, onButtonSubmit, imageUrl } ) => {
    return(
        <div>
            <div className="mw8 center bg-white br3 pa4 ba b--black-10 tc shadow-3">
                <Rank />
                <Animation/>
                <UrlInput 
                    onInputChange={onInputChange}
                    onButtonSubmit={onButtonSubmit}
                    imageUrl={imageUrl}
                /> 
            </div>    
        </div>
        
    )
};

export default ImageLinkForm;