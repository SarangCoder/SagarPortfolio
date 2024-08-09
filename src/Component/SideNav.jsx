import Button from "./Button";

export default function() {
    return(
        <div className="text-slate-50 h-40 bg-[#171717] w-64 flex justify-center items-center flex-col rounded-3xl gap-2 hover:border-2 border-emerald-900 ">
            <Button navLink={"project"}/>
            <Button navLink={"About"}/>
            <Button navLink={"Resume"}/>

        </div>
    )
}