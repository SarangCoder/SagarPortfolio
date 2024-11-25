export default function ({ icon, contact, para }) {
    return (
        <div className="">
            <div className="text-white flex items-center ms-16">
                <i className={icon}></i>
                <div className="ps-4 mb-4">
                    <h5 className="text-sm font-bold leading-4 pt-1">{contact}</h5>
                    <p className="text-xs">{para}</p>
                </div>
            </div>
        </div>
    )
}