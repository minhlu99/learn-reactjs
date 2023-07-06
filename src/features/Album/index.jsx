import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nhạc chữ Buồn',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/1/3/b41377b4f7b65faa4a4884b6bb529506.jpg'
        },
        {
            id: 2,
            name: 'Nghe là Yêu',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/4/e/7/14e7559ebd1dfc6684761f157746106a.jpg'
        },
        {
            id: 3,
            name: 'Vitamin tích cực',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/4/8/4948b1e194a4f26f34959d23c43ac5d8.jpg'
        },
        {
            id: 4,
            name: 'V-Pop Vui Tươi',
            thumbnaiURL: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/d/741d049eb93a2a8214f75ff239e9195f.jpg'
        },
    ]

    return (
        <div>
            <h3>Năng Lượng Tích Cực</h3>
            <AlbumList props = {albumList} />
        </div>
    );
}

export default AlbumFeature;