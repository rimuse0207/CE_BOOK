const SearchSelectData_GET = 'SearchSelectRedux/SearchSelectData_GET';

export const SearchSelectCheckRedux = diff => ({
    type: SearchSelectData_GET,
    payload: diff,
});

const initialState = {
    SearchName: '',
};

function SearchSelectCheck(state = initialState, action) {
    switch (action.type) {
        case SearchSelectData_GET:
            return { ...state, SearchName: action.payload };

        default:
            return state;
    }
}

export default SearchSelectCheck;
