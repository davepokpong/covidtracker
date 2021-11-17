import '../App.css'

export default function Card(props: any) {

    const handleCardClick = () => {
        if (props.type === ""){
            
        }
    }

    return (
        <div className="card-handmade p-4" onClick={handleCardClick}>
            <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold" style={{ color: "rgb(107, 110, 110)" }}>{props.title}</p>
                <img src={props.icon} style={{ width: "28px", height: "25px" }} />
            </div>
            <div className="d-flex justify-content-around">
                {props.status != "invert" ?
                    <div className={props.chk === "neg" ? "green-percent mt-4 ms-2 px-1" : "red-percent mt-4 ms-2 px-1"}>
                        <p style={{ fontSize: "13px", color: "white" }}>
                            {props.chk === "neg" ? `▼ ${props.percent}%` : `▲ ${props.percent}%`}
                        </p>
                    </div>
                    :
                    <div className={props.chk === "neg" ? "red-percent mt-4 ms-2 px-1" : "green-percent mt-4 ms-2 px-1"}>
                        <p style={{ fontSize: "13px", color: "white" }}>
                            {props.chk === "neg" ? `▼ ${props.percent}%` : `▲ ${props.percent}%`}
                        </p>
                    </div>
                }
                <p className="fw-bold"
                    style={{
                        color: "rgb(34, 127, 227)",
                        fontSize: "43px",
                        marginRight: "10px",
                        marginLeft: "20px"
                    }}>{props.val}</p>
            </div>

            <p className="text-center fw-bold mt-3"
                style={{
                    color: "black",
                    fontSize: "18px"
                }}>Total: {props.total}</p>
        </div>
    )
}
