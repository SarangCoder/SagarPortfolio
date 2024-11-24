import ButtonExplore from "./ButtonExplore";
import serviceImg from "C:/Users/sagar/Desktop/Sarang/Sagar/src/assets/project.png"

export default function ({ icon, serviceName, serviceDes}) {
    return (
        <div className="h-[50vh] p-6 mb-6 flex bg-[#1C1D0F] rounded-b-3xl justify-between items-center">
            <div className="text-white w-[55%]">
                <i className={icon}></i>
                <h1 className="mt-4 text-2xl font-bold">{serviceName}</h1>
                <p className="mb-4 font-thin leading-5">{serviceDes}</p>
                <ButtonExplore btnBg={"px-4 py-2 bg-[#FBF78C] w-fit text-black rounded-3xl text-center"} btnName={"Let's Chat"} btnIcon={'fa-solid fa-headphones'} />
            </div>

            <div className="w-72 h-80 me-10 rounded-2xl" style={{backgroundImage: `url(${serviceImg})`}}></div>
        </div>
    )
}