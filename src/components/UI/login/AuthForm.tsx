import { Form } from "react-router-dom";

import classes from "./AuthForm.module.css"

function AuthForm() {
    return (
      <div className={classes["top_container"]}>
        <Form className={classes.form}>
          <h1>Login</h1>
          <div className={classes["form-group"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </Form>
      </div>
    );
  }

export default AuthForm;
