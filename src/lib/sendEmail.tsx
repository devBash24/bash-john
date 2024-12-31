import emailjs from "@emailjs/browser";
import {IContactForm } from "../hooks/useEmail";

// Environment variables
const publicKey = import.meta.env.VITE_APIKEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_SERVICE_ID;


const sendEmail = async (formData: IContactForm) => {
  if (!serviceId || !publicKey || !templateId) {
    throw new Error("Email service is not configured correctly.");
  }
  emailjs.init(publicKey);
  return emailjs
    .send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    })
    .then(
      () => {
        return {
            message: "Email sent successfully",
            status: true
        }
      },
      (error) => {
        console.error("Email sending error:", error.text);
        return {
            message: "Email sending error, please try again later",
            status: false
        }
      }
    );
};

export { sendEmail };
