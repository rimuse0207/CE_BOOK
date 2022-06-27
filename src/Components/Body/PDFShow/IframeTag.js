import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useEffect } from 'react';

const IframeTagMainDivBox = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    iframe {
        z-index: 100;
        /* pointer-events: none; */
    }
    .PrintBlock_WaterMark_top {
        position: absolute;
        /* font-size: 2em; */
        transform: rotate(-25deg);
        top: -200px;
        left: 700px;
        color: black;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        opacity: 0.3;
    }
`;

const IframeTag = () => {
    const LoginCheckData = useSelector(state => state.LoginCheck);
    const handleRef = useRef();

    useEffect(() => {
        // console.log(handleRef.contents());
    }, []);

    return (
        <IframeTagMainDivBox>
            <iframe
                ref={handleRef}
                src={`${process.env.REACT_APP_API_URL}/CEBook/aaaa01.pdf`}
                id="fraDisabled"
                style={{ width: '100%', height: '100%' }}
                controlsList="nodownload"
                onContextMenu={e => {
                    alert('클릭');
                    e.preventDefault();
                }}
                onload={window.disableContextMenu()}
                onMyLoad={window.disableContextMenu()}
            ></iframe>
        </IframeTagMainDivBox>
    );
};

export default IframeTag;
