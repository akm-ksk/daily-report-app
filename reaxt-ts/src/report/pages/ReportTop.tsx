import {SVGProps, useEffect, useState} from "react";
import {TypeReportList} from "../type/reportList";
import {DailyContent} from "../components/DailyContent";

export const ReportTop = () => {
    const [reports, setReports] = useState<TypeReportList[]>()
    useEffect(() => {
        const get = (async () => {
            const res = await fetch('http://localhost:8000/report/')
            const json = await res.json()
            setReports(json)
        })()
    }, [])
    return (
        <>
            {reports?.map(report => <DailyContent key={report.id} {...report} />)}
        </>
    )
}
