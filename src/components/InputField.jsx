
function InputField(props) {
    return (
        <input 
            name={props.name}
            type={props.type} 
            placeholder={props.placeholder + (props.required ? "*" : "")}
            className={`h-10 my-2 pt-3 bg-transparent border-b border-dark text-dark font-nav focus:outline-none 
                ${props.size==="small" ? "col-span-1" : "col-span-2"} ${props.highlight === true ? "placeholder-red-400" : "placeholder-dark"}`}
            onChange={props.onChange}
        />
    )
}

export default InputField;