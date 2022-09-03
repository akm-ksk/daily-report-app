/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CategoryContent} from "../components/CategoryContent";
import {reportCategoryItem} from "../type/reportCategoryItem";
import {CategoryList} from "../components/CategoryList";
import {mainSec} from "../css/mainSec";
import {listStyle} from "../css/listStyle";

export const CategoryView = () => {
    const [reports, setReports] = useState<reportCategoryItem[]>()
    const {category} = useParams()


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const get = (async () => {
            const res = await fetch(`http://localhost:8000/report/${category}/`)
            const json = await res.json()
            setReports(json)
        })()
    }, [category])
    console.log(reports)

    return (
        <>
            <section css={mainSec}>
                <ul css={listStyle}>
                    {reports?.map(report => <CategoryContent key={report.date} {...report} />)}
                </ul>
                <CategoryList/>
            </section>

        </>
    )
}