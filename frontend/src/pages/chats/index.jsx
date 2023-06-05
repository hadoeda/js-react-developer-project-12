import { Provider } from 'react-redux';

import store from './store';
import Chats from './components/chats';

export default function Preview(){
    return (
        <Provider store={store}>
            <Chats/>
        </Provider>
    );
}