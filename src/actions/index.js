import types from './types';

// Action creator

export const selectSong = (song) => {
    //return an action
    return {
        type: types.SONG_SELECTED,
        payload: song
    };
};
