import Services from "./Services";

export default function(){
    return(
        <div className=" mt-8  flex justify-between">
            <Services serviceStyle={"text-white bg-[#2D2C0E] w-fit px-4 py-3 rounded-t-lg me-10"} icon={"fa-solid fa-laptop-code text-2xl text-[#FBF68C]"} serviceName={"Web Development"} />
            <Services serviceStyle={"text-white w-fit px-4 py-3 rounded-t-lg me-10"} icon={"fa-solid fa-pen-nib text-2xl text-[#FBF68C]"} serviceName={"UI/UX Design"} />
            <Services serviceStyle={"text-white w-fit px-4 py-3 rounded-t-lg me-10"} icon={"fa-solid fa-paper-plane text-2xl text-[#FBF68C]"} serviceName={"Web App"} />
            <Services serviceStyle={"text-white w-fit px-4 py-3 rounded-t-lg "} icon={"fa-solid fa-microchip text-2xl text-[#FBF68C]"} serviceName={"AI Based Wesite"} />
        </div>
    )
}  