import BackButton from "../components/button";
import LinkCard from "../components/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-left p-24">
            <BackButton></BackButton>
            <h1 className="text-center">Contact</h1>
            <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                <div className="grid grid-cols-3 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-1 md:flex lg:gap-x-10 items-center">
                    <LinkCard url="https://www.linkedin.com/in/sharayabaker/" description="sharayabaker" faIcon={faLinkedin}></LinkCard>
                    <LinkCard url="https://github.com/bakersha/" description="@bakersha" faIcon={faGithub}></LinkCard>
                    <LinkCard url="mailto:sharayakbaker@gmail.com" description="sharayakbaker@gmail.com" faIcon={faEnvelope}></LinkCard>
                </div>
            </div>
        </main>
    )
}