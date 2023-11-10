
function PlayInstructions(props) {
    
    return (
        <div className="max-w-4xl mobile-s:mx-4 tablet:mx-16">
            <h1 className="font-nav">
                Ready to play?
            </h1>
            <h5 className="max-w-4xl mt-2 font-body">
                Follow these steps to create your account.
            </h5>
            <ol className="max-w-4xl mb-5 p-0 text-left font-body text-dark tablet:text-lg">
                {props.steps.map((step, index) => 
                    <li className="my-4" dangerouslySetInnerHTML={{ __html: step }} key={index}>
                        
                    </li>
                )}
            </ol>
        </div>
    )
}

export default PlayInstructions;