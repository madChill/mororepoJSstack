/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { toast } from 'react-toastify';

import { addScan } from '../../utils/request'
import { IScanItemCreate } from '../../utils/types/scanItem'
import { useFormik } from 'formik'
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);

    const initialValues: IScanItemCreate = { Status: null, 
        RepositoryName: '', 
        Findings: '{ "findings": []}',
        QueuedAt: '2022-10-23T18:40',
        ScanningAt: '2022-10-23T18:40',
        FinishedAt: '2022-10-23T18:40',
    };
    const onSubmit = (values:IScanItemCreate) => {
        setloading(true)
        return addScan(values).then(()=> {
            toast.success("success")
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik<IScanItemCreate>({
        initialValues: initialValues,
        onSubmit: onSubmit,
      });
    
    return { formik, loading } 
}