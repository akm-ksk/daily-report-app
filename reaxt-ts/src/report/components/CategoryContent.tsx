/** @jsxImportSource @emotion/react */
import {reportCategoryItem} from "../type/reportCategoryItem";
import {css} from "@emotion/react";

export const CategoryContent = (props: reportCategoryItem) => {
    const {date, content} = props
    return (
        <>
            {
                content ?
                    <li>
                        <h2 css={title}>{date}</h2>
                        <p>{content}</p>
                    </li>
                    :
                    null
            }
        </>
    )
}

const title = css({
    margin: '0 0 15px',
})