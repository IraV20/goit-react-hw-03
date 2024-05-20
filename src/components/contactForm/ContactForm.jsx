import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";
import { number } from "prop-types";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Must be only digits")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextContact = {
      id: nanoid(),
      ...values,
    };

    onAdd(nextContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formElem}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          ></Field>
          <ErrorMessage name="name" component="span" className={css.err} />
        </div>
        <div className={css.formElem}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          ></Field>
          <ErrorMessage name="number" component="span" className={css.err} />
        </div>

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
