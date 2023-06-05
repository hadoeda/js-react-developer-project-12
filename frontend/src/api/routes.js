const apiPath = '/api/v1';

const routes = {
    loginPath: () => [apiPath, 'login'].join('/'),
    chatsPath: () => [apiPath, 'data'].join('/'),
};
export default routes;