import { Link } from "react-router-dom"

export function  LinkComponent({linkUrl, linkText}){
    return(
        <li className="inline-block">
            <Link to={linkUrl} className="hover:text-orange-500">{linkText}</Link>
        </li>
    )
}