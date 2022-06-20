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

    const handleCllicksNaviMenu = (clickMenu, DatasName) => {
        try {
            dispatch(NaviSelectCheckRedux(clickMenu, DatasName));
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
                    // onClick={() => handleCllicksNaviMenu('공용')}
                    itemId={1}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId, '공용')}
                    style={treeStyles}
                >
                    <Tree
                        content="1.CE Work Flow"
                        open
                        visible
                        onClick={console.log}
                        itemId={5}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, 'CE Work Flow')}
                    ></Tree>
                    <Tree
                        content="2.TTS_(Trouble Tracking System)"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('TTS_(Trouble Tracking System)')}
                        itemId={6}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, 'TTS_(Trouble Tracking System)')}
                    >
                        <Tree
                            content="TTS_INPUT 내용 감상 및 피드백"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('TTS_INPUT 내용 감상 및 피드백')}
                            itemId={9}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'TTS_INPUT 내용 감상 및 피드백')}
                        />
                    </Tree>
                    <Tree
                        content="3.Tech tool등록 방법"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('Tech tool등록 방법')}
                        itemId={7}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, 'Tech tool등록 방법')}
                    ></Tree>
                    <Tree
                        content="4.용도설명서 작성 요령서"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('용도설명서 작성 요령서')}
                        itemId={8}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '용도설명서 작성 요령서')}
                    ></Tree>
                </Tree>
                <Tree
                    content="Grinder"
                    // type="Fruit"
                    open
                    visible
                    // onClick={() => handleCllicksNaviMenu('Grinder')}
                    itemId={2}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId, 'Grinder')}
                    style={treeStyles}
                >
                    <Tree
                        content="1.기초자료"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('기초자료')}
                        itemId={10}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '기초자료')}
                    ></Tree>
                    <Tree
                        content="2.매뉴얼"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('매뉴얼')}
                        itemId={11}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '매뉴얼')}
                    ></Tree>
                    <Tree
                        content="3.절차서"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('절차서')}
                        itemId={12}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '절차서')}
                    ></Tree>
                    <Tree
                        content="4.One point lesson"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('One point lesson')}
                        itemId={13}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One point lesson')}
                    >
                        <Tree
                            content="One Point 대전(2019.09)"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('One Point 대전(2019.09)')}
                            itemId={14}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One Point 대전(2019.09)')}
                        />
                        <Tree
                            content="One Point 대전(2019.10)"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('One Point 대전(2019.10)')}
                            itemId={15}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One Point 대전(2019.10)')}
                        />
                        <Tree
                            content="One Point 대전(2019.11)"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('One Point 대전(2019.11)')}
                            itemId={16}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One Point 대전(2019.11)')}
                        />
                        <Tree
                            content="One Point 대전(2020.01)"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('One Point 대전(2020.01)')}
                            itemId={17}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One Point 대전(2020.01)')}
                        />
                        <Tree
                            content="One Point 대전(2020.02)"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('One Point 대전(2020.02)')}
                            itemId={18}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One Point 대전(2020.02)')}
                        >
                            <Tree
                                content="판교"
                                open
                                visible
                                // onClick={() => handleCllicksNaviMenu('판교')}
                                itemId={36}
                                onItemClick={itemId => handleCllicksNaviMenu(itemId, '판교')}
                            ></Tree>
                            <Tree
                                content="아산"
                                open
                                visible
                                // onClick={() => handleCllicksNaviMenu('아산')}
                                itemId={37}
                                onItemClick={itemId => handleCllicksNaviMenu(itemId, '아산')}
                            ></Tree>
                        </Tree>
                    </Tree>
                </Tree>
                <Tree
                    content="Dicer"
                    open
                    visible
                    // onClick={() => handleCllicksNaviMenu('Dicer')}
                    itemId={3}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId, 'Dicer')}
                    style={treeStyles}
                >
                    <Tree
                        content="1.기초자료"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('기초자료')}
                        itemId={19}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '기초자료')}
                        style={treeStyles}
                    >
                        <Tree
                            content="기초자료"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('기초자료')}
                            itemId={23}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, '기초자료')}
                            style={treeStyles}
                        />
                        <Tree
                            content="장비소개자료"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('장비소개자료')}
                            itemId={24}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, '장비소개자료')}
                            style={treeStyles}
                        />
                    </Tree>
                    <Tree
                        content="2.장비매뉴얼"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('장비매뉴얼')}
                        itemId={20}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '장비매뉴얼')}
                        style={treeStyles}
                    >
                        <Tree
                            content="DAD3230"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD3230')}
                            itemId={25}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD3230')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DAD6361"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD6361')}
                            itemId={26}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD6361')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DAD6361HC"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD6361HC')}
                            itemId={27}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD6361HC')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DAD6362"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD6362')}
                            itemId={28}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD6362')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DAD6750"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD6750')}
                            itemId={29}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD6750')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DAD6860"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD6860')}
                            itemId={30}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD6860')}
                            style={treeStyles}
                        />
                    </Tree>
                    <Tree
                        content="3.작업절차서"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('작업절차서')}
                        itemId={21}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, '작업절차서')}
                        style={treeStyles}
                    >
                        <Tree
                            content="DAD"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DAD')}
                            itemId={31}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DAD')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DFD6361"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DFD6361')}
                            itemId={32}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DFD6361')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DFD6361HC"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DFD6361HC')}
                            itemId={33}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DFD6361HC')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DFD6362"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DFD6362')}
                            itemId={34}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DFD6362')}
                            style={treeStyles}
                        />
                        <Tree
                            content="DPR"
                            open
                            visible
                            // onClick={() => handleCllicksNaviMenu('DPR')}
                            itemId={35}
                            onItemClick={itemId => handleCllicksNaviMenu(itemId, 'DPR')}
                            style={treeStyles}
                        />
                    </Tree>
                    <Tree
                        content="4.One point lesson"
                        open
                        visible
                        // onClick={() => handleCllicksNaviMenu('One point lesson')}
                        itemId={22}
                        onItemClick={itemId => handleCllicksNaviMenu(itemId, 'One point lesson')}
                        style={treeStyles}
                    ></Tree>
                </Tree>
                <Tree
                    content="Laser"
                    // type="Fruit"
                    open
                    visible
                    // onClick={() => handleCllicksNaviMenu('Laser')}
                    itemId={4}
                    onItemClick={itemId => handleCllicksNaviMenu(itemId, 'Laser')}
                    style={treeStyles}
                >
                    <Tree content="1.기초자료">
                        <Tree content="2.매뉴얼" />
                        <Tree content="3.절차서" />
                        <Tree content="4.One point lesson" />
                    </Tree>
                </Tree>
            </NavigationMainPageContainer>
        </nav>
    );
};

export default NavigationMainPage;
