import { IContactForm } from "../hooks/useEmail";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z\s]+$/;
const messageRegex = /^[A-Za-z\s]+$/;


export const contactFormValidation = async (form:IContactForm) => {
    if(!form.name || form.name.length < 0){
        throw new Error("Name is required");
    }
    if(!form.email || form.email.length < 0){
        throw new Error("Email is required");
    }
    if(!form.message || form.message.length < 0){
        throw new Error("Message is required");
    }

    if(!emailRegex.test(form.email)){
        throw new Error("Invalid email format");
    }

    if(!nameRegex.test(form.name)){
        throw new Error("Invalid name format");
    }

    if(!messageRegex.test(form.message)){
        throw new Error("Invalid message format");
    }
}