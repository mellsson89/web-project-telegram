import React, {useEffect, useState} from 'react';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';
import {authTelegram, tokenChange} from "../../service/api-app";
import {Redirect} from "react-router-dom";
import styled from './styles/login.module.scss';

const LoginPage = () => {

    const [token, setToken] = useState(null);
    const [user,setUser] = useState(null)

    useEffect(() => {
        const value = localStorage.getItem('token');
        const data = localStorage.getItem('token');
        if(value && data) {
            const token =  JSON.parse(value);
            const user = JSON.parse(data);
            tokenChange.set(token);
            setToken(token);
            setUser(user);
        }
    }, []);

    if (token && user) return <Redirect to={"/account"} />

    return (
            <div className={styled.container_login}>
                <h4 className={styled.title}>Авторизацiя</h4>
                <TLoginButton
                    botName="mellsson_user_bot"
                    buttonSize={TLoginButtonSize.Large}
                    lang="ua"
                    usePic={true}
                    cornerRadius={20}
                    onAuthCallback={async (user) => {
                        try {
                            const {data, token} = await authTelegram(user);


                            if(data && token) {
                                localStorage.setItem('token', JSON.stringify(token));
                                localStorage.setItem('data', JSON.stringify(data));
                                tokenChange.set(token);
                                setToken(token);
                                setUser(data);
                            }

                        }

                        catch (e) {
                            console.log(e.message)
                        }
                    }}
                    requestAccess={'write'}
                />
            </div>
    );
};

export default LoginPage;