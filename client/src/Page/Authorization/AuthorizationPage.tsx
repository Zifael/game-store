import React, { useEffect, useState } from 'react';
import AuthService from '../../service/authservice/AuthService';
import UserServic from '../../service/userService/UserService';

function AuthorizationPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<any>('')

    const set = async() => {
        try {
            const resposnes = await AuthService.login(email, password)
            localStorage.setItem('token', resposnes.data.accessToken)
            setUser(resposnes)
            console.log(user)
        } catch (error) {
            console.error(error)
        }
    }

    const add = async() => {
        const resposen = await UserServic.getUser()
        console.log(resposen)
    }
    return (
        <div>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={set}>Set</button>
            <button onClick={add}>Set</button>
            <p>{user && user.email}</p>
        </div>
    );
}

export default AuthorizationPage;