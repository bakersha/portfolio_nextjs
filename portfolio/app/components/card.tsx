import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function LinkCard({ url, description, faIcon }: { url: string; description: string; faIcon: IconDefinition }) {
    return (
        <a href={url} target="_blank"
            rel="noopener noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-md shadow 
                hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-72 text-center">
            <FontAwesomeIcon icon={faIcon} size="2xl" />
            <h5 className="mt-3">{description}</h5>
        </a>
    )
}