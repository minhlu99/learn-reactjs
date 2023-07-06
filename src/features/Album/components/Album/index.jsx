import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
    props: PropTypes.object.isRequired,
};

function Album({props}) {
    return (
        <div className='album'>
            <div className='album__thumbnai'>
                <img src={props.thumbnaiURL} alt={props.name} />
            </div>
            <p className='album__name'>{props.name}</p>
        </div>
    );
}

export default Album;