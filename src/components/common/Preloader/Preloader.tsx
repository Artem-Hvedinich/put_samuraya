import React from 'react';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.loader}>
            <div className={s.coin}></div>
        </div>
    );
};

