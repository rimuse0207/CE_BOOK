import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import { TbEyeCheck } from 'react-icons/tb';
import { AiFillHeart } from 'react-icons/ai';
import { ClicksCEPDF } from '../../../../Api/ContentAPI/ContentAPI';
import { useSelector } from 'react-redux';
import { TbWritingSign } from 'react-icons/tb';
import { useEffect } from 'react';

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
                bottom: 0px;
                right: 0px;
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
    .Delete_HashTag {
        margin-left: 5px;
        margin-right: 5px;
    }
    .container_Delete_HashTag {
        margin-left: 5px;
        margin-right: 5px;
        :hover {
            cursor: pointer;
            color: red;
        }
    }
`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ContentList = ({ link_title, link_change_name, link_write_name, link_write_date, link_hash_tag, link_indexs, link_show_count }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const LoginCheckData = useSelector(state => state.LoginCheck.email);
    const [HashTagWrite, setHashTagWrite] = useState(false);
    const [HashTagInputData, setHashTagInputData] = useState('');
    const [HashTagData, setHashTagData] = useState(link_hash_tag);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDataClick = async (data, ListData) => {
        try {
            const getServerClicksSend = await ClicksCEPDF(
                `${process.env.REACT_APP_API_URL}/CeBook_app_server/ShowPdfClicks`,
                LoginCheckData,
                link_indexs
            );
            if (getServerClicksSend.data.dataSuccess) {
                window.open(`/ShowPdf/${data}`, 'AfterOT', 'width=1200, height=900');
            } else {
                alert('에러');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleHashTagAdd = async e => {
        try {
            e.preventDefault();

            const pdfData = {
                hash_tag_name: HashTagInputData,
                hash_tag_link_indexs: link_indexs,
            };
            const GetHashTagData = await ClicksCEPDF(
                `${process.env.REACT_APP_API_URL}/CeBook_app_server/AddHashTagData`,
                LoginCheckData,
                pdfData
            );
            if (GetHashTagData.data.dataSuccess) {
                setHashTagData(GetHashTagData.data.data);
                setHashTagWrite(false);
                setHashTagInputData('');
            } else {
                alert('해쉬 테그 등록 에러');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const hashtagDelete = async data => {
        try {
            const GetHashTagData = await ClicksCEPDF(
                `${process.env.REACT_APP_API_URL}/CeBook_app_server/HashTagDelete`,
                LoginCheckData,
                data
            );
            if (GetHashTagData.data.dataSuccess) {
                const deleteData = HashTagData.filter(item => {
                    return item.hash_tag_indexs === data.hash_tag_indexs ? '' : item;
                });
                setHashTagData(deleteData);
                setHashTagWrite(false);
            } else {
                alert('해쉬 삭제 에러');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(document.getElementById('iframe1').onload);
        console.log(document.getElementById('sizer'));
    }, []);

    return (
        <ContentListMainDivBox>
            <div>
                <div className="ContentList_Main_Container">
                    <div className="ContentList_Left_Image">
                        <div className="ContentList_Left_Image_Content">
                            {/* <Document
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
                            </Document> */}
                            <object
                                data={`${process.env.REACT_APP_API_URL}/CEBook/${link_change_name}#toolbar=0&navpane=0`}
                                type="application/pdf"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                cellSpacing="0"
                                allow=""
                                style={{ height: '100%', overflow: 'hidden' }}
                                id="iframe1"
                            >
                                <div>파일 오류입니다.</div>
                            </object>
                        </div>
                    </div>
                    <div className="ContentList_Right_ContentText">
                        <div>
                            <div>
                                등록자 : {link_write_name} | {link_write_date}
                            </div>
                            <h2 style={{ fontSize: '2em', marginTop: '0px' }}>{link_title}</h2>
                            <div>
                                {/* <p>
                                    프로세스 자동화를 피해가는 길은 없습니다. 디지털화 전략을 추구하는 기업이라면 더욱 그렇습니다. 그렇게
                                    보면 12개월 내에 RPA에 투자할 것이라고 답한 기업의 비율이 70%에 육박하는 것도 당연합니다. 이중 약 40%는
                                    이미 RPA에 100만 유로이상의 예산을 책정했습니다.
                                </p> */}
                            </div>
                            <div className="ConentList_hashTag">
                                {HashTagWrite ? (
                                    <div>
                                        <form onSubmit={e => handleHashTagAdd(e)}>
                                            <input
                                                placeholder="등록할 Hashtag 입력"
                                                value={HashTagInputData}
                                                onChange={e => setHashTagInputData(e.target.value)}
                                            ></input>
                                            <button>추가</button>
                                        </form>
                                        <div>
                                            {HashTagData.map((item, j) => {
                                                return item.hash_tag_writer_id === LoginCheckData ? (
                                                    <span
                                                        className="container_Delete_HashTag"
                                                        key={item.hash_tag_indexs}
                                                        onClick={() => hashtagDelete(item)}
                                                    >
                                                        {item.hash_tag_name}
                                                        <span className="Delete_HashTag">X</span>
                                                    </span>
                                                ) : (
                                                    <span className="container_Delete_HashTag" key={item.hash_tag_indexs}>
                                                        {item.hash_tag_name}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    HashTagData.map((item, j) => {
                                        return <span key={item.hash_tag_indexs}>#{item.hash_tag_name}</span>;
                                    })
                                )}
                            </div>
                            <div className="ContentList_DetailMore" onClick={() => handleDataClick(link_change_name)}>
                                자세히보기
                            </div>
                            <div className="ContanteList_HeartCount" onClick={() => setHashTagWrite(true)}>
                                {HashTagWrite ? (
                                    <></>
                                ) : (
                                    <div>
                                        <span style={{ color: 'black', fontSize: '20px' }}>
                                            <TbWritingSign></TbWritingSign>
                                        </span>
                                        <span>hashtag 작성</span>
                                    </div>
                                )}
                            </div>
                            <div className="ContanteList_ShowCount">
                                <span>
                                    <TbEyeCheck></TbEyeCheck>
                                </span>
                                <span>{link_show_count.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentListMainDivBox>
    );
};

export default ContentList;
