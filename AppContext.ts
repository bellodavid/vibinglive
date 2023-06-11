import React from 'react';

const context = {

    songId: null,
    songUri: null,
    SongImg: null,
    songArtist: null,
    setSongArtist: (artist) => {},
    setSongImg: (img) => {},
    setSongId: (id) => {},
    setSongUri: (uri) => {},
}

export const AppContext = React.createContext()