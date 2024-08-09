import SecondCard from "./SecondCard";

export default function () {
    return (
        <div className="flex gap-6 flex-wrap">
            <SecondCard exDes={"I’m a CS Student turned web Developer who’s now building a Saas Product "} />
            <SecondCard exDes={"Exprience"} />
        </div>
    );
};