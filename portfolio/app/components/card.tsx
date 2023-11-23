import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function LinkCard({ url, description, faIcon }: { url: string; description: string; faIcon: IconDefinition; animationDelay: number; }) {
    return (
        <a href={url} target="_blank"
            rel="noopener noreferrer" className="block max-w-sm p-6 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-72 text-center contact-hover">
            <FontAwesomeIcon icon={faIcon} size="2xl" />
            <h5 className="mt-3">{description}</h5>
        </a>
    )
}