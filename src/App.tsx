import AboutMe from "./components/_new_about_me";
import NewCredential from "./components/_new_credentials";

import NewHero from "./components/_new_hero";
import NewProjects from "./components/_new_projects";
import NewContact from "./components/_new_contact";
import NewFooter from "./components/_new_footer";

const App = () => {
  return (
    <div className="">
      <NewHero />
      <AboutMe />
      <NewCredential />
      <NewProjects />
      <NewContact />
      <NewFooter />
    </div>
  );
};

export default App;
