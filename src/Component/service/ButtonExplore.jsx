export default function({btnBg,btnName, btnIcon}){
    return(
        <div className={btnBg}>
            <button className="me-4">{btnName}</button>
            <i className= {btnIcon}></i>
        </div>
    )
} 