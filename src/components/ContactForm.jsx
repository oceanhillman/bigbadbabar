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
        <div className="flex flex-col items-center container mb-4">
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
            <span className="flex flex-row items-center justify-center mt-3 font-body text-md">
                <input 
                    name="updates"
                    type="checkbox" 
                    className="mr-2 w-4 h-4"
                    onChange={handleCheckboxChange}
                />
                Click here to receive email updates
            </span>

            {formIsIncomplete ? <span className="text-red-400 font-body mb-2">"Please fill out all of the highlighted fields."</span> : <span className="mb-2">&nbsp;</span>}

            <button 
                className="bg-teal-blue hover:bg-moonstone-blue text-almost-white font-nav py-2 px-10 rounded-3xl"
                onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default ContactForm;