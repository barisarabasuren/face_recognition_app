import FaceRecognition from './faceRecognition/FaceRecognition';
import './urlInput.css';

const UrlInput = ( {onInputChange, onButtonSubmit, imageUrl } ) => {
    return(
        <div>
            <p className="f4 fw4 center">
                {'This Magic Brain will detect faces in your pictures'}
            </p>
            <form onSubmit= {onButtonSubmit}>
                <input
                    className="db w-60 f6 pa2 center mb4" 
                    type='text' 
                    onChange={onInputChange}
                />
                <button type='submit' className='db w-30 fw f4 pa2 ba pointer button center'>
                    <span>Detact</span>
                </button>
            </form>
            <FaceRecognition imageUrl={imageUrl}/>
        </div>          
    )
}

export default UrlInput;