import { createSlice } from '@reduxjs/toolkit';

import fetchChats from '../thunks/fetchChats';

const initialState = {
    id: 0
};
const currentChannelSlice = createSlice({
    name: 'currentChannel',
    initialState,
    reducers: {
        setCurrentChannel(state, id){
            state.currentChannel = id;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChats.fulfilled, (state, { payload: { currentChannelId } }) => {
            state.id = currentChannelId;
        });
    }
});

export const { actions } = currentChannelSlice;
export default currentChannelSlice.reducer;