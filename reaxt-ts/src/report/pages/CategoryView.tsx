import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CategoryContent} from "../components/CategoryContent";
import {reportCategoryItem} from "../type/reportCategoryItem";

export const CategoryView = () => {
    const [reports, setReports] = useState<reportCategoryItem[]>()
    const {category} = useParams()
    

    useEffect(() => {
        const get = (async () => {
            const res = await fetch(`http://localhost:8000/report/${category}/`)
            const json = await res.json()
            setReports(json)
        })()
    }, [category])
    console.log(reports)

    return (
        <>
            {reports?.map(report => <CategoryContent key={report.date} {...report} />)}
        </>
    )
}