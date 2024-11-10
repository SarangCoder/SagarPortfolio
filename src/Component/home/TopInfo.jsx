import PersonalInfo from "./PersonalInfo";
import SideNav from "./SideNav";

export default function (){
    return(
        <div className="flex justify-between mt-5 flex-wrap">
            <PersonalInfo/>
            <SideNav/>
        </div>
    )
}