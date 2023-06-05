import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../api';

export default createAsyncThunk(
    'chats/fetchChats',
    async () => {
        const data = await api.getChats();
        console.log(data);
        return data;
    }
);