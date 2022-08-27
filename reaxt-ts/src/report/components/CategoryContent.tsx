import {reportCategoryItem} from "../type/reportCategoryItem";

export const CategoryContent = (props: reportCategoryItem) => {
    const {date, content} = props
    return (
        <div>
            {content ? <h2>{date}</h2> : null}
            {content ? <p>{content}</p> : null}
        </div>
    )
}