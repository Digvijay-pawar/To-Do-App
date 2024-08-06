
export function Todo(props) {
    let btnPropety;
    async function completeHandler() {
        if (props.status == true) {
            const responce = await fetch("http://localhost:3000/delete", {
                method: "POST",
                body: JSON.stringify({
                    id: props.id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } else {
            const responce = await fetch("http://localhost:3000/completed", {
                method: "POST",
                body: JSON.stringify({
                    id: props.id
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
    }
    if (props.status == true) {
        btnPropety = {
            type: "danger",
            text: "Delete"
        }
    } else {
        btnPropety = {
            type: "secondary",
            text: "Mark as Done"
        }
    }
    return (
        <div className="row shadow m-2 my-3 py-4 rounded bg-white">
            <div className="col-8">
                <h5>Title: {props.title}</h5>
            </div>
            <div className="col-4 text-right">
                <button onClick={completeHandler} className={`btn btn-${btnPropety.type}`}>{btnPropety.text}</button>
            </div>
            <div className="col-12 mt-2">
                <p>Description: {props.description}</p>
            </div>
            <hr />
        </div>
    )
}
