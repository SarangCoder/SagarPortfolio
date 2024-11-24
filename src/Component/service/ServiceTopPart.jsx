import ButtonExplore from "./ButtonExplore";

export default function(){
    return(
        <div className="my-4 text-[#C2C2C2]">
            <i class="fa-solid fa-wrench text-[#EEF200] text-5xl"></i>
            <span className="text-white text-5xl ms-4 font-bold">Service.</span>
            <div className="flex justify-between mt-8">
                <p>I ROAR WITH SUCCESS, DELIVERING THE TRIONN. THROUGH VERSATILE DESIGN, <br /> BRANDING AND THE LATEST TECH.</p>
                <ButtonExplore btnBg={"px-4 py-3 bg-[#FBF78C] w-fit text-black rounded-3xl text-center"}  btnName={"EXPLORE MORE"} btnIcon={"fa-solid fa-arrow-right"} />
            </div>
        </div>
    )
}