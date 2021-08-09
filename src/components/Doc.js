import docs from '../listDocs';

const Doc = () => {

    return (

        <>
            {
                docs.map((item) => (
                    <div className="box">
                        <img
                            src={(item.photo).default}
                            alt="Documentation image"
                            width="600" height="400"
                        />
                        <div className="desc"> {item.title}</div>
                    </div>
                ))
            }
        </>

    )
}

export default Doc