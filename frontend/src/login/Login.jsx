import {useFormik} from 'formik'

export default function Login() {
    const form = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={form.handleSubmit}>
            <p>
                <label htmlFor="login">Логин</label>
                <input 
                    id="login"
                    name="login"
                    type="text"
                    onChange={form.handleChange}
                    value={form.values.login}
                />
            </p>
            <p>
                <label htmlFor="password">Пароль</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    onChange={form.handleChange}
                    value={form.values.password}
                />
            </p>
            <p>
                <button type="submit">Авторизоваться</button>
            </p>
        </form>
    );
}