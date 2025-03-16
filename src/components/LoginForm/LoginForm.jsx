import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/contacts", { replace: true });
      })
      .catch(() => console.log(console.error()));

    options.resetForm();
  };
  return (
    <>
      <div className={css.formWrapper}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <label>
              <span>Email:</span>
              <Field name="email" />
            </label>
            <label>
              <span>Password:</span>
              <Field name="password" type="password" />
            </label>
            <button type="submit">Login</button>

            <p>
              You do not have account yet? <Link to="/register">Get IT!</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
