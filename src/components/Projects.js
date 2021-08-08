
const Projects = ({ number, image, done }) => {

    return (
        <div className="box">
            <img src={image} alt="Documentation image" width="600" height="400" />

            {!done ?
                <>
                    <div className="soon">
                        <p>قريبا</p>
                    </div>
                    <div className="desc" style={{opacity: 0.5}}>مشروع {number}</div>
                </>
                : <div className="desc">مشروع {number}</div>
            }
        </div>
    )
}

export default Projects