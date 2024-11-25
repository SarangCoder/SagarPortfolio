import Contact from "./Contact";

export default function(){
    return(
        <div className="w-[30%] h-[40vh] bg-[#1C1D0F] p-6 rounded-3xl">
            <h1 className="text-white text-2xl font-semibold mb-3 ms-16"><span>GET IN</span> TOUCH</h1>
            <Contact icon={"fa-solid fa-envelope text-2xl"} contact={"Email"} para={"sagarramrudri77@gmail.com"} />
            <Contact icon={"fa-solid fa-phone text-2xl"} contact={"Call me"} para={"+977 9809755501"} />
            <Contact icon={"fa-brands fa-linkedin text-3xl"} contact={"Inbox me"} para={"Sagar Ramrudri"} />
        </div>
    )
}