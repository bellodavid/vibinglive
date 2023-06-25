import React from 'react';

const context = {

    songId: null,
    songUri: null,
    SongImg: null,
    savedTrack: null,
    songArtist: null,
    albumImage: null,
    progress: null,
    setSongArtist: (artist) => {},
    setSongImg: (img) => {},
    setSongId: (id) => {},
    setSongUri: (uri) => {},
    setSavedTrack: (savedTrack) => {},
    setProgress: (progress) => {},
    setAlbumImage: (albumImage) => {},
}

export const AppContext = React.createContext()