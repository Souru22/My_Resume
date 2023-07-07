import { Header } from "../components/AHeader";

import { Contact } from "../components/BContact";

import { Summary } from "../components/CSummary";

import { Experience } from "../components/DExperience";

import { Education } from "../components/EEduction";

import { Projects } from "../components/FProjects";

import { Skills } from "../components/GSkills";

export const Home = () => {
  return (
    <div className="bg-hero-zig-zag">
      <main className="font-jost hyphens-manual">
        {/* Page ------------------------------------------------------------------------------------------------------*/}

        <div className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
          {/* Name --------------------------------------------------------------------------------------------------*/}

          <Header />

          {/* Column ------------------------------------------------------------------------------------------------*/}

          <div className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
            {/* Contact Information -------------------------------------------------------------------------------------------*/}

            {/* <Contact /> */}

            {/*Summary --------------------------------------------------------------------------------------------------------*/}

            <Summary />

            {/*Experience -----------------------------------------------------------------------------------------------------*/}

            <Education />

            <Skills />

            <Experience />

            {/*Education ------------------------------------------------------------------------------------------------------*/}

            {/*Projects -------------------------------------------------------------------------------------------------------*/}

            <Projects />

            {/*Begin Skills ---------------------------------------------------------------------------------------------------*/}
          </div>

          {/* end Column */}
        </div>

        {/* end Page */}
      </main>
    </div>
  );
};
