import React from 'react';
// X color : 545454
// O color : efecd5
const Square = ({ handleClick, value }) => {
    return (
        <div onClick={handleClick} className='square'>
            {value}
        </div>
    );
};

export default Square;