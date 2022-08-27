import {Link} from "react-router-dom";

export const CategoryList = () => {
    return (
        <ul>
            <li>
                <Link to="/report/category/work/">仕事</Link>
                <Link to="/report/category/study/">勉強</Link>
                <Link to="/report/category/good/">よかったこと</Link>
                <Link to="/report/category/bad/">悪かったこと</Link>
                <Link to="/report/category/improvement/">改善</Link>
                <Link to="/report/category/word/">ひとこと</Link>
            </li>
        </ul>
    )
}