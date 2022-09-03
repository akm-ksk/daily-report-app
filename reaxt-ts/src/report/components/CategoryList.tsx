/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {css} from "@emotion/react";

export const CategoryList = () => {
    return (
        <ul css={categoryList}>
            <li>
                <Link css={listItemA} to="/report/category/work/">仕事</Link>
            </li>
            <li>
                <Link css={listItemA} to="/report/category/study/">勉強</Link>
            </li>
            <li>
                <Link css={listItemA} to="/report/category/good/">よかったこと</Link>
            </li>
            <li>
                <Link css={listItemA} to="/report/category/bad/">悪かったこと</Link>
            </li>
            <li>
                <Link css={listItemA} to="/report/category/improvement/">改善</Link>
            </li>
            <li>
                <Link css={listItemA} to="/report/category/word/">ひとこと</Link>
            </li>
        </ul>
    )
}
const categoryList = css({
    display: 'grid',
    gap: '20px 0',
    borderRadius: '25px',
    padding: '25px ',
    backgroundColor: 'white',
})

const listItemA = css({
    color: '#000',
})

