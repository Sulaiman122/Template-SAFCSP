
const Projects = ({ title, photo, isDone }) => {
    return (
        <div className="box">
            <img
                src={photo.default}
                alt="Project"
                className="responsive"
                width="600" height="400"
            />
            {!isDone ?
                <>
                    <div className="soon">
                        <p>قريبا</p>
                    </div>
                    <div className="desc" style={{ opacity: 0.5 }}>{title}</div>
                </>
                : <div className="desc">{title}</div>
            }
        </div>
    )
}

export default Projects