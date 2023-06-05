import axios from 'axios';

import routes from './routes';

const MethodType = {
    POST: 'post',
    GET: 'get'
};

class Api {
    tokenGetter = () => {}

    auth(creditals) {
        return this.call(routes.loginPath(), MethodType.POST, creditals, false);
    }

    getChats(){
        return this.call(routes.chatsPath(), MethodType.GET, null);
    }

    async call(url, method, data, needAddToken = true) {
        const headers = {};
        if (needAddToken) {
            const token = this.tokenGetter();
            if (token)
                headers['Authorization']  = `Bearer ${token}`;
        }
        const response = await axios({
            url,
            method,
            headers,
            data
        });

        return response.data;
    }

    setTokenGetter(tokenGetter){
        this.tokenGetter = tokenGetter;
    }
}

const api = new Api();
export default api;