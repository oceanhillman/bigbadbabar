import InputBox from "./InputBox";
import InputField from "./InputField";

function ContactForm() {
    function handleSubmit() {

    }

    return (
        <div className="flex flex-col items-center container py-8 bg-gradient-to-br from-dark/10 via-dark/20 to-dark/10 shadow shadow-dark border border-dark">
            <h3 className="font-body">Send me a message</h3>
            <div className="grid grid-cols-2 gap-12">
                <InputField
                    type="input"
                    placeholder="Name"
                />
                <InputField
                    type="email"
                    placeholder="Email address"
                />  
            </div>
            <div className="grid w-full xl:px-16">
                <InputField
                    type="input"
                    placeholder="Subject"
                />
                <InputBox
                    placeholder="Type your message here."
                />
            </div>
            <span className="flex flex-row items-center justify-center font-body text-md">
                <input type="checkbox" className="mr-2 w-4 h-4"/>
                Click here to receive email updates
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