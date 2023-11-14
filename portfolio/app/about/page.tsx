import ColumnarLayout from "../components/columnarLayout";
import Pill from "../components/pill";
import BackButton from "../components/button"

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-left justify-between p-24">
            <BackButton></BackButton>
            <h1 className="pb-10 place-self-center">So what am I all about?</h1>
            <ColumnarLayout>
                <div>
                    <h4 className="mb-1">Known Technologies</h4>
                    <div className="mb-2">
                        <div className="mb-2">
                            <h6>Languages</h6>
                            <Pill name={"C#"}></Pill>
                            <Pill name={"TypeScript"}></Pill>
                            <Pill name={"JavaScript"}></Pill>
                            <Pill name={"Perl"}></Pill>
                            <Pill name={"C"}></Pill>
                            <Pill name={"JSON"}></Pill>
                            <Pill name={"SQL"}></Pill>
                            <Pill name={"HTML"}></Pill>
                            <Pill name={"CSS / SCSS"}></Pill>
                        </div>
                        <div className="mb-2">
                            <h6 className="lead pe-1">Frameworks / Libraries</h6>
                            <Pill name={".NET Framework"}></Pill>
                            <Pill name={".NET Core"}></Pill>
                            <Pill name={"ASP.NET"}></Pill>
                            <Pill name={"Angular"}></Pill>
                            <Pill name={"jQuery"}></Pill>
                            <Pill name={"Bootstrap"}></Pill>
                            <Pill name={"Angular Material"}></Pill>
                            <Pill name={"Tailwind CSS"}></Pill>
                            <Pill name={"NextJS"}></Pill>
                        </div>
                        <div className="mb-2">
                            <h6 className="lead pe-1">Tools</h6>
                            <Pill name={"Visual Studio"}></Pill>
                            <Pill name={"VS Code"}></Pill>
                            <Pill name={"Azure DevOps"}></Pill>
                            <Pill name={"SSMS"}></Pill>
                            <Pill name={"Git / GitHub"}></Pill>
                            <Pill name={"AWS"}></Pill>
                        </div>
                    </div>

                    <h4 className="mb-1">Other Skills</h4>
                    <ul className="mb-2">
                        <li>Internal-use banking applications development</li>
                        <li>Eager and quick learner</li>
                        <li>Agile Scrum / Kanban</li>
                        <li>Requirements gathering and refinement</li>
                        <li>Collaboration with product owners</li>
                        <li>Manual quality assurance testing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-2">In my free time, you may find me...</h3>
                    <ul className="mb-2">
                        <li>Hanging out with my family</li>
                        <li>Spending time in nature</li>
                        <li>Listening to podcasts, audio books, or music</li>
                        <li>Watching or reading Star Wars</li>
                        <li>Playing video games like The Long Dark, Fallout, or No Man's Sky</li>
                        <li>Working on a DIY project around my house</li>
                        <li>Deep-diving into whatever subject has currently grabbed my interest</li>
                    </ul>
                    <div className="my-3">
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