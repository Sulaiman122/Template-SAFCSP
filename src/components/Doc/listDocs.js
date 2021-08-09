import Doc from './Doc'
import list from '../../api'

const listDocs = () => {
    return (
        <>
            {
                list.docs.map((item) => (
                    <Doc title={item.title} photo={item.photo} />
                ))
            }
        </>
    )
}

export default listDocs;
