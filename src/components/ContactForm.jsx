import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import InputField from "./InputField";

function ContactForm() {

    const [userContactInfo, setUserContactInfo] = useState({});
    const [isHighlighted, setIsHighlighted] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [formIsIncomplete, setFormIsIncomplete] = useState();

    useEffect(() => {
        checkFormCompleteness();
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleCheckboxChange(event) {
        const name = event.target.name;
        const value = event.target.checked;
        setUserContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit() {
        const requiredFields = ["name", "email", "subject", "message"];
        requiredFields.forEach(inputField => {
            if (!userContactInfo.hasOwnProperty(inputField) || userContactInfo[inputField] === "") {
                setIsHighlighted(prevState => ({
                    ...prevState,
                    [inputField]: true
                }))
            } else {
                setIsHighlighted(prevState => ({
                    ...prevState,
                    [inputField]: false
                }))
            }
        });
        
        
    }

    function checkFormCompleteness() {
        if (Object.values(isHighlighted).includes(true)) {
            setFormIsIncomplete(true) 
        } else {
            setFormIsIncomplete(false);
        }
    }

    return (
        <div className="flex flex-col items-center container py-8 ">
            <h1 className="font-title font-bold text-dark text-2xl sm:text-3xl">Send me a message</h1>
            <div className="grid grid-cols-2 gap-8 w-full justify-center">
                <InputField
                    id="name"
                    name="name"
                    type="input"
                    placeholder="Name"
                    size="small"
                    required={true}
                    onChange={handleInputChange}
                    highlight={isHighlighted.name}
                />
                <InputField
                    name="email"
                    type="email"
                    placeholder="Email address"
                    size="small"
                    required={true}
                    onChange={handleInputChange}
                    highlight={isHighlighted.email}
                />  
            </div>
            <div className="flex flex-col w-full justify-center">
                <InputField
                    name="subject"
                    type="input"
                    placeholder="Subject"
                    size="large"
                    required={true}
                    onChange={handleInputChange}
                    highlight={isHighlighted.subject}
                />
                <InputBox
                    name="message"
                    placeholder="Type your message here."
                    required={true}
                    onChange={handleInputChange}
                    highlight={isHighlighted.message}
                />
            </div>
            <span className="flex flex-row items-center justify-center my-3 font-body text-md">
                <input 
                    name="updates"
                    type="checkbox" 
                    className="mr-2 w-4 h-4"
                    onChange={handleCheckboxChange}
                />
                Click here to receive email updates
            </span>
            <span className={`${formIsIncomplete ? "block" : "hidden"} text-red-400 font-body`}>
                Please fill out all of the highlighted fields.
            </span>
            <button 
                className="mt-4 bg-almost-white hover:bg-gray-200 text-dark font-semibold py-2 px-10 border border-dark rounded-full drop-shadow-md shadow-dark"
                onClick={handleSubmit}  
                >
                Submit
            </button>
        </div>
    )
}

export default ContactForm;