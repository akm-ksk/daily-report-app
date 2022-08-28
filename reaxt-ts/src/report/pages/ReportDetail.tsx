import {useEffect, useState} from "react";
import {TypeReportDetail} from "../type/reportDetail";
import {useParams} from "react-router-dom";
import {ReportItem} from "../components/ReportItem";

export const ReportDetail = () => {
    const [detail, setDetail] = useState<TypeReportDetail>()
    const {id} = useParams()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const get = (async () => {
            const res = await fetch(`http://localhost:8000/report/${id}/`)
            const json = await res.json()
            setDetail(json)
        })()
    }, [id])

    return (
        <div>
            <h1>{detail?.id ? detail?.date : 'レポートが存在しません'}</h1>
            {detail?.work ? <ReportItem title="仕事" text={detail.work}/> : null}
            {detail?.study ? <ReportItem title="勉強" text={detail.study}/> : null}
            {detail?.good ? <ReportItem title="よかったこと" text={detail.good}/> : null}
            {detail?.bad ? <ReportItem title="悪かったこと" text={detail.bad}/> : null}
            {detail?.improvement ? <ReportItem title="改善" text={detail.improvement}/> : null}
            {detail?.word ? <ReportItem title="ひとこと" text={detail.word}/> : null}
        </div>
    )
}