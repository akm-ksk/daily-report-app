/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {TypeReportList} from "../type/reportList";
import {css} from "@emotion/react";


export const DailyContent = (report: TypeReportList) => {
    const {id, date} = report
    return (
        <li>
            <Link to={`${id}/`}>
                <h2 css={reportTitle}>{date} の日報</h2>
            </Link>
        </li>

    )
}

const reportTitle = css({
    color: '#525252',
})