import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { Form, Button, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthContext from '../../app/authContext';
import api from '../../api';

export default function Login() {
    const [error, setError] = useState('');
    const auth = useContext(AuthContext);
    const { state } = useLocation();
    const navigate = useNavigate();
    const form = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async values => {
            try {
                const { token } = await api.auth(values);
                localStorage.setItem('userId', token);
                auth.logIn();
                navigate(state.from.pathname ?? '/');
            } catch (e) {
                if (e.response.status === 401) {
                    setError('the username or password is incorrect');
                }
            }
        }
    });

    const feedbackStyle = {
        display: error !== '' ? 'block' : 'none'
    };
    return (
        <Row className="justify-content-center align-items-center h-100">
            <Form className='w-50' onSubmit={form.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Имя пользователя</Form.Label >
                    <Form.Control 
                        id="username"
                        name="username"
                        type="text"
                        required
                        autoComplete="username"
                        placeholder="Имя пользователя"
                        onChange={form.handleChange}
                        value={form.values.login}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Пароль</Form.Label>
                    <Form.Control 
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder="Пароль"
                        onChange={form.handleChange}
                        value={form.values.password}
                    />
                    <div className="invalid-feedback" style={feedbackStyle}>{error}</div>
                </Form.Group>
                <Button type="submit">Авторизоваться</Button>
            </Form>
        </Row>
    );
}