import React, { useState } from 'react';

export default function RegisterForm() {
	return (
		<form>
            <span>
                <input type="email" name="email" id="email" placeholder='Email' required/>
            </span>
            <span>
                <input type="text" name="nick" id="nick" placeholder='Nick Name' maxLength="20" required/>
            </span>
            <span>
                <input type="password" name="password" id="password" placeholder='Password' required/>
            </span>
            <span>
                <input type="password" name="passwordRepeat" id="passwordRepeat" placeholder='Repeat Password' required/>
            </span>
            <input type="submit" value="Register" id='RegisterBtn'/>
        </form>
    )
}