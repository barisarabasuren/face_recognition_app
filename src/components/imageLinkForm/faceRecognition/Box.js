import './box.css';

const Box = ({ styleValue}) => {
    return (
        <div className='bounding_box' style={styleValue}></div>
    )
};

export default Box;