import Rank from './rank/Rank';
import Animation from './animation/Animation';
import UrlInput from './urlInput/UrlInput';

const ImageLinkForm = ( {onInputChange, onSubmit, renderedImage, box, user } ) => {
    return(
        <div>
            <div className="mw8 center bg-white br3 pa4 ba b--black-10 tc shadow-3">
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