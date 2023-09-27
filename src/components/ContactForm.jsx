import InputBox from "./InputBox";
import InputField from "./InputField";

function ContactForm() {
    function handleSubmit() {

    }

    return (
        <div className="flex flex-col items-center container py-8 ">
            <h1 className="font-title font-bold text-dark text-2xl sm:text-3xl">Send me a message</h1>
            <div className="grid grid-cols-2 gap-8 w-full justify-center">
                <InputField
                    type="input"
                    placeholder="Name"
                    size="small"
                />
                <InputField
                    type="email"
                    placeholder="Email address"
                    size="small"
                />  
            </div>
            <div className="flex flex-col w-full justify-center">
                <InputField
                    type="input"
                    placeholder="Subject"
                    size="large"
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