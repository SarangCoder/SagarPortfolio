import Projects from "./Projects";
import ProjectSideNav from "./ProjectSideNav";

export default function (){
    return(
       <div className="my-14 flex justify-between">
           <ProjectSideNav/> 
           <Projects/>
       </div>
    )
}