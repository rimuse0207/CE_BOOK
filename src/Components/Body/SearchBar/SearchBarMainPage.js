import React from 'react';
import styled from 'styled-components';

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
    return (
        <SearchBarMainPageContainer>
            <form>
                <input placeholder="검색" />
            </form>
        </SearchBarMainPageContainer>
    );
};

export default SearchBarMainPage;
