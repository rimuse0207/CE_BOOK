import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

const LoaderMainPageMainDivBox = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;

    .sweet-loading {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #0a0ef3;
`;

const LoaderMainPage = ({ loading }) => {
    return (
        <LoaderMainPageMainDivBox>
            <div className="sweet-loading">
                <PulseLoader color={'#0a0ef3'} loading={loading} css={override} size={30} />
            </div>
        </LoaderMainPageMainDivBox>
    );
};

export default LoaderMainPage;
