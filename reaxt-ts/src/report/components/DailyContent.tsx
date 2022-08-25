import {Link} from "react-router-dom";
import {TypeReportList} from "../type/reportList";


export const DailyContent = (report: TypeReportList) => {
    const {id, date} = report
    return (
        <div>
            <Link to={`${id}`}>
                <h1>{date}</h1>
            </Link>
        </div>
    )
}