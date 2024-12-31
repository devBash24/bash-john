import React, { useState } from "react";
import { sendEmail } from "../lib/sendEmail";
import { contactFormValidation } from "../lib/email_form_validation";

// Define the email data structure
export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

// Custom hook to manage email form data
const useEmail = () => {
  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [emailState, setEmailState] = useState<
    "success" | "error" | "sending" | "initial"
  >("initial");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailState === "sending") return;
    setMessage(null);
    setEmailState("sending");
    try {
      await contactFormValidation(formData);

      const response = await sendEmail(formData);
      if (response.status) {
        setEmailState("success");
        setMessage(response.message);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setEmailState("error");
      setMessage((error as Error).message);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    emailState,
    message,
  };
};

export default useEmail;
