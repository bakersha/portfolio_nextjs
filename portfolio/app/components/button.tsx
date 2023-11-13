import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function BackButton() {
    return (
        <div className="mb-5">
            <a href="/"><FontAwesomeIcon icon={faArrowLeftLong} size='lg' /></a>
        </div>
    )
}