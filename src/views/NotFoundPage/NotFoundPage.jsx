import React from 'react';
import { Link } from "react-router-dom";
import styled from './styled/notfound.module.scss'
import image from './img/not-found-404.png'
const NotFoundPage = () => {
    return (
        <div className={styled.wrap}>
            <img
                className={styled.image}
                src={image}
                alt="not-found"
            />
            <Link to="/" className={styled.linkHome}>
                Go to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;