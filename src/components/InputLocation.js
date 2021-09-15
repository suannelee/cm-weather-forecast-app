import React from 'react';
import './inputLocation.scss';

//https://blog.bitsrc.io/understanding-ref-forwarding-in-react-80accd93ed74
const InputLocation = React.forwardRef((props, ref) => { 
    return (
        <input 
            className="inputBox"
            placeholder="Enter Location"
            ref={ref}
            onKeyPress={props.onKeyPress}/>
    )
    
});

export default InputLocation;