import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SearchSelectCheckRedux } from '../../../Models/SearchSelectRedux/SearchSelectRedux';
import { NaviSelectCheckRedux } from '../../../Models/NaviSelectRedux/NaviSelectRedux';
const SearchBarMainPageContainer = styled.div`
    height: 45px;
    form {
        width: 100%;
        height: 100%;

        input {
            border: 2px solid lightgray;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            padding-left: 20px;
            font-size: 1.3em;
            :focus {
                outline: none;
                border-radius: 5px;
                border: 2px solid gray;
            }
        }
    }
`;

const SearchBarMainPage = () => {
    const dispatch = useDispatch();
    const SearchData = useSelector(state => state.SearchSelectCheck.SearchName);
    const [SearchNames, setSearchNames] = useState('');
    const handleSearchData = async e => {
        e.preventDefault();
        await dispatch(SearchSelectCheckRedux(SearchNames));
        await dispatch(NaviSelectCheckRedux('검색'));
    };

    return (
        <SearchBarMainPageContainer>
            <form onSubmit={e => handleSearchData(e)}>
                <input placeholder="검색" value={SearchNames} onChange={e => setSearchNames(e.target.value)} />
            </form>
        </SearchBarMainPageContainer>
    );
};

export default SearchBarMainPage;
