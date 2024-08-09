import ProjectsDetails from "./projectsDetails"

export default function () {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="mt-4 h-[40vh]  w-[700px] bg-[#171717] border-t-2 border-x-2 rounded-t-3xl flex justify-center items-center">
                <ProjectsDetails projectName={"Spotify Clone"} details={"Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."} />
            </div>
            <div className="w-[900px] h-[5vh] bg-[#fff] rounded-b-3xl"></div>
        </div>
    )
}