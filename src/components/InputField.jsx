
function InputField(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            className="h-10 w-full my-1 pt-3 bg-transparent border-b border-dark placeholder-dark text-dark font-nav focus:outline-none"
        />
    )
}

export default InputField;