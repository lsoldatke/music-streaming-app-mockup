import styles from './Login.module.css'
import {useState} from "react";
import Header from "../Header/Header.jsx";
import {useNavigate} from "react-router-dom";

function Login({onLogin}) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  function changeHandler(event) {
    const {name, value} = event.target;

    setFormData(previousState => ({
      ...previousState,
      [name]: value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onLogin(formData);
    navigate('/');
  }

  return (
    <>
      <Header showSearchButton={false}/>
      <div className={styles.login}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form className={styles.loginForm} method="post" onSubmit={submitHandler}>
          <div className={styles.email}>
            <label htmlFor="email">E-mail:</label>
            <input className={styles.emailInput} type="text" name="email" value={formData.email}
                   onChange={changeHandler}/>
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password:</label>
            <input className={styles.passwordInput} type="text" name="password" value={formData.password}
                   onChange={changeHandler}/>
          </div>
          <button className={styles.submitButton} type="submit">Log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
