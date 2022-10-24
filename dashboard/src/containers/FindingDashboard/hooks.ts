/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios'
import { getScanId } from '../../utils/request'
import { IScanItem } from '../../utils/types/scanItem'
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [scans, setscans] = useState<IScanItem>();
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    const id = search.get('id');
    useEffect(() => {
        if (id) {
            setloading(true)
            getScanId(id).then((rawData: AxiosResponse<IScanItem>) => {
                setscans(rawData.data)
            }).catch(() => {
                toast.warn("error!")
            }).finally(() => setloading(false))
        }
    }, [id])
    return { loading, scans }
}