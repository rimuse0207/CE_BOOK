const LoginCheckRedux_GET = 'LoginCheckRedux/LoginCheckRedux_GET';
const LogoutRedux_GET = 'LogoutRedux/LogoutRedux_GET';

export const LoginCheckRedux = diff => ({
    type: LoginCheckRedux_GET,
    payload: diff,
});
export const LogoutRedux = () => ({
    type: LogoutRedux_GET,
});

const initialState = {
    LoginCheck: false,
    email: '',
    ip: '',
    name: '',
    LoginToken: '',
    refreshToken: '',
};

function LoginCheck(state = initialState, action) {
    console.log('actions', action);
    switch (action.type) {
        case LoginCheckRedux_GET:
            return (state = action.payload);
        case LogoutRedux_GET:
            return initialState;
        default:
            return state;
    }
}

export default LoginCheck;
