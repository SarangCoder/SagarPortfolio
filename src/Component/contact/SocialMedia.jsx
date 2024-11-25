import Media from "./Media";

export default function () {
    return (
        <div className="text-white w-[68%] h-[40vh] bg-[#1C1D0F] rounded-3xl pt-10 ps-6 flex justify-center">
            <div className="w-[50%] h-[13vh] flex flex-wrap">
                <Media media={"FaceBook"} />
                <Media media={"Git & GitHub"} />
                <Media media={"LinkeDin"} /> <br />
                <Media media={"WhatsApp"} />
            </div>

        </div>
    )
}