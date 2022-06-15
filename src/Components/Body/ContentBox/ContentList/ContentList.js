import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import { TbEyeCheck } from 'react-icons/tb';
import { AiFillHeart } from 'react-icons/ai';
const ContentListMainDivBox = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    border-bottom: 1px dashed lightgray;
    padding-bottom: 20px;

    .ContentList_Main_Container {
        ::after {
            clear: both;
            display: block;
            content: '';
        }
        height: 240px;
        .ContentList_Left_Image {
            float: left;
            width: 350px;
            height: 100%;
            .ContentList_Left_Image_Content {
                height: 100%;
                overflow: hidden;
            }
        }
        .ContentList_Right_ContentText {
            position: relative;
            float: right;
            width: calc(100% - 420px);
            margin-right: 30px;
            height: 100%;
            p {
                font-size: 16px;
                width: 80%;
            }
            .ConentList_hashTag {
                color: #368;
                position: absolute;
                bottom: 20px;
            }
            .ContentList_DetailMore {
                position: absolute;
                bottom: 0px;
                color: blue;
                :hover {
                    cursor: pointer;
                    color: #368;
                }
            }
            .ContanteList_HeartCount {
                position: absolute;
                top: 0px;
                left: 200px;
                :hover {
                    cursor: pointer;
                }
            }
            .ContanteList_ShowCount {
                position: absolute;
                top: 0px;
                right: 0px;
                color: gray;
            }
        }
    }
`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ContentList = ({ link_title, link_change_name }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <ContentListMainDivBox>
            <div>
                <div className="ContentList_Main_Container">
                    <div className="ContentList_Left_Image">
                        <div className="ContentList_Left_Image_Content">
                            <Document
                                file={`${process.env.REACT_APP_API_URL}/CEBook/${link_change_name}`}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page
                                    className="rqwrwqr"
                                    height={document.getElementsByClassName('PdfDiv')[0]?.clientHeight * 0.8 ?? 150}
                                    key={1}
                                    pageNumber={1}
                                    renderAnnotationLayer={false}
                                />
                            </Document>
                        </div>
                    </div>
                    <div className="ContentList_Right_ContentText">
                        <div>
                            <div>등록자 : 유성재 | 2022-05-02</div>
                            <h2 style={{ fontSize: '2em', marginTop: '0px' }}>{link_title}</h2>
                            <div>
                                {/* <p>
                                    프로세스 자동화를 피해가는 길은 없습니다. 디지털화 전략을 추구하는 기업이라면 더욱 그렇습니다. 그렇게
                                    보면 12개월 내에 RPA에 투자할 것이라고 답한 기업의 비율이 70%에 육박하는 것도 당연합니다. 이중 약 40%는
                                    이미 RPA에 100만 유로이상의 예산을 책정했습니다.
                                </p> */}
                            </div>
                            <div className="ConentList_hashTag">
                                <span>#Grinder </span>
                                <span>#Laser </span>
                                <span>#Dicer </span>
                                <span>#공용 </span>
                                <span>#장비 </span>
                            </div>
                            <div
                                className="ContentList_DetailMore"
                                onClick={() => window.open(`/ShowPdf/${link_change_name}`, 'AfterOT', 'width=1200, height=900')}
                            >
                                자세히보기
                            </div>
                            {/* <div className="ContanteList_HeartCount">
                                <span style={{ color: 'red' }}>
                                    <AiFillHeart></AiFillHeart>
                                </span>
                                <span>100</span>
                            </div> */}
                            <div className="ContanteList_ShowCount">
                                <span>
                                    <TbEyeCheck></TbEyeCheck>
                                </span>
                                {/* <span>{ShowCount}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentListMainDivBox>
    );
};

export default ContentList;
