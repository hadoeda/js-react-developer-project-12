import { useSelector } from 'react-redux';

import { selectors } from '../slices/messagesSlice';

export default function Messages() {
    const currentChannelId = useSelector(state => state.currentChannel.id);
    const messages = useSelector(state => selectors.selectById(state, currentChannelId));
    return messages && messages.map(m => (<div key={m.id}>{m.text}</div>));
}