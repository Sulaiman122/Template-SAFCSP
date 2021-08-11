import Doc from './Doc'

const ListDocs = ({ Docs }) => {
    return (
        <div className="section">
            <p>الـتوثـيق</p>
            {
                Docs.map(({ title, photo }, index) => (
                    <Doc title={title} photo={photo} key={`Document-${index}`} />
                ))
            }
        </div>
    )
}

export default ListDocs;
