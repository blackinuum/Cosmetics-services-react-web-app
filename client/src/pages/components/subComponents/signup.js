import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import "../../../style/authentification/signup.css";
export default function Signup({active}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmationVisible, setPasswordConfirmationVisible] = useState(false);

  const togglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
  }
  const togglePasswordConfirmationVisibilty = () => {
    setPasswordConfirmationVisible(!passwordConfirmationVisible);
  }

  const initialValues = {
    nom: "",
    prenom: "",
    mail: "",
    tel: "",
    password: "",
    passwordII: ""
  }
  const validationSchema = Yup.object().shape({
    nom: Yup.string().required("Ce champ est obligatoire !"),
    prenom: Yup.string().required("Ce champ est obligatoire !"),
    mail: Yup.string().required("Ce champ est obligatoire !").email("Veuillez saisir un e-mail valide !"),
    tel: Yup.string()
      .matches(/^[0]{1}[5-7]{1}[0-9]{8}$/, "Le numéro saisi est invalide !")
      .required("Ce champs est obligatoire !"),
    password: Yup.string().required("Ce champ est obligatoire !").min(8, "Le mot de passe doit contenir au moins 8 caractères !")
      .max(20, "Le mot de passe doit contenir au plus 20 caractères !"),
    passwordII: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe ne se rassemblent pas !"
      )
      .required("Ce champs est obligatoire !")
      .min(8, "Le mot de passe doit contenir au moins 8 caractères !")
      .max(20, "Le mot de passe doit contenir au plus 20 caractères !"),
  })
  return <div id="signup-form__wrapper" className={`${active ? "active" : "hidden" }`}>
    <Formik initialValues={initialValues} validationSchema={validationSchema} className="formik">
      {({ errors, touched }) => (
        <Form className="form">
          <div className="inputs__container">
            <div className={`inputs ${(errors.nom && touched.nom) ? "invalid" : "valid"}`}>
              <Field type="text" name="nom" id="nom" className="input-field" autoComplete="off" />
              <label htmlFor="nom" className="signup-label">Nom* :</label>
              <div className="error">
                <ErrorMessage name="nom" component="span" />
              </div>
            </div>
            <div className={`inputs ${(errors.prenom && touched.prenom) ? "invalid" : "valid"}`}>
              <Field type="text" name="prenom" id="prenom" className="input-field" autoComplete="off" />
              <label htmlFor="prenom" className="signup-label">Prenom* :</label>
              <div className="error">
                <ErrorMessage name="prenom" component="span" />
              </div>
            </div>
          </div>
          <div className="inputs__container">
            <div className={`inputs ${(errors.mail && touched.mail) ? "invalid" : "valid"}`}>
              <Field type="text" name="mail" id="mail" className="input-field" autoComplete="off" />
              <label htmlFor="mail" className="signup-label">Mail* :</label>
              <div className="error">
                <ErrorMessage name="mail" component="span" />
              </div>
            </div>
            <div className={`inputs ${(errors.tel && touched.tel) ? "invalid" : "valid"}`}>
              <Field type="text" name="tel" id="tel" className="input-field" autoComplete="off" />
              <label htmlFor="tel" className="signup-label">Tel* :</label>
              <div className="error">
                <ErrorMessage name="tel" component="span" />
              </div>

            </div>
          </div>
          <div className="inputs__container">
            <div className={`inputs ${(errors.password && touched.password) ? "invalid" : "valid"}`}>
              <div id="password__container-wrapper">
                <Field type={`${passwordVisible ? "text" : "password"}`} id="password" name="password" className="input-field" autoComplete="off" />
                {passwordVisible ? (<AiFillEyeInvisible className="passwordVisibility__icon" onClick={togglePasswordVisibilty} />) : (<AiFillEye className="passwordVisibility__icon" onClick={togglePasswordVisibilty} />
                )}
              </div>
              <label htmlFor="password" className="signup-label">Mot de passe* :</label>
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
            </div>
            <div className={`inputs ${(errors.passwordII && touched.passwordII) ? "invalid" : "valid"}`}>
              <div id="password__container-wrapper">
                <Field type={`${passwordConfirmationVisible ? "text" : "password"}`} id="passwordII" name="passwordII" className="input-field" autoComplete="off" />
                {passwordConfirmationVisible ? (<AiFillEyeInvisible className="passwordVisibility__icon" onClick={togglePasswordConfirmationVisibilty} />) : (<AiFillEye className="passwordVisibility__icon" onClick={togglePasswordConfirmationVisibilty} />
                )}
              </div>
              <label htmlFor="passwordII" className="signup-label">Confirmer le mot de passe * :</label>
              <div className="error">
                <ErrorMessage name="passwordII" component="span" />
              </div>
            </div>
          </div>
          <div id="button__container">
            <button>Enregistrer</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>;
}
