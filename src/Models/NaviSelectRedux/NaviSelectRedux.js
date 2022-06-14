const NaviSelectData_GET = 'NaviSelectRedux/NaviSelectData_GET';

export const NaviSelectCheckRedux = diff => ({
    type: NaviSelectData_GET,
    payload: diff,
});

const initialState = {
    NaviClickTitle: '공용',
};

function NaviSelectCheck(state = initialState, action) {
    switch (action.type) {
        case NaviSelectData_GET:
            return { ...state, NaviClickTitle: action.payload };

        default:
            return state;
    }
}

export default NaviSelectCheck;
