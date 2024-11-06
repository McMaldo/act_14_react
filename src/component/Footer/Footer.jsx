import React from 'react';
import Github from '../../assets/Github-Dark.svg';
import Gitlab from '../../assets/Gitlab-Dark.svg';
import ReacLogo from '../../assets/react.svg'
import ViteLogo from '/vite.svg';
import './footer.css'

export default function Footer() {
	return (
		<footer>
            <div id="accounts">
                <a href='https://github.com/McMaldo/'>
                    <img src={Github} alt="" />
                    <h4>Github</h4>
                </a>
                <a href='https://gitlab.com/maldonado.ignacio.pablo'>
                    <img src={Gitlab} alt="" />
                    <h4>Gitlab</h4>
                </a>
            </div>
            <div id="desc">
                <span>Project built in React by @McMaldo</span>
                <span>
                    <img src={ReacLogo} alt="" />
                    +
                    <img src={ViteLogo} alt="" />
                </span>
            </div>
        </footer>
	)
}