import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello there.</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        I'm Sharaya.<br />Full stack dev with 4 years experience building internal apps in the banking industry.
      </p>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <a href="/about">About <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          <a href="/experience">Experience <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          <a href="/contact">Contact <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
          <a href="/projects">Projects <FontAwesomeIcon icon={faAngleRight} size="xs" /></a>
        </div>
      </div>
    </main>
  )
}
