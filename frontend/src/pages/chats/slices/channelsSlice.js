import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import fetchChats from '../thunks/fetchChats';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState();
const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchChats.fulfilled, (state, { payload: { channels } }) => {
            channelsAdapter.addMany(state, channels);
        });
    }
});

export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;