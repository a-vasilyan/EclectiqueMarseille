import "../style/button.css"

export default function Button({name, click}){
    return (
        <button className="btn" 
            onClick={click}
        >{name}
        </button>
    )
}