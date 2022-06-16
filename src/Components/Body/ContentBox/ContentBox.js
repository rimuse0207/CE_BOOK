import React, { useState } from 'react';
import styled from 'styled-components';
import ContentList from './ContentList/ContentList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { InfoGet } from '../../../Api/ContentAPI/ContentAPI';
import { ClicksNextFileData } from '../../../Models/NaviSelectRedux/NaviSelectRedux';
import LoaderMainPage from '../../Loader/LoaderMainPage';

const ContentBoxMainDivBox = styled.div`
    min-height: 70vh;
    .ContentBox_MainList_box {
        border: 1px dashed lightgray;
        margin: 20px;
        padding: 10px;
        height: 100%;
    }
    #info-block {
        padding: 30px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    #info-block section {
        border: 2px dashed lightgray;
        padding-bottom: 50px;
    }

    .file-marker > div {
        padding: 0 2px;
        min-height: 100vh;
        margin-top: -2.5em;
        .box-title {
            background: white none repeat scroll 0 0;
            display: inline-block;
            padding: 0 1px;
            margin-left: 1em;
            font-size: 3em;
            font-weight: bolder;
        }
    }
    .ContentBox_NextContentShowButton {
        button {
            border: 1px solid black;
            text-align: center;
            width: 300px;
            height: 40px;
            border-radius: 30px;
            font-size: 1.3em;
            font-weight: bolder;
            :hover {
                cursor: pointer;
            }
        }
        width: 300px;
        margin: 0 auto;
        margin-top: 50px;
    }
`;

const ContentBox = () => {
    const NaviClicksData = useSelector(state => state.NaviSelectCheck.NaviClickTitle);
    const Pagenumbering = useSelector(state => state.NaviSelectCheck.Pagenumber);
    const SearchData = useSelector(state => state.SearchSelectCheck.SearchName);
    const dispatch = useDispatch();
    const [PDFData, setPDFData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (NaviClicksData) {
            setLoading(true);
            GetPDFFileData();
        }
    }, [NaviClicksData, SearchData]);

    const GetPDFFileData = async () => {
        try {
            const getPDFFileDatas = await InfoGet(`${process.env.REACT_APP_API_URL}/CeBook_app_server/navi_data`, NaviClicksData, 0);
            if (getPDFFileDatas.data.dataSuccess) {
                console.log(getPDFFileDatas);
                setPDFData(getPDFFileDatas.data.root_public);
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            } else {
                alert('에러');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContentBoxMainDivBox>
            <aside id="info-block">
                <section class="file-marker">
                    <div>
                        <div class="box-title">{NaviClicksData}</div>
                        <div class="box-contents">
                            <div id="audit-trail">
                                {PDFData.map((list, i) => {
                                    return Pagenumbering > i ? (
                                        <ContentList
                                            link_title={list.link_title}
                                            link_change_name={list.link_change_name}
                                            link_write_date={list.link_write_date}
                                            link_write_name={list.link_write_name}
                                        ></ContentList>
                                    ) : (
                                        ''
                                    );
                                })}
                            </div>
                        </div>
                        <div className="ContentBox_NextContentShowButton">
                            {PDFData.length < 5 || PDFData.length <= Pagenumbering ? (
                                <></>
                            ) : (
                                <button onClick={() => dispatch(ClicksNextFileData())}>더보기</button>
                            )}
                        </div>
                    </div>
                </section>
            </aside>
            <LoaderMainPage loading={loading}></LoaderMainPage>
        </ContentBoxMainDivBox>
    );
};

export default ContentBox;
