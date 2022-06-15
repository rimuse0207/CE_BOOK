import React from 'react';
import Tree from 'react-animated-tree-v2';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NaviSelectCheckRedux } from '../../Models/NaviSelectRedux/NaviSelectRedux';

const NavigationMainPageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    background-color: #fff;
    min-height: 70vh;
`;
const treeStyles = {
    fontSize: '12px',
};
const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle',
};

const NavigationMainPage = () => {
    const dispatch = useDispatch();

    const handleCllicksNaviMenu = clickMenu => {
        try {
            dispatch(NaviSelectCheckRedux(clickMenu));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav>
            <h2 style={{ marginLeft: '40px' }}>메뉴</h2>
            <NavigationMainPageContainer>
                <Tree
                    content="공용"
                    // type="Fruit"
                    open
                    visible
                    onClick={() => handleCllicksNaviMenu('공용')}
                    itemId={'공용'}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    style={treeStyles}
                >
                    <Tree
                        content="1.CE Work Flow"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('CE Work Flow')}
                        itemId={'CE Work Flow'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                    <Tree
                        content="2.TTS_(Trouble Tracking System)"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('TTS_(Trouble Tracking System)')}
                        itemId={'TTS_(Trouble Tracking System)'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    >
                        <Tree
                            content="TTS_INPUT 내용 감상 및 피드백"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('TTS_INPUT 내용 감상 및 피드백')}
                            itemId={'TTS_INPUT 내용 감상 및 피드백'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                    </Tree>
                    <Tree
                        content="3.Tech tool등록 방법"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('Tech tool등록 방법')}
                        itemId={'Tech tool등록 방법'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                    <Tree
                        content="4.용도설명서 작성 요령서"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('용도설명서 작성 요령서')}
                        itemId={'용도설명서 작성 요령서'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                </Tree>
                <Tree
                    content="Grinder"
                    // type="Fruit"
                    open
                    visible
                    onClick={() => handleCllicksNaviMenu('Grinder')}
                    itemId={'Grinder'}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    style={treeStyles}
                >
                    <Tree
                        content="1.기초자료"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('기초자료')}
                        itemId={'기초자료'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                    <Tree
                        content="2.매뉴얼"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('매뉴얼')}
                        itemId={'매뉴얼'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                    <Tree
                        content="3.절차서"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('절차서')}
                        itemId={'절차서'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    ></Tree>
                    <Tree
                        content="4.One point lesson"
                        open
                        visible
                        onClick={() => handleCllicksNaviMenu('One point lesson')}
                        itemId={'One point lesson'}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    >
                        <Tree
                            content="One Point 대전(2019.09)"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('One Point 대전(2019.09)')}
                            itemId={'One Point 대전(2019.09)'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                        <Tree
                            content="One Point 대전(2019.10)"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('One Point 대전(2019.10)')}
                            itemId={'One Point 대전(2019.10)'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                        <Tree
                            content="One Point 대전(2019.11)"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('One Point 대전(2019.11)')}
                            itemId={'One Point 대전(2019.11)'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                        <Tree
                            content="One Point 대전(2020.01)"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('One Point 대전(2020.01)')}
                            itemId={'One Point 대전(2020.01)'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                        <Tree
                            content="One Point 대전(2020.02)"
                            open
                            visible
                            onClick={() => handleCllicksNaviMenu('One Point 대전(2020.02)')}
                            itemId={'One Point 대전(2020.02)'}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                        />
                    </Tree>
                </Tree>
                <Tree
                    content="Dicer"
                    // type="Fruit"
                    open
                    visible
                    onClick={() => handleCllicksNaviMenu('Dicer')}
                    itemId={'Dicer'}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    style={treeStyles}
                >
                    <Tree content="1.기초자료">
                        <Tree content="기초자료" />
                        <Tree content="장비소개자료" />
                    </Tree>
                    <Tree content="2.장비매뉴얼">
                        <Tree content="DAD3230" />
                        <Tree content="DAD6361" />
                        <Tree content="DAD6361HC" />
                        <Tree content="DAD6362" />
                        <Tree content="DAD6750" />
                        <Tree content="DAD6860" />
                    </Tree>
                    <Tree content="3.작업절차서">
                        <Tree content="DAD" />
                        <Tree content="DFD6361" />
                        <Tree content="DFD6361HC" />
                        <Tree content="DFD6362" />
                        <Tree content="DPR" />
                    </Tree>
                    <Tree content="4.One point lesson"></Tree>
                </Tree>
                <Tree
                    content="Laser"
                    // type="Fruit"
                    open
                    visible
                    onClick={() => handleCllicksNaviMenu('Laser')}
                    itemId={'Laser'}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId)}
                    style={treeStyles}
                >
                    <Tree content="Contents">
                        <Tree content="Seeds" />
                    </Tree>
                </Tree>
            </NavigationMainPageContainer>
        </nav>
    );
};

export default NavigationMainPage;
