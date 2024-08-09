import ProjectSection from "./ProjectSection";
import SecondCard from "./SecondCard";
import SecondDownSection from "./SecondDownSection";
import Skill from "./Skill";

export default function () {
    return (
        <div className="my-4 flex justify-between">
            <div>
                <SecondDownSection />
                <ProjectSection />
            </div>
            <Skill />
        </div>
    )
}