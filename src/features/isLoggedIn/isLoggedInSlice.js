import { createSlice } from '@reduxjs/toolkit';

import goku from '../../images/pfp/gokupfp.png';

const isLoggedIn = createSlice({
    name: 'isLoggedIn',
    initialState: {
        loggedIn: false,
        name: '',
        pfp: goku,
        watchlist: []
    },
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true;
            state.name = action.payload;
        },
        changePfp: (state, action) => {
            state.pfp = action.payload;
        },
        addAnimeToWatchlist: (state, action) => {
            state.watchlist = [...state.watchlist, action.payload];
        },
        removeAnimeFromWatchlist: (state, action) => {
            state.watchlist = state.watchlist.filter(anime => anime.title !== action.payload.title);
        }
    }
})

export default isLoggedIn.reducer;
export const { logIn } = isLoggedIn.actions;
export const { changePfp } = isLoggedIn.actions;
export const { addAnimeToWatchlist } = isLoggedIn.actions;
export const { removeAnimeFromWatchlist } = isLoggedIn.actions;
export const selectIsLoggedIn = state => state.loggedIn.loggedIn;
export const selectUsername = state => state.loggedIn.name;
export const selectPfp = state => state.loggedIn.pfp;
export const selectWatchlist = state => state.loggedIn.watchlist;
