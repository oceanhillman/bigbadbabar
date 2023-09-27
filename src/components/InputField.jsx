
function InputField(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            className={`h-10 my-1 pt-3 bg-transparent border-b border-dark placeholder-dark text-dark font-nav focus:outline-none 
                ${props.size==="small" ? "col-span-1" : "col-span-2"}`}
        />
    )
}

export default InputField;