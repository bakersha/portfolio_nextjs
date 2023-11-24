import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function BackButton() {
    return (
        <div className="mb-5">
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} size='lg' className="icon-jump" /></a>
        </div>
    )
}