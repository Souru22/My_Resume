import { PROJECTS } from "../config/Config"

export const Projects = () => {
    return (
        <section className="sect first:mt-0">
            <div className="break-inside-avoid">
                {/* To keep in the same column */}
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    PROJECTS
                </h2>
                {
                    PROJECTS.map((project, index) => {
                        return (
                            <section className="pb-2 mb-2 break-inside-avoid border-l-2 pl-2" key={index}>
                                <header>
                                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                                        <a href={project.url} className="group">
                                            {project.title}
                                            <span className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                                                ↗
                                            </span>
                                        </a>
                                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                                            <a href={project.github}>
                                                <i className="fab fa-github" />
                                            </a>
                                        </span>
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        {project.date} | {project.technologies.join(", ")}
                                    </p>
                                </header>
                                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                                    {project.specs.map((spec, index) => {
                                        return (
                                            <span key={index}>
                                                › {spec}
                                                <br />
                                            </span>
                                        )
                                    })}
                                </p>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}