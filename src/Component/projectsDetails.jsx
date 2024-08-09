import ProjectTechButton from "./ProjectTechButton";
import spotify from "../assets/project.png"
export default function ({ details, projectName }) {
    return (

        <div className="text-white flex justify-between w-[650px]">
            <img src={spotify} alt="" className="w-[300px] h-[200px]" />
            <div className=" w-1/2">
                <h2 className="text-green-400 text-2xl font-semibold">{projectName}</h2>
                <p className="text-xs pt-2">{details}</p>
                <div className="flex gap-2 pt-2">

                    <ProjectTechButton techUse={"React"} />
                    <ProjectTechButton techUse={"Express"} />
                    <ProjectTechButton techUse={"Node"} />
                    <ProjectTechButton techUse={"JavaScript"} />
                </div>

            </div>
        </div>

    );
}