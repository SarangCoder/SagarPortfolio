import Media from "./Media";

export default function () {
    return (
        <div className="text-white w-[68%] h-[35vh] bg-[#141414] rounded-3xl pt-6 ps-6 flex justify-center">
            <div className="w-[50%] h-[13vh] flex flex-wrap">
                <Media media={"FaceBook"} />
                <Media media={"Git & GitHub"} />
                <Media media={"LinkeDin"} /> <br />
                <Media media={"WhatsApp"} />
            </div>

        </div>
    )
}