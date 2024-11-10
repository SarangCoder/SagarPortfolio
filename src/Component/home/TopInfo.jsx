import PersonalInfo from "./PersonalInfo";
import SideNav from "./SideNav";
import Mobile from "./mobile";

export default function (){
    return(
        <div className="mt-5">
            <div className="flex justify-between flex-wrap">
                <PersonalInfo/>
                <SideNav/>
            </div>
            <Mobile />
        </div>
    )
}