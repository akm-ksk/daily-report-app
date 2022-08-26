import {TypeReportItem} from "../type/reportItem";

export const ReportItem = (props: TypeReportItem) => {
    const {title, text} = props

    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}