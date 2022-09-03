/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react";
import {TypeReportList} from "../type/reportList";
import {DailyContent} from "../components/DailyContent";
import {CategoryList} from "../components/CategoryList";
import {mainSec} from "../css/mainSec";
import {listStyle} from "../css/listStyle";

export const ReportTop = () => {
    const [reports, setReports] = useState<TypeReportList[]>()
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const get = (async () => {
            const res = await fetch('http://localhost:8000/report/')
            const json = await res.json()
            setReports(json)
        })()
    }, [])
    return (
        <>
            <section css={mainSec}>
                <ul css={listStyle}>
                    {reports?.map(report => <DailyContent key={report.id} {...report} />)}
                </ul>
                <CategoryList/>
            </section>
        </>
    )
}


