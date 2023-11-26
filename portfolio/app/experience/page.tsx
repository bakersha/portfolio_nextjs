import BackButton from "../components/button"
import ColumnarLayout from "../components/columnarLayout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const jobs = [
    {
        level: 'top',
        employer: 'Umpqua Bank',
        jobtitle: 'Software Engineer II',
        date: 'Sep 2019 - Present',
        location: 'Eugene, OR',
        url: 'https://umpquabank.com',
        bullet1:
            'Full stack development as part of an Agile dev team.',
        bullet2:
            'Build and maintain over two dozen internal-use applications including APIs and user interfaces.',
        bullet3:
            'Active participation in Agile ceremonies from design to production to maintenance.',
        bullet4:
            'Work from home office on a geographically dispersed team'
    },
    {
        level: 'top',
        employer: 'PenFed Credit Union',
        jobtitle: 'QA Analyst I',
        date: 'Feb 2016 - Sep 2019',
        location: 'Eugene, OR',
        url: 'https://penfed.org',
        bullet1:
            'Construction and execution of manual tests on internal and external banking applications.',
        bullet2:
            'Training and leading teams of QA Analysts and user acceptance testers over a wide geographical footprint.',
    },
    {
        level: '',
        employer: 'PenFed Credit Union',
        jobtitle: 'Research Analyst',
        date: 'Jun 2012 - Feb 2016',
        location: 'Eugene, OR',
        bullet1:
            'User acceptance testing of internal and external applications.',
        bullet2:
            'Processing member requests such as IRAs and Trusts.',
        bullet3:
            'Fixing complex banking issues and communicating with members accordingly via letter, email, or phone.',
    },
    {
        level: '',
        employer: 'PenFed Credit Union',
        jobtitle: 'Member Service Rep',
        date: 'Dec 2011 - Jun 2012',
        location: 'Eugene, OR',
        bullet1:
            'User acceptance testing of internal applications.',
        bullet2:
            'Addressing member requests via phone in a call center environment.',
        bullet3:
            'Training incoming representatives.',
    },
]

export default function Experience() {
    return (
        <main className="flex min-h-screen flex-col p-10 md:p-24">
            <BackButton></BackButton>
            <ColumnarLayout>
                <div className="col-span-1">
                    {jobs.map((job) => (
                        <div key={job.employer} className="mb-5">
                            {job.level == "top" && <h1 className="text-2xl font-semibold leading-9 text-gray-700">
                                {job.employer} <a className="ms-2"
                                    href={job.url} target="_blank"
                                    rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs"></FontAwesomeIcon></a>
                            </h1>}
                            <h2 className="text-base leading-7 font-light text-gray-400">{job.jobtitle}</h2>
                            <h3 className="text-base leading-7 font-extralight text-gray-500">{job.date}</h3>
                            <ul className="my-2 font-light text-base leading-7 text-gray-600">
                                <li>{job.bullet1}</li>
                                <li>{job.bullet2}</li>
                                <li>{job.bullet3}</li>
                                <li>{job.bullet4}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="mb-5">
                        <h1 className="text-2xl font-semibold leading-9 text-gray-700 ">
                            Oregon State University <a className="ms-2 hover-glow"
                                href="https://engineering.oregonstate.edu/Academics/Degrees/computer-science" target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs"></FontAwesomeIcon></a>
                        </h1>
                        <h2 className="text-base leading-7 font-light text-gray-400">BS Computer Science</h2>
                        <h3 className="text-base leading-7 font-extralight text-gray-500">Class of 2019</h3>
                    </div>
                    <div className="mb-5 col-span-1">
                        <h1 className="text-2xl font-semibold leading-9 text-gray-700">
                            University of Oregon <a className="ms-2 hover-glow" href="https://religion.uoregon.edu/"
                                target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs"></FontAwesomeIcon></a>
                        </h1>
                        <h2 className="text-base leading-7 font-light text-gray-400">BA Religious Studies</h2>
                        <h3 className="text-base leading-7 font-extralight text-gray-500">Class of 2011</h3>
                    </div>
                </div>
            </ColumnarLayout>
        </main>
    )
}