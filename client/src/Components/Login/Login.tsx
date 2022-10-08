import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setLogin = () => {

    }

    return (
       <div>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={setLogin}>Set</button>
       </div>

    );
}

export default Login;