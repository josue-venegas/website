import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

interface Email{
  name: string,
  email: string,
  message: string,
}

export const useForm = (validate: any) => {
  const [values, setValues] = useState({} as Email);
  const [errors, setErrors] = useState({} as Email);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const { t } = useTranslation();

  const openNotificationWithIconSuccess = () => {
    notification["success"]({
      placement: "bottomRight",
      message: t("Success Title"),
      description: t("Success Description")
    });
  };

  const openNotificationWithIconLoading = () => {
    notification["info"]({
      placement: "bottomRight",
      message: t("Loading Title"),
      description: t("Loading Description")
    });
  };

  const openNotificationWithIconError = () => {
    notification["error"]({
      placement: "bottomRight",
      message: t("Error Title"),
      description: t("Error Description")
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    if (Object.keys(validate(values)).length === 0) {
      openNotificationWithIconLoading();
      emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID || "", process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",{
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        }, process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "")
      .then((result) => {
          console.log(result.text);
          setShouldSubmit(true);
          openNotificationWithIconSuccess();
      }, (error) => {
          console.log(error.text);
          openNotificationWithIconError();
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues({name: "", email: "", message: ""} as Email);
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
