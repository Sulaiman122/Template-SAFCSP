import projects from '../listProjects';

const Projects = () => {

    return (
                projects.map((item) => (
                    <div className="box">
                        <img
                            src={(item.photo).default}
                            alt="Project image"
                            width="600" height="400"
                        />
                        {!item.done ?
                            <>
                                <div className="soon">
                                    <p>قريبا</p>
                                </div>
                                <div className="desc" style={{ opacity: 0.5 }}>{item.title}</div>
                            </>
                            : <div className="desc">{item.title}</div>
                        }
                    </div>
                ))
    )
}

export default Projects