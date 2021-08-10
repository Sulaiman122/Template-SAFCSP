
const Doc = ({ title, photo }) => {

    return (
        <div className="box">
            <img
                src={photo.default}
                alt="Documentation"
                className="responsive"
                width="600" height="400"
            />
            <div className="desc"> {title}</div>
        </div>
    )
}

export default Doc