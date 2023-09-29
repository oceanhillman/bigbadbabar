
function InputBox(props) {
    return (
        <textarea 
            name={props.name}
            placeholder={props.placeholder + (props.required ? "*" : "")}
            className={`h-28 w-full bg-dark/10 mt-5 p-1 border border-dark placeholder-dark text-dark font-nav focus:outline-none ${props.highlight === true ? "placeholder-red-400" : "placeholder-dark"}`}
            onChange={props.onChange}
        />
    )
}

export default InputBox;