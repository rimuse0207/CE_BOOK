import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox/ContentBox';
import SearchBarMainPage from './SearchBar/SearchBarMainPage';
import { toast } from '../ToastMessage/ToastManager';
const BodyMainPageContainer = styled.div`
    .BodyMainPageContainer {
    }
    .BodyMainPage_Content {
        background-color: #fff;
        margin-top: 10px;
    }
`;

const BodyMainPage = () => {
    useEffect(() => {
        toast.show({
            title: `ID 또는 패스워드를 확인 해 주세요.`,
            successCheck: false,
            duration: 3000,
        });
    }, []);
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
