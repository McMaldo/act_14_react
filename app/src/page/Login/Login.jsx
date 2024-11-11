import React, { useState, useEffect } from 'react';
import s from './login.module.css';
import { Link } from 'react-router-dom';

export function LoginButtons() {
    return (
        <div className={s.LoginButtons}>
            <Link to="/act_14_react/login">Login</Link>
            <Link to="/act_14_react/register">Register</Link>
        </div>
    )
}
export function RegisterForm() {
	return (
		<form>
            <span>
                <input type="email" name="email" id="email" placeholder='Email' required/>
            </span>
            <span>
                <input type="password" name="password" id="nick" placeholder='Nick Name' required/>
            </span>
            <span>
                <input type="password" name="password" id="password" placeholder='Password' required/>
            </span>
            <span>
                <input type="password" name="password" id="passwordRepeat" placeholder='Repeat Password' required/>
            </span>
            <input type="submit" value="Register" id='RegisterBtn'/>
        </form>
    )
}
export function LoginForm() {
	return (
		<form>
            <span>
                <input type="text" name="email" id="email" placeholder='Email or Nick' required/>
            </span>
            <span>
                <input type="password" name="password" id="password" placeholder='Insert Password' required/>
            </span>
            <input type="submit" value="Login" id='LoginBtn'/>
        </form>
    )
}
export default function Login({child}) {
    let [isLoginSelected, setLoginSelected] = useState(false);

    useEffect(()=>{
        if(window.location.href.includes("login")) {
            setLoginSelected(true);
        }
    }, []);

	return (
		<div className={s.LoginContainer}>
            <svg id="Logo" viewBox="0 0 312.5 325.5" height="325.5" width="312.5"><defs id="SvgjsDefs1657"></defs><g id="SvgjsG1658" featurekey="rootContainer" transform="matrix(6.25,0,0,6.25,0.31249597668647766,13)" fill="#111111"><path xmlns="http://www.w3.org/2000/svg" d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"></path><path xmlns="http://www.w3.org/2000/svg" d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"></path></g><g id="SvgjsG1659" featurekey="symbolFeature-0" transform="matrix(0.9078371794932845,0,0,0.9078371794932845,112.70759155742314,73.18795694297923)" fill="#ffffff"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M62.492,24.982c-3.843,0-6.968,3.126-6.968,6.968c0,3.843,3.125,6.969,6.968,6.969s6.969-3.126,6.969-6.969    C69.461,28.108,66.335,24.982,62.492,24.982z"></path><path d="M48.394,49.099c-3.843,0-6.969,3.126-6.969,6.968c0,3.843,3.126,6.969,6.969,6.969c3.842,0,6.969-3.126,6.969-6.969    C55.362,52.225,52.235,49.099,48.394,49.099z"></path><path d="M41.111,44.562c-0.56-0.485-1.484-0.419-1.967,0.139l-3.511,4.042c-0.243,0.28-0.363,0.639-0.337,1.009    c0.024,0.373,0.194,0.712,0.476,0.956c0.254,0.221,0.578,0.342,0.914,0.342c0.405,0,0.789-0.176,1.053-0.48l3.509-4.042    c0.245-0.28,0.365-0.638,0.339-1.009C41.561,45.146,41.392,44.808,41.111,44.562z"></path><path d="M40.028,34.975c0.243,0.185,0.533,0.282,0.838,0.282c0.443,0,0.848-0.201,1.113-0.554l3.226-4.274    c0.224-0.297,0.319-0.664,0.268-1.032c-0.052-0.369-0.243-0.696-0.54-0.919c-0.599-0.453-1.502-0.326-1.952,0.272l-3.225,4.274    c-0.226,0.297-0.32,0.665-0.269,1.033C39.539,34.424,39.731,34.751,40.028,34.975z"></path><path d="M48.392,19.669l4.274,3.225c0.243,0.185,0.534,0.282,0.84,0.282c0.44,0,0.847-0.202,1.111-0.553    c0.185-0.244,0.282-0.535,0.282-0.84c0-0.442-0.202-0.848-0.555-1.112l-4.275-3.226c-0.596-0.451-1.502-0.322-1.951,0.272    c-0.225,0.297-0.32,0.664-0.27,1.032C47.9,19.118,48.093,19.445,48.392,19.669z"></path><circle cx="35.979" cy="21.911" r="2.08"></circle><circle cx="49.294" cy="41.921" r="2.081"></circle><circle cx="52.703" cy="66.51" r="2.081"></circle><path d="M91.671,19.25c-0.27-1.799-1.223-3.383-2.686-4.458C77.817,6.54,63.151,1.996,47.685,1.996    c-15.463,0-30.129,4.544-41.297,12.796c-1.457,1.077-2.41,2.661-2.685,4.463c-0.269,1.806,0.178,3.602,1.259,5.058    c1.297,1.76,3.298,2.77,5.489,2.77c0.126,0,0.251-0.003,0.374-0.01l35.431,66.167c0.243,0.451,0.712,0.733,1.226,0.736h0.003    c0.511,0,0.981-0.28,1.225-0.73l35.833-66.177c0.127,0.006,0.253,0.009,0.38,0.009c2.194,0,4.194-1.007,5.488-2.765    C91.494,22.85,91.942,21.052,91.671,19.25z M38.198,68.507c-0.293,0.675-0.638,1.47-0.768,2.346l-3.559-6.647    c0.734,0.254,1.484,0.348,2.119,0.428c1.363,0.171,2.097,0.299,2.557,1.108C39.009,66.55,38.745,67.246,38.198,68.507z     M63.961,59.225c-0.162-0.571-0.392-1.102-0.603-1.588c-0.547-1.26-0.812-1.956-0.35-2.764c0.46-0.81,1.193-0.937,2.555-1.107    c0.441-0.055,0.96-0.12,1.485-0.244L63.961,59.225z M70.459,47.224c-0.147-0.431-0.321-0.835-0.481-1.205    c-0.549-1.26-0.812-1.955-0.354-2.759l6.451-11.01c0.188-0.322,0.24-0.698,0.146-1.06c-0.094-0.359-0.323-0.66-0.642-0.846    c-0.643-0.379-1.534-0.143-1.908,0.496l-6.461,11.023c-1.179,2.07-0.377,3.917,0.208,5.266c0.548,1.26,0.812,1.955,0.352,2.763    c-0.459,0.809-1.191,0.936-2.557,1.106c-0.522,0.066-1.115,0.143-1.715,0.306c0.027-0.028,0.057-0.051,0.082-0.082    c0.479-0.6,0.381-1.479-0.217-1.96l-4.182-3.345c-0.577-0.463-1.493-0.36-1.961,0.217c-0.479,0.6-0.38,1.479,0.219,1.96    l4.181,3.345c0.22,0.174,0.487,0.274,0.765,0.296c-0.678,0.356-1.311,0.897-1.801,1.754c-1.172,2.059-0.369,3.906,0.216,5.254    c0.548,1.26,0.812,1.956,0.351,2.765c-0.184,0.323-0.23,0.699-0.133,1.059c0.1,0.359,0.332,0.657,0.655,0.841    c0.005,0.003,0.01,0.007,0.015,0.009l-9.145,16.89c0.018-0.181,0.03-0.363,0.03-0.548v-5.018c0-1.076,0.875-1.951,1.951-1.951    c0.769,0,1.394-0.625,1.394-1.394c0-0.769-0.625-1.394-1.394-1.394c-2.612,0-4.738,2.125-4.738,4.738v5.018    c0,1.039-0.651,1.951-1.394,1.951c-0.743,0-1.395-0.912-1.395-1.951v-5.018c0-2.613-2.125-4.738-4.738-4.738    c-0.768,0-1.393,0.625-1.393,1.394c0,0.769,0.625,1.394,1.393,1.394c1.076,0,1.951,0.875,1.951,1.951v5.018    c0,2.613,1.877,4.738,4.182,4.738c0.854,0,1.648-0.293,2.312-0.793l-3.214,5.935l-8.133-15.188    c0.184-0.021,0.362-0.08,0.523-0.172c0.324-0.185,0.557-0.483,0.655-0.843c0.099-0.359,0.052-0.734-0.133-1.057    c-0.46-0.81-0.195-1.506,0.351-2.766c0.586-1.348,1.387-3.195,0.216-5.254c-1.174-2.057-3.171-2.309-4.632-2.492    c-1.362-0.171-2.094-0.298-2.553-1.107c-0.461-0.807-0.197-1.502,0.352-2.764c0.585-1.348,1.387-3.194,0.205-5.267L28.13,42.128    c0.064,0.001,0.13,0.002,0.193,0.002c3.844,0,6.969-3.126,6.969-6.969s-3.125-6.968-6.969-6.968c-3.842,0-6.967,3.125-6.967,6.968    c0,2.791,1.681,5.307,4.227,6.4c-0.337,0.437-0.396,1.056-0.103,1.558l6.45,11.005c0.461,0.808,0.195,1.503-0.352,2.763    c-0.227,0.522-0.494,1.136-0.659,1.804L13.581,26.313c0.328-0.169,0.636-0.359,0.916-0.568c8.756-6.469,20.543-10.03,33.191-10.03    s24.438,3.562,33.197,10.032c0.276,0.206,0.578,0.394,0.899,0.561L70.459,47.224z M88.169,22.657    c-0.766,1.038-1.948,1.633-3.247,1.633c-0.864,0-1.687-0.271-2.378-0.784c-9.237-6.822-21.615-10.579-34.855-10.579    S22.073,16.683,12.84,23.503c-0.698,0.518-1.524,0.792-2.389,0.792c-1.296,0-2.48-0.598-3.249-1.64    c-0.637-0.859-0.9-1.92-0.743-2.985c0.163-1.066,0.726-2.002,1.585-2.636c10.692-7.9,24.77-12.251,39.641-12.251    c14.873,0,28.953,4.351,39.646,12.252c0.863,0.635,1.424,1.568,1.582,2.627C89.075,20.727,88.811,21.792,88.169,22.657z"></path></g></g></g><g id="SvgjsG1660" featurekey="nameFeature-0" transform="matrix(0.7149110151996043,0,0,0.7149110151996043,54.42719590291932,171.87861043098545)" fill="#ffffff"><path d="M18 40.64 c-6.72 0 -15.8 -3.92 -15.8 -14.12 c0 -6.92 4.24 -15.16 15.44 -15.16 c4.64 0 8.64 1.44 8.16 2.84 l-0.52 1.56 c-1.44 4.28 -3 -1.2 -10.12 -1.2 c-5.72 0 -8.52 3.72 -8.52 9.48 c0 9 6.84 12.76 12.32 12.76 c0.72 0 4.36 -0.56 6.44 -1.88 c0.32 -0.2 1.16 0.72 0.92 1.08 c-1.72 2.52 -7.08 4.64 -8.32 4.64 z M60.2 38.64 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -6.88 c-0.2 -0.68 -1.04 -0.68 -1.8 -0.68 l-10.24 0 c-0.76 0 -1.6 0 -1.8 0.68 l0 6.88 c0 2.8 1.6 3.36 3.32 3.6 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -18.08 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 7.32 c0.2 0.68 1.04 0.68 1.8 0.68 l10.24 0 c0.76 0 1.6 0 1.8 -0.68 l0 -7.32 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 18.08 c0 2.8 1.6 3.36 3.32 3.6 z M92.84 38.64 c0.56 0.08 0.4 1.36 -0.08 1.36 l-10.56 0 c-0.52 0 -0.56 -1.28 -0.12 -1.36 c1.48 -0.28 3.08 -0.8 1.6 -4.24 l-0.44 -1 c-0.4 -0.96 -1.08 -1.04 -2.28 -1.04 l-8.16 0 c-1.2 0 -1.88 0.08 -2.28 1.04 l-0.4 1 c-1.4 3.44 0.12 3.96 2.04 4.24 c0.52 0.08 0.4 1.36 -0.12 1.36 l-8.64 0 c-0.48 0 -0.6 -1.28 -0.12 -1.36 c1.64 -0.28 2.6 -0.84 4.08 -4.24 l6.76 -15.52 c1.56 -3.52 2.04 -5.16 2.04 -6.68 c0 -0.24 2.8 -0.88 2.92 -0.6 l9.76 22.76 c1.44 3.4 2.4 4.04 4 4.28 z M80.68 30.119999999999997 c0.56 0 1.16 -0.08 0.92 -0.64 l-4.68 -11.2 l-4.72 11.2 c-0.24 0.56 0.36 0.64 0.92 0.64 l7.56 0 z M114.92 40.24 c-2.2 -0.56 -6.28 -0.44 -10.24 -0.44 c-3.48 0 -6.6 0.08 -8.88 0.32 c-0.36 0.04 -0.76 -0.88 -0.56 -1.2 l16.28 -24.4 l-7.08 -0.04 c-4.52 -0.04 -5.96 1.12 -7 2.36 c-0.44 0.52 -1.52 0.2 -1.28 -0.52 l1.44 -4.04 c0.24 -0.68 1.04 -0.64 1.52 -0.52 c2.2 0.56 6.2 0.44 9.72 0.44 c3.28 0 6.4 -0.08 8.68 -0.32 c0.36 -0.04 0.76 0.88 0.56 1.2 l-16.28 24.4 l7.8 0.04 c4.52 0.04 5.96 -1.12 7 -2.36 c0.44 -0.52 1.52 -0.2 1.28 0.52 l-1.44 4.04 c-0.24 0.68 -1.04 0.64 -1.52 0.52 z M150.8 38.64 c0.56 0.08 0.4 1.36 -0.08 1.36 l-10.56 0 c-0.52 0 -0.56 -1.28 -0.12 -1.36 c1.48 -0.28 3.08 -0.8 1.6 -4.24 l-0.44 -1 c-0.4 -0.96 -1.08 -1.04 -2.28 -1.04 l-8.16 0 c-1.2 0 -1.88 0.08 -2.28 1.04 l-0.4 1 c-1.4 3.44 0.12 3.96 2.04 4.24 c0.52 0.08 0.4 1.36 -0.12 1.36 l-8.64 0 c-0.48 0 -0.6 -1.28 -0.12 -1.36 c1.64 -0.28 2.6 -0.84 4.08 -4.24 l6.76 -15.52 c1.56 -3.52 2.04 -5.16 2.04 -6.68 c0 -0.24 2.8 -0.88 2.92 -0.6 l9.76 22.76 c1.44 3.4 2.4 4.04 4 4.28 z M138.64 30.119999999999997 c0.56 0 1.16 -0.08 0.92 -0.64 l-4.68 -11.2 l-4.72 11.2 c-0.24 0.56 0.36 0.64 0.92 0.64 l7.56 0 z M170.84 24.759999999999998 c3.72 0 7.32 2.68 7.32 7.16 c0 4.96 -4.52 8.16 -11.2 8.16 c-1.92 0 -4.16 -0.24 -7.12 -0.24 c-2.52 0 -4.44 0.04 -6.28 0.24 c-0.36 0.04 -0.56 -1.36 -0.24 -1.44 c2.32 -0.6 4.12 -0.96 4.12 -3.92 l0 -17.76 c0 -2.56 -1.64 -3.24 -3.36 -3.68 c-0.32 -0.08 -0.12 -1.4 0.2 -1.36 c1.64 0.2 3.56 0.24 4.84 0.24 c3.2 0 5.56 -0.24 7.32 -0.24 c5.16 0 9.4 2.16 9.44 6.56 c0.04 3.24 -2.24 5.48 -5.04 6.04 l0 0.24 z M165.07999999999998 14 c-2.12 0 -2.84 0.72 -2.84 2.96 l0 7.12 l4.12 0 c2.88 0 4.56 -1.44 4.56 -4.52 c0 -3.8 -2.56 -5.56 -5.84 -5.56 z M166.84 38 c3.52 0 6.16 -1.04 6.16 -5.2 c0 -4.4 -2.92 -6.72 -6.64 -6.72 l-4.12 0 l0 8.64 c0 2.2 1.12 3.28 4.6 3.28 z M181.76 40.08 c-0.4 0.04 -0.56 -1.36 -0.24 -1.44 c2.32 -0.6 4.12 -0.96 4.12 -3.92 l0 -17.76 c0 -2.8 -1.64 -3.36 -3.36 -3.6 c-0.32 -0.04 -0.08 -1.36 0.2 -1.36 l11.04 0 c0.28 0 0.48 1.32 0.2 1.36 c-1.68 0.2 -3.28 0.8 -3.28 3.6 l0 17.76 c0 2.28 0.96 3.12 4.28 3.12 c6.04 0 8.44 -2.76 9.4 -4.28 c0.28 -0.44 1.36 -0.24 1.36 0.44 c0 2.04 -1.72 6.08 -4.24 6.08 c-2.24 -0.12 -4.44 -0.24 -7.8 -0.24 c-3.68 0 -8.04 -0.12 -11.68 0.24 z M208.67999999999998 40 c-0.32 0 -0.56 -1.32 -0.24 -1.36 c2.04 -0.28 3.32 -1.08 3.32 -3.6 l0 -18.08 c0 -2.52 -1.28 -3.32 -3.32 -3.6 c-0.32 -0.04 -0.08 -1.36 0.24 -1.36 l10.96 0 c0.32 0 0.56 1.32 0.24 1.36 c-1.72 0.24 -3.32 0.8 -3.32 3.6 l0 18.08 c0 2.8 1.6 3.36 3.32 3.6 c0.32 0.04 0.08 1.36 -0.24 1.36 l-10.96 0 z M229.2 40 c-0.36 0 -0.6 -1.28 -0.28 -1.32 c2.76 -0.36 4.6 -0.92 4.6 -3.08 l0 -19.72 c0 -1 -0.36 -1.32 -1.32 -1.32 l-1.08 0 c-3.8 0 -5.92 0.88 -6.72 2.6 c-0.36 0.8 -1.72 0.68 -1.56 0 c0.36 -1.44 0.68 -2.68 0.92 -4.8 c0.08 -0.76 0.52 -0.72 1.24 -0.64 c1.84 0.2 3.52 0.28 11.12 0.28 s10.28 -0.08 12.2 -0.28 c0.72 -0.08 1.4 -0.12 1.16 0.64 c-0.6 1.88 -1 3.36 -1.24 4.8 c-0.12 0.68 -1.2 0.72 -1.36 0 c-0.4 -1.68 -2.16 -2.6 -5.6 -2.6 l-1.24 0 c-0.96 0 -1.56 0.32 -1.56 1.32 l0 19.72 c0 2.16 1.84 2.72 4.6 3.08 c0.32 0.04 0.08 1.32 -0.28 1.32 l-13.6 0 z M281.6 38.64 c0.56 0.08 0.4 1.36 -0.08 1.36 l-10.56 0 c-0.52 0 -0.56 -1.28 -0.12 -1.36 c1.48 -0.28 3.08 -0.8 1.6 -4.24 l-0.44 -1 c-0.4 -0.96 -1.08 -1.04 -2.28 -1.04 l-8.16 0 c-1.2 0 -1.88 0.08 -2.28 1.04 l-0.4 1 c-1.4 3.44 0.12 3.96 2.04 4.24 c0.52 0.08 0.4 1.36 -0.12 1.36 l-8.64 0 c-0.48 0 -0.6 -1.28 -0.12 -1.36 c1.64 -0.28 2.6 -0.84 4.08 -4.24 l6.76 -15.52 c1.56 -3.52 2.04 -5.16 2.04 -6.68 c0 -0.24 2.8 -0.88 2.92 -0.6 l9.76 22.76 c1.44 3.4 2.4 4.04 4 4.28 z M269.44 30.119999999999997 c0.56 0 1.16 -0.08 0.92 -0.64 l-4.68 -11.2 l-4.72 11.2 c-0.24 0.56 0.36 0.64 0.92 0.64 l7.56 0 z"></path></g><g id="SvgjsG1661" featurekey="sloganFeature-0" transform="matrix(1.0934303890092552,0,0,1.0934303890092552,84.00329733370992,214.7748272417311)" fill="#ffffff"><path d="M9.2773 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M4.7559 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M23.076406249999998 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M30.781278125 20.19531 c-3.0273 0 -5.3906 -1.4551 -5.8203 -4.1016 l3.0273 -0.69336 c0.19531 1.582 1.3574 2.4023 2.9102 2.4023 c1.1914 0 2.1387 -0.52734 2.1289 -1.7188 c-0.0097656 -1.3281 -1.5723 -1.748 -3.291 -2.2754 c-2.0703 -0.64453 -4.2871 -1.4063 -4.2871 -4.0039 c0 -2.627 2.1484 -4.1113 4.9805 -4.1113 c2.4805 0 4.9805 1.0059 5.5469 3.7109 l-2.832 0.70313 c-0.26367 -1.4063 -1.2109 -2.0215 -2.5391 -2.0215 c-1.1816 0 -2.1875 0.48828 -2.1875 1.6504 c0 1.084 1.3867 1.4453 2.9883 1.9238 c2.1289 0.64453 4.6484 1.4648 4.6484 4.2773 c0 2.998 -2.5098 4.2578 -5.2734 4.2578 z M46.94359375 5.888999999999999 l0 2.5781 l-3.3496 0 l0 11.533 l-2.9004 0 l0 -11.533 l-3.3691 0 l0 -2.5781 l9.6191 0 z M58.603984374999996 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M52.509784375 14.6387 l4.209 0 l-2.0996 -5.9863 z M68.94533125 20.19531 c-3.0957 0 -5.5176 -1.582 -5.5176 -5.1367 l0 -9.1699 l2.9297 0 l0 8.7695 c0 2.1484 1.1426 2.9492 2.5879 2.9492 c1.4551 0 2.6074 -0.81055 2.6074 -2.9492 l0 -8.7695 l2.9297 0 l0 9.1699 c0 3.5547 -2.4316 5.1367 -5.5371 5.1367 z M85.292925 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M80.771525 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M100.35203125 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M94.25783125 14.6387 l4.209 0 l-2.0996 -5.9863 z M115.107578125 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M129.863515625 5.888999999999999 l0 2.5781 l-3.3496 0 l0 11.533 l-2.9004 0 l0 -11.533 l-3.3691 0 l0 -2.5781 l9.6191 0 z"></path></g></svg>
            <nav className={isLoginSelected ? s.loginSelected : ""}>
                <Link to="/act_14_react/login" onClick={()=>setLoginSelected(true)}>Login</Link>
                <Link to="/act_14_react/register" onClick={()=>setLoginSelected(false)}>Register</Link>
            </nav>
            <div className={s.FormContainer}>
                {child}
            </div>
        </div>
    )
}