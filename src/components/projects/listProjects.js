import Projects from './project'


const listProjects = ({ projects }) => {
    return (
        <div className="section">
            <p>مشاريعنا</p>
            {
                projects.map(({ title, photo, isDone }, key) => (
                    <Projects title={title} photo={photo} isDone={isDone} key={`${title}-${key}`} />
                ))
            }
        </div>
    )
}

export default listProjects;