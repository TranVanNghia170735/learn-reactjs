import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeatures.propTypes = {

};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhac Hoa Thinh Hanh",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/5/b/3/65b3e0f109eca74cc1f3749b9308ed0f.jpg'
        },
        {
            id: 2,
            name: "Rap Viet Nghe La Nghien",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/6/f/6/76f6f78b0b7d65c2725b7d44bad1ceee.jpg'
        },
        {
            id: 3,
            name: "Trao Luu Nhac Hot",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/4/7/a/147a47c66139a10446f2e81cf84aa86c.jpg'
        },
    ];

    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;