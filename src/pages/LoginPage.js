import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/auth.service';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            setError('');
            const response = await login({
                email,
                password,
            });
            localStorage.setItem('token', response.token);
            navigate('/');
        }
        catch {
            setError('Credenciales incorrectas');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "\r\n      min-h-screen\r\n\r\n      flex\r\n      items-center\r\n      justify-center\r\n\r\n      bg-gradient-to-br\r\n      from-[#050816]\r\n      via-[#081225]\r\n      to-[#0b1730]\r\n    ", children: _jsxs("form", { onSubmit: handleSubmit, className: "\r\n          w-full\r\n          max-w-md\r\n\r\n          bg-slate-900\r\n\r\n          border\r\n          border-slate-700\r\n\r\n          rounded-3xl\r\n\r\n          p-8\r\n\r\n          flex\r\n          flex-col\r\n          gap-5\r\n        ", children: [_jsx("h1", { className: "\r\n          text-3xl\r\n          font-bold\r\n          text-white\r\n          text-center\r\n        ", children: "Dep\u00F3sitos Piornal" }), _jsx("input", { type: "email", placeholder: "Correo electr\u00F3nico", value: email, onChange: (e) => setEmail(e.target.value), className: "\r\n            p-3\r\n            rounded-xl\r\n\r\n            bg-slate-800\r\n            text-white\r\n          " }), _jsx("input", { type: "password", placeholder: "Contrase\u00F1a", value: password, onChange: (e) => setPassword(e.target.value), className: "\r\n            p-3\r\n            rounded-xl\r\n\r\n            bg-slate-800\r\n            text-white\r\n          " }), error && (_jsx("div", { className: "\r\n            text-red-400\r\n            text-sm\r\n          ", children: error })), _jsx("button", { type: "submit", disabled: loading, className: "\r\n            p-3\r\n\r\n            rounded-xl\r\n\r\n            bg-blue-600\r\n            hover:bg-blue-700\r\n\r\n            text-white\r\n            font-semibold\r\n          ", children: loading
                        ? 'Accediendo...'
                        : 'Iniciar sesión' })] }) }));
};
export default LoginPage;
