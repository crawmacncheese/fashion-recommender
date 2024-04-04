import React, { useState } from 'react';

import LoginForm from '../components/LoginForm.jsx';

export default function Login() {
    const [login, setLogin] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    return (
        <div id="login" className="h-screen w-screen flex items-center justify-center">
            <LoginForm />
        </div>
    );
}

