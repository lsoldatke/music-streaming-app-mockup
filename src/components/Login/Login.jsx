import styles from './Login.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login({onLogin}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

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
    <div className={styles.login}>
      <h2 className={styles.title}>Log in to React Player</h2>
      <form className={styles.form} method="post" onSubmit={submitHandler}>
        <div className={styles.username}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" className={styles.usernameInput} value={formData.username}
                 onChange={changeHandler} required/>
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" className={styles.passwordInput} value={formData.password}
                 onChange={changeHandler} required/>
        </div>
        <button className={styles.submitButton} type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
