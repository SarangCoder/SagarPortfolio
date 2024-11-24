import profileImage from "C:/Users/sagar/Desktop/Sarang/Sagar/src/assets/sagarprofile.jpeg"
export default function () {
    return (
        <div className="bg-[#171717] overflow-hidden max-w-screen-lg h-56 rounded-3xl flex justify-center items-center  hover:border-2 border-emerald-900 ">
            <div className="text-slate-50 flex">
                <div className="h-56 w-60 rounded-e-[100px] bg-cover bg-center " style={{backgroundImage: `url(${profileImage})`}}></div>
                <div className="mx-8 pt-5">
                    <h1 className="text-4xl font-bold mb-1">Sagar Ramrudri</h1>
                    <h2 className="mb-2 text-base text-xl font-bold"><span className="text-2xl font-semibold text-orange-500">MERN</span> Stack Developer</h2>
                    <p className="text-base">Targeting MERN Developer roles with an organization of high repute with a scope of improving knowledge and further career growth.</p>
                </div>
            </div>
        </div>
    );
};