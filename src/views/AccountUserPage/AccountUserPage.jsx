import React,{useState, useEffect} from 'react';
import {logoutTelegram, tokenChange} from "../../service/api-app";
import {Redirect} from "react-router-dom";
import styled from './styled/account.module.scss';
import MenuAccount from "../../components/MenuAccount";
import Modal from '../../components/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import {addSettingUser, findSettingUser,currentUser} from "../../service/api-app";

const AccountUserPage = () => {

    const [isAuth, setState] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [appId, setAppId] = useState('');
    const [appHash, setAppHash] = useState('');
    const [email, setEmail] = useState('');

    const data = JSON.parse(localStorage.getItem('data'));


    useEffect(() => {
        (async function () {
           const {data:{data}} =  await findSettingUser();
           if(data) {
               const {app_id, app_hash, email} = data;
               setAppId(app_id);
               setAppHash(app_hash);
               setEmail(email);
           }
        })();

    }, []);




    const onChangeAppId = (e) => {
        setAppId(e.currentTarget.value)
    }

    const onChangeAppHash = (e) => {
            setAppHash(e.currentTarget.value)

    }

    const onChangeEmail = (e) => {

            setEmail(e.currentTarget.value)

    }

    const handlerSubmit = async () => {
        try {
            const credential = {app_id:appId, app_hash:appHash, email:email};
            await addSettingUser(credential);
        }

        catch (e) {
            console.log(e.message)
        }

    }

    const toggleModal =() => {
        setShowModal(!showModal)
    }

    const logOut = async () => {

        try {
            await logoutTelegram();
            tokenChange.unset();
            localStorage.setItem('token', null);
            localStorage.setItem('data', null);
            toggleModal();
            setState(!isAuth);
        }

        catch (e) {
            console.log(e.message)
        }
    }



    if (!isAuth) return <Redirect to={"/login"} />
    return (
        <div>
            {showModal && <Modal onClose={setShowModal}>
                <div>
                    <p style={{fontSize:'22px', marginBottom:'20px'}}>Підтвердження</p>
                    <p style={{fontSize:'16px', marginBottom:'30px'}}>Ви впевнені, що хочете вийти з облікового запису?</p>
                    <div style={{display:'flex', justifyContent:'right'}}>
                        <Button variant="text" onClick={toggleModal}>Вiдмiна</Button>
                        <Button variant="text" onClick={logOut}>OK</Button>
                    </div>
                </div>
            </Modal>}

            <div className={styled.header}>
                <div className={styled.toolbar}>
                    <ul className={styled.toolbar_list}>
                        <li>
                            <p style={{fontSize:'25px'}}>Userbot-api.tech</p>
                        </li>
                        <li>
                                <MenuAccount  name={data? data.first_name : 'Quest'} modal={toggleModal}/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styled.content_container}>
                <div className={styled.container_form}>
                    <p className={styled.title}>Налаштування аккаунта</p>
                    <TextField id="standard-basic" label="App ID" variant="standard" style={{marginBottom:'15px'}} value={appId} onChange={onChangeAppId}/>
                    <TextField id="standard-basic" label="APP Hash" variant="standard" style={{marginBottom:'15px'}} value={appHash} onChange={onChangeAppHash}/>
                    <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={onChangeEmail}/>
<div className={styled.button}>
    <Button variant="contained" endIcon={<SendIcon />} style={{width:'150px'}} onClick={handlerSubmit}>
        Сохранить
    </Button>
</div>


                </div>
                <div className={styled.container_info}>
                    <p className={styled.title}>Справочна iнформацiя</p>
                    <div className={styled.block_info}>
                        <p>
                            Щоб почати використовувати Userbot API, вам потрібно зареєструвати програму на сайті Телеграма та ввести app_id та app_hash.
                            Будь ласка, ознайомтеся з інструкцією, як їх отримати:</p>
                            <div className={styled.container_info_link}>
                                <Button variant="contained" href="https://core.telegram.org/api/obtaining_api_id" style={{color:'#ffffff', marginRight:'15px'}}>Документацiя Telegram</Button>
                                <Button variant="contained" href="https://my.telegram.org/auth?to=apps" style={{color:'#ffffff'}}>my.telegram.org</Button>

                            </div>

                    </div>

                        <div>
                            <p>Щоб отримати app_id та app_hash:</p>
                            <ol className={styled.list}>
                                <li className={styled.list_items}>Перейдіть та авторизуйтесь на сайті https://my.telegram.org</li>
                                <li className={styled.list_items}>Перейдіть до розділу https://my.telegram.org/auth?to=apps</li>
                                <li className={styled.list_items}>Заповніть форму</li>
                                <li className={styled.list_items}>Отримайте app_id та app_hash</li>
                                <li className={styled.list_items}>Вставте їх нижче</li>
                            </ol>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default AccountUserPage;