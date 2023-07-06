import React from 'react';
import PropTypes from 'prop-types';

Items.propTypes = {
    
};

function Items({props}) {
    return (
        <div>
            <h3 onClick={() => (console.log(props.title))}>{props.title}</h3>
            <img src={props.image_url} alt={props.tittle} />
            <p>{props.description}</p>
        </div>
    );
}

export default Items;