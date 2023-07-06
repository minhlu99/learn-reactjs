import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
    props: PropTypes.array.isRequired,
};

function AlbumList({props}) {
    return (
        <ul className='album-list'>

            {props.map(prop => (
            <li key={prop.id}>
                <Album props = {prop}/>
            </li> ))}

        </ul>
    );
}

export default AlbumList;