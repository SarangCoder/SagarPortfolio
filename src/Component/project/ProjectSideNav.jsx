import ProjectDic from "./ProjectDic";
import ProjectNavField from "./ProjectNavField";

export default function(){
    return(
        <div className="w-80 h-[500px] bg-[#141414] rounded-3xl">
            <ProjectDic/>
            <ProjectNavField projectFieldName={"MEARN Stack Project"}/>
            <ProjectNavField projectFieldName={"Full Stack Project"}/>
            <ProjectNavField projectFieldName={"Clone Project"}/>
        </div>
    )
}