/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios'
import { getScan } from '../../utils/request'
import { IGetResult } from '../../utils/types/resultGet'
import { IGetQuery } from '../../utils/types/getQuery'
import { IScanItem } from '../../utils/types/scanItem'
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [query, setquery] = useState<IGetQuery>({});
    const [scans, setscans] = useState<IScanItem[]>([]);
    const [total, settotal] = useState<number>(0);
    useEffect(() => {
        setloading(true)
        getScan(query).then((rawData: AxiosResponse<IGetResult<IScanItem>>) => {
            toast.success("success")
            setscans(rawData.data.data)
            settotal(rawData.data.total || 0)
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }, [query])
    const setPage = (page: number) => {
        setquery({...query, offset: (page-1) * 10})
    }

    return { loading, setPage, scans, total, query }
}