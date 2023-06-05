import { useSelector } from 'react-redux';

import { selectors } from '../slices/channelsSlice';

export default function Channels() {
    const channels = useSelector(selectors.selectAll);
    const currentChannel = useSelector(state => state.currentChannel);

    const getStyle = id => ({fontWeight: id === currentChannel.id ? 'bold': 'normal'});
    return (
        <ul>
            {channels.map(({ name, id }) => (<li key={id} style={getStyle(id)}>{name}</li>))}
        </ul>
    );
}