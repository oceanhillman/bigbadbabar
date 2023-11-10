import Informational from "./Informational";

function ProsAndCons(props) {

    return (
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-y-5 max-w-6xl my-4 tablet:mx-16 text-left">
            <Informational
                title="Pros" 
                content={props.pros}
                maxColumns={3}
            />
            <Informational 
                title="X-factors" 
                content={props.xFactors}
                maxColumns={3}
            />
            <Informational 
                title="Cons" 
                content={props.cons}
                maxColumns={3}
            />
        </div>
    )
}

export default ProsAndCons;