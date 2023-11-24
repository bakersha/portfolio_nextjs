import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NightSkyParticles from './components/particles'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-evenly">
      <h1 className="z-10">Hello there.</h1>
      <p className="text-lg text-gray-300 max-w-2xl z-10">
        I'm Sharaya.<br />I'm a full stack dev with 4 years of experience building internal apps for banks. My tech journey started with User Acceptance testing back in 2012 before I became a QA tester in 2016 and finally a developer in 2019.
      </p>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <a href="/about" className="z-10 hover-glow">About <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          <a href="/experience" className="z-10 hover-glow">Experience <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          <a href="/contact" className="z-10 hover-glow">Contact <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          {/* <a href="/projects">Projects <FontAwesomeIcon icon={faAngleRight} size="xs" /></a> */}
        </div>
      </div>
      <footer>
        <p className="ml-16">Designed and written by me using <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover-glow">NextJS</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover-glow">TailwindCSS</a>, <a href="https://particles.js.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover-glow">tsParticles</a>, and <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover-glow">AWS</a>.</p>
      </footer>
      <NightSkyParticles></NightSkyParticles>
    </main>
  )
}
