import ServiceDetails from "./ServiceDetails";
import ServiceOffers from "./ServiceOffers";
import ServiceTopPart from "./ServiceTopPart";

export default function(){
    return(
        <div className="">
            <ServiceTopPart/>
            <ServiceOffers/>
            <ServiceDetails icon={"fa-solid fa-laptop-code text-5xl text-[#FBF68C]"} serviceName={"Web Development"} serviceDes={"I build modern, responsive, and scalable web applications from start to finish, using the MERN stack (MongoDB, Express.js, React, and Node.js). I handle both the client-side and server-side development, ensuring a seamless experience for end-users and robust backend functionality."}/>
        </div>
    )
}