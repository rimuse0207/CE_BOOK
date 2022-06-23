import React, { useState } from 'react';
import axios from 'axios';
import './SignInForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginCheckRedux } from '../../../Models/LoginCheckRedux/LoginCheckRedux';

const LoginMainPage = ({ setLoginCheck }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const { HeaderTokenNames } = useParams();
    const LoginCheckData = useSelector(state => state.LoginCheck);
    const [id, setIds] = useState(localStorage.getItem('id') ? localStorage.getItem('id') : '');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(HeaderTokenNames);
        if (HeaderTokenNames) {
            getLoginInfoData();
        } else {
            return;
        }
    }, [HeaderTokenNames]);

    const getLoginInfoData = async () => {
        try {
            const SendDataLoginInfoData = await axios.get(`${process.env.REACT_APP_API_URL}/CeBook_app_server/loginInfoData`, {
                headers: { HeaderTokenNames },
            });
            if (SendDataLoginInfoData.data.dataSuccess) {
                await dispatch(LoginCheckRedux(SendDataLoginInfoData.data.loginData));
            } else {
            }
            console.log(SendDataLoginInfoData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const loginCheck = await axios.post(`${process.env.REACT_APP_API_URL}/CeBook_app_server/loginCheck`, {
                id: id,
                password: password,
            });
            console.log(loginCheck);
            if (!loginCheck.data.LoginCheck) {
                alert(loginCheck.data.message);
                setPassword('');
            } else {
                // sessionStorage.setItem('DHKS_TOKEN', loginCheck.data.token);
                // localStorage.setItem('id', loginCheck.data.data.id);
                // localStorage.setItem('loginOutCheck', 'conneting');
                await dispatch(LoginCheckRedux(loginCheck.data.loginData));
                // await setLoginCheck(true);
                // if (loginCheck.data.changePassword) {
                //     history.push('/');
                // }
            }
        } catch (error) {
            console.log(error);
            alert('Login Error 서버 차단');
        }
    };

    return (
        <div>
            <div className="appAside">
                <div className="logo_center">
                    <img src="/test.jpg" width="100%"></img>
                </div>
            </div>
            <div className="appForm">
                <div className="formCenter">
                    <form className="formFields" onSubmit={event => handleSubmit(event)}>
                        <h1>Portal Site</h1>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                                E-Mail Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="formFieldInput"
                                placeholder="Enter your email"
                                name="email"
                                value={id}
                                onChange={e => setIds(e.target.value)}
                            />
                        </div>

                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="formField">
                            <button className="formFieldButton">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginMainPage;
