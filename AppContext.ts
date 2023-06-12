import React from 'react';

const context = {

    songId: null,
    songUri: null,
    SongImg: null,
    albumImage: null,
    songArtist: null,
    setSongArtist: (artist) => {},
    setSongImg: (img) => {},
    setSongId: (id) => {},
    setSongUri: (uri) => {},
    setAlbumImage: (albumImage) => {},
}

export const AppContext = React.createContext()