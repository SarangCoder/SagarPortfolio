export default function({serviceStyle,icon,serviceName}){
    return(
        <div className={serviceStyle}>
            <i className={icon}></i>
            <span className="ms-4 text-xl text-[#FBF68C]">{serviceName}</span>
        </div>
    )
}