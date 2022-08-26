import {Link} from "react-router-dom";
import {TypeReportList} from "../type/reportList";


export const DailyContent = (report: TypeReportList) => {
    const {id, date} = report
    return (
        <Link to={`${id}/`}>
            <h2>{date}</h2>
        </Link>
    )
}