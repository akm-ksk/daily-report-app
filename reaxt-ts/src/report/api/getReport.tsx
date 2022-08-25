import {TypeReportList} from "../type/reportList";
import {TypeReportDetail} from "../type/reportDetail";
import {TypeReportCategoryList} from "../type/reportCategoryList";

const toJson = async (res: any) => {
    const json = await res.json();
    if (res.ok) {
        return json;
    } else {
        throw new Error(json.message);
    }
}

export const getReportAll = async () => {
    const res = await fetch('http://localhost:8000/report/')
    const json = await res.json()

    return json as TypeReportList[], null
}

export const getReportDetail = async (id: string) => {
    const response = await fetch(`http://localhost:8000/report/${id}`, {
        method: 'GET',
    })
    return await response.json() as TypeReportDetail
}


export const getCategory = async (category: string) => {
    const response = await fetch(`http://localhost:8000/report/${category}`, {
        method: 'GET',
    })
    return await response.json() as TypeReportCategoryList
}