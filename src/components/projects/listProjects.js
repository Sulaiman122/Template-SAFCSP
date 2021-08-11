import Project from './Project'


const listProjects = ({ Projects }) => {
    return (
        <div className="section">
            <p>مشاريعنا</p>
            {
                Projects.map(({ title, photo, isDone }, index) => (
                    <Project title={title} photo={photo} isDone={isDone} key={`Project-${index}`} />
                ))
            }
        </div>
    )
}

export default listProjects;