import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function LinkCard({ url, description, faIcon }: { url: string; description: string; faIcon: IconDefinition; }) {
    return (
        <a href={url} target="_blank"
            rel="noopener noreferrer" className="flex flex-col items-center relative p-6 rounded-md 
                dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 contact-hover ">
            <FontAwesomeIcon icon={faIcon} size="2xl" />
            <h5>{description}</h5>
        </a>
    )
}