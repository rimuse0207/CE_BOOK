const NaviSelectData_GET = 'NaviSelectRedux/NaviSelectData_GET';
const ClickNextFileData_GET = 'ClickNextFileDataRedux/ClickNextFileData_GET';
export const NaviSelectCheckRedux = (indexs, texts) => ({
    type: NaviSelectData_GET,
    payload: { indexs, texts },
});
export const ClicksNextFileData = () => ({
    type: ClickNextFileData_GET,
});

const initialState = {
    NaviClickTitle: '공용',
    NaviClickIndexs: 1,
    Pagenumber: 5,
};

function NaviSelectCheck(state = initialState, action) {
    switch (action.type) {
        case NaviSelectData_GET:
            return { ...state, NaviClickTitle: action.payload.texts, NaviClickIndexs: action.payload.indexs, Pagenumber: 5 };

        case ClickNextFileData_GET:
            return { ...state, Pagenumber: state.Pagenumber + 5 };
        default:
            return state;
    }
}

export default NaviSelectCheck;
