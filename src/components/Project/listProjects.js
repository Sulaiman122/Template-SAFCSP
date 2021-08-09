import Projects from './Projects'
import list from '../../api'


const listProjects = () => {
    return (
        list.projects.map((item) => (
            <Projects title={item.title} photo={item.photo} isDone={item.isDone} />
        ))
    )
}

export default listProjects;