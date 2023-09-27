
function InputBox(props) {
    return (
        <textarea 
            placeholder={props.placeholder}
            className="h-28 w-full bg-dark/10 my-4 p-1 border border-dark placeholder-dark text-dark font-nav focus:outline-none"
        />
    )
}

export default InputBox;