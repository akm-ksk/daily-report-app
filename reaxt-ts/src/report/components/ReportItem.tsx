/** @jsxImportSource @emotion/react */
import {TypeReportItem} from "../type/reportItem";
import {css} from "@emotion/react";

export const ReportItem = (props: TypeReportItem) => {
    const {title, text} = props

    return (
        <div>
            <h2 css={titleStyle}>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

const titleStyle = css({
    margin: '0 0 15px',
})