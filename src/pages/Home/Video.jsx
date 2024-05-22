import video from "/video_small.mp4";

const Video = () => {
    return (
        <>
            <video autoPlay loop muted className="min-vw-100 p-0 m-0"
                style={{
                    height: "90vh",
                    objectFit: "fill",
                    zIndex: "899"
                }}
            >
                <source src={video} type="video/mp4" />
            </video>
            <div className="min-vw-100 p-0 m-0" style={{
                height: "90vh",
                backgroundColor: "black",
                opacity: "40%",
                zIndex: "990",
                position: "absolute"
            }}
            ></div>
        </>
    )
}

export default Video;