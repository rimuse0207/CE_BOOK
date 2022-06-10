import React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox/ContentBox';
import SearchBarMainPage from './SearchBar/SearchBarMainPage';

const BodyMainPageContainer = styled.div`
    .BodyMainPageContainer {
    }
    .BodyMainPage_Content {
        background-color: #fff;
        margin-top: 10px;
    }
`;

const BodyMainPage = () => {
    return (
        <BodyMainPageContainer>
            <div className="BodyMainPageContainer">
                <div className="BodyMainPage_Search">
                    <SearchBarMainPage></SearchBarMainPage>
                </div>
                <div className="BodyMainPage_Content">
                    <ContentBox></ContentBox>
                </div>
            </div>
        </BodyMainPageContainer>
    );
};

export default BodyMainPage;
