import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import fetchChats from '../thunks/fetchChats';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();
const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchChats.fulfilled, (state, { payload: { messages } }) => {
            messagesAdapter.addMany(state, messages);
        });
    }
});

export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;