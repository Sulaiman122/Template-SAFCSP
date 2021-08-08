
const Doc = ({number, image}) => {
    return (

        <div className="box">
                <img src={image} alt="Documentation image" width="600" height="400" />
            <div className="desc">التوثيق {number}</div>
        </div>

    )
}

export default Doc