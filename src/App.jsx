

import ContactSection from "./Component/contact/ContactSection"
import TopInfo from "./Component/home/TopInfo"
import ProjectSection from "./Component/project/ProjectSection"
import ServiceSection from "./Component/service/ServiceSection"

function App() {


  return (
    <div className="max-w-screen-xl mx-[auto]">
      <TopInfo/>
      <ProjectSection/>
      <ServiceSection/>
      <ContactSection/>
    </div>
  )
}

export default App
