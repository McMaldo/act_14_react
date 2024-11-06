import React from 'react';
import s from './error.module.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className={s.error}>
            <div className={s.errorDialog}>
                <span>Error <span className={s.errorNro}>404</span></span>
                <span>URL no Encontrada</span>
                <Link to="/">Volver al Inicio</Link>
            </div>
        </div>
    )
}