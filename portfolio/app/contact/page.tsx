import BackButton from "../components/button";
import LinkCard from "../components/card";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col p-10 md:p-24">
            <BackButton></BackButton>
            <div className="grid overflow-hidden relative items-center justify-center">
                <h1 className="pb-6 md:pb-10 place-self-center">Contact</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white">
                    <div className="col-span-1"><LinkCard url="https://www.linkedin.com/in/sharayabaker/" description="sharayabaker" faIcon={faLinkedin} /></div>
                    <div className="col-span-1"><LinkCard url="https://github.com/bakersha/" description="@bakersha" faIcon={faGithub} /></div>
                    <div className="col-span-1"><LinkCard url="mailto:sharayakbaker@gmail.com" description="sharayakbaker@gmail.com" faIcon={faEnvelope} /></div>
                </div>
            </div>
        </main>
    )
}