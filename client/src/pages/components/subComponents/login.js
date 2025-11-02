import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import "../../../style/authentification/login.css";

export default function Login() {
  const initialValues = {
    mail: "",
    password: ""
  }
  const validationSchema = Yup.object().shape({
    mail: Yup.string().required("Ce champs est obligatoire !").email("Veuillez saisir un mail valide !"),
    password: Yup.string().required("Ce champs est obligatoire !").min(8, "Le mot de passe doit contenir au moins 8 caractères ").max(20, "Le mot de passe ne doit pas dépasser 20 caractères")
  })
  return <div id="login__container">
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <Form id="login-form__container">
          <div id="inputs__container">
            <div className={`login__input ${(errors.mail && touched.mail) && "invalid"}`}>
              <label htmlFor="mail">Mail* :</label>
              <div className="field__container">
                <Field className="login__field" name="mail" autoComplete="off" />
                <div className="icon__container">
                  <GrMail className="login__icon" />
                </div>
              </div>
              <div className="error">
                <ErrorMessage name="mail" element="span" />
              </div>
            </div>
            <div className={`login__input ${(errors.password && touched.password) && "invalid"}`}>
              <label htmlFor="mail">Mot de passe* :</label>
              <div className="field__container">
                <Field className="login__field" name="password" type="password" autoComplete="off" />
                <div className="icon__container">
                  <AiFillLock className="login__icon" />
                </div>
              </div>
              <div className="error">
                <ErrorMessage name="password" element="span" />
              </div>
            </div>
          </div>
          <div id="login__options">
            <div id="remember-me__container">
              <Field type="checkbox" name="remember" className="rememberMe" />
              <label htmlFor="remember">Enregistrer mes informations</label>
            </div>
            <div id="login-button__container">
              <button id="login">Se connecter</button>
            </div>
            <div id="password__forgotten">
              <div className="seperator" />
              <p className="forgot-password">J'ai oublié mon mot de passe</p>
              <div className="seperator" />
            </div>
          </div>
        </Form >
      )
}
    </Formik >
  </div >;
}
