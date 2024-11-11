import React from 'react';
import Github from '../../assets/img/Github-Dark.svg';
import Gitlab from '../../assets/img/Gitlab-Dark.svg';
import ReacLogo from '../../assets/react.svg'
import ViteLogo from '/vite.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css'

export default function Footer() {
	return (
		<footer>
            <div className="content">
                <div id="accounts">
                    <h3>Contacts:</h3>
                    <a href='https://github.com/McMaldo/'>
                        <img src={Github} alt="" />
                        <h4>Github</h4>
                    </a>
                    <a href='https://gitlab.com/maldonado.ignacio.pablo'>
                        <img src={Gitlab} alt="" />
                        <h4>Gitlab</h4>
                    </a>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <h4>maldonado.ignacio.pablo@gmail.com</h4>
                    </span>
                </div>
                <div id="desc">
                    <h3>About the Project:</h3>
                    <span>Project built in React by @McMaldo</span>
                    <span>
                        <img src={ReacLogo} alt="" />
                        +
                        <img src={ViteLogo} alt="" />
                    </span>
                </div>
            </div>
        </footer>
	)
}