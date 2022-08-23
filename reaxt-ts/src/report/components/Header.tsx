import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">TOP</Link>
                    </li>
                    <li>
                        <Link to="/report">Report</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
