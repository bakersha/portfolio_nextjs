import ColumnarLayout from "../components/columnarLayout";
import Pill from "../components/pill";
import BackButton from "../components/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi, faHouseChimneyWindow, faPersonHiking, faHeadphones, faGamepad, faHammer, faBook } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const skills = [
    { name: "C#", type: "Languages" },
    { name: "TypeScript", type: "Languages" },
    { name: "JavaScript", type: "Languages" },
    { name: "Perl", type: "Languages" },
    { name: "C", type: "Languages" },
    { name: "PHP", type: "Languages" },
    { name: "JSON", type: "Languages" },
    { name: "SQL", type: "Languages" },
    { name: "HTML", type: "Languages" },
    { name: "CSS / SCSS", type: "Languages" },
    { name: ".NET Framework", type: "Frameworks" },
    { name: ".NET Core", type: "Frameworks" },
    { name: "ASP.NET", type: "Frameworks" },
    { name: "Angular", type: "Frameworks" },
    { name: "jQuery", type: "Frameworks" },
    { name: "Bootstrap", type: "Frameworks" },
    { name: "Angular Material", type: "Frameworks" },
    { name: "TailwindCSS", type: "Frameworks" },
    { name: "NextJS", type: "Frameworks" },
    { name: "React", type: "Frameworks" },
    { name: "Visual Studio", type: "Tools" },
    { name: "VS Code", type: "Tools" },
    { name: "Azure DevOps", type: "Tools" },
    { name: "SSMS", type: "Tools" },
    { name: "Git / GitHub", type: "Tools" },
    { name: "AWS", type: "Tools" }
]

export default function About() {
    return (
        <main className="flex min-h-screen flex-col p-10 md:p-24">
            <BackButton></BackButton>
            <h1 className="pb-6 md:pb-10 lg:place-self-center">So what am I all about?</h1>
            <ColumnarLayout>
                <div className="col-span-1">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-700">I have had exposure to...</h1>
                    <h2 className="text-base leading-7 font-light text-gray-400">Languages</h2>
                    {skills.map(skill => {
                        if (skill.type == "Languages") {
                            return (<Pill key={skill.name} name={skill.name} />)
                        }
                    })}
                    <h2 className="text-base leading-7 font-light text-gray-400 mt-2">Frameworks & Libraries</h2>
                    {skills.map(skill => {
                        if (skill.type == "Frameworks") {
                            return (<Pill key={skill.name} name={skill.name} />)
                        }
                    })}
                    <h2 className="text-base leading-7 font-light text-gray-400 mt-2">Tools</h2>
                    {skills.map(skill => {
                        if (skill.type == "Tools") {
                            return (<Pill key={skill.name} name={skill.name} />)
                        }
                    })}

                    <h1 className="text-2xl font-semibold leading-9 text-gray-700 mt-5">Other Skills</h1>
                    <ul className="mb-2">
                        <li>Internal-use banking applications development</li>
                        <li>Eager and quick learner</li>
                        <li>Agile Scrum / Kanban</li>
                        <li>Requirements gathering and refinement</li>
                        <li>Collaboration with product owners</li>
                        <li>Manual and automated quality assurance testing</li>
                    </ul>
                </div>                

                <div className="col-span-1">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-700 mb-2">In my free time, you may find me...</h1>
                    <ul className="mb-2 fa-ul">
                        <li className="mb-2"><FontAwesomeIcon icon={faHouseChimneyWindow} className="icon-jump" fixedWidth listItem /> Hanging out with my family</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faPersonHiking} className="icon-jump" fixedWidth listItem /> Spending time in nature</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faHeadphones} className="icon-jump" fixedWidth listItem /> Listening to podcasts, audio books, or music</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faJedi} className="icon-jump" fixedWidth listItem /> Watching or reading Star Wars</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faGamepad} className="icon-jump" fixedWidth listItem /> Playing video games like The Long Dark, Fallout, or No Man&apos;s Sky</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faHammer} className="icon-jump" fixedWidth listItem /> Working on DIY projects around my house</li>
                        <li className="mb-2"><FontAwesomeIcon icon={faBook} className="icon-jump" fixedWidth listItem /> Deep-diving into whatever subject has grabbed my interest</li>
                    </ul>
                    <div className="my-4">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/5XS3Tso9K8g0ot41oGXwo8?utm_source=generator&theme=0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                    </div>
                </div>
            </ColumnarLayout>
        </main>
    )
}