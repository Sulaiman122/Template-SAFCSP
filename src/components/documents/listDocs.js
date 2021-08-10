import Doc from './doc'

const listDocs = ({ docs }) => {
    return (
        <div className="section">
            <p>الـتوثـيق</p>
            {
                docs.map(({ title, photo }, key) => (
                    <Doc title={title} photo={photo} key={`${title}-${key}`} />
                ))
            }
        </div>
    )
}

export default listDocs;
