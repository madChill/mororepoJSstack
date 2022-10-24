import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { Label, Table, Loader, Dimmer } from 'semantic-ui-react'

import { uselogicForm } from './hooks';

const FindingDashboard: React.FC<{}> = () => {
  const { loading, scans } = uselogicForm()
  return loading ? (<Dimmer active>
    <Loader />
  </Dimmer>) : (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>RuleId</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Severity</Table.HeaderCell>
          <Table.HeaderCell>Path </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {!isEmpty(scans?.Findings.findings)&&scans?.Findings.findings.map((item, index: number) => {
          return (<Table.Row key={index}>
            <Table.Cell>
              <Label ribbon>{item.ruleId}</Label>
            </Table.Cell>
            <Table.Cell>{item.metadata?.description}</Table.Cell>
            <Table.Cell>{item.metadata?.severity}</Table.Cell>
            <Table.Cell><>{item.location?.path}:{item?.location?.positions?.begin.line}</></Table.Cell>
          </Table.Row>)
        })}

      </Table.Body>
    </Table>
  )
}

FindingDashboard.prototype = {

}

export default FindingDashboard