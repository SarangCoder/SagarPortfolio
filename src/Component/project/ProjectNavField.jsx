export default function({projectFieldName}){
    return(
        <div className="flex items-center  h-[50px] bg-[#424242] opacity-80 p-4 m-4 rounded-2xl">
            <i className="fa-solid fa-folder-open text-[#7E7777] text-2xl "></i>
            <h2 className="ms-2 text-white font-medium">{projectFieldName}</h2>
        </div>
    )
}