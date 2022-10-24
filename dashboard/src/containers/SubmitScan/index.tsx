import React from 'react'
import { Button, Loader, Form, Select, TextArea, DropdownProps, Dimmer } from 'semantic-ui-react'
import { optionStatus } from '../../utils/constants';

import { uselogicForm } from './hooks';

const FormScan: React.FC<{}> = () => {
  const { formik, loading } = uselogicForm()
  return loading?(<Dimmer active>
    <Loader />
  </Dimmer>):(
    <Form onSubmit={(e) => formik.handleSubmit(e)}>
      <Form.Field>
        <label>Status</label>
        <Select options={optionStatus} placeholder='First Name'
          name="Status"
          onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
            formik.setFieldValue('Status', data.value)
          }}
          />
      </Form.Field>
      <Form.Field>
        <label>Repository Name</label>
        <input placeholder='Repository Name'
          name="RepositoryName"
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Findings object</label>
        <TextArea placeholder='Findings'
          name="Findings"
          value={formik.values.Findings.toString()}
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>QueuedAt</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='QueuedAt' 
          name="QueuedAt"
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>ScanningAt</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='ScanningAt' 
          name="ScanningAt"
          onChange={formik.handleChange} />
      </Form.Field>
      <Form.Field>
        <label>FinishedAt</label>
        <input type="datetime-local" defaultValue={'2022-10-23T18:40'}
          placeholder='FinishedAt' 
          name="FinishedAt"
          onChange={formik.handleChange} />
      </Form.Field>
      <Button type='submit' >Submit</Button>
    </Form>
  )
}

FormScan.prototype = {

}

export default FormScan