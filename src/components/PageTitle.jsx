
function PageTitle(props) {

    return (
        <div className="max-w-5xl">
            <h1 className="block text-center font-nav text-dark">
                {props.title}
            </h1>
            <p className="mx-2 font-body tablet:text-xl">
                {props.subtitle}
            </p>
        </div>
    )
}

export default PageTitle;