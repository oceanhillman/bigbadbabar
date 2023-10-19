
function YoutubeEmbed(props) {
    return (
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${props.embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />
    )   
};

export default YoutubeEmbed;