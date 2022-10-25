import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table, Loader,
   PaginationProps, Dimmer, Pagination } from 'semantic-ui-react'
import { timeStampPredict, countFinding } from '../../utils/helpers';
import { IScanItem } from '../../utils/types/scanItem';
import { uselogicForm } from './hooks';

const FormScan: React.FC<{}> = () => {
  const { loading, setPage, scans, total } = uselogicForm()
  return loading ? (<Dimmer active>
    <Loader />
  </Dimmer>) : (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Repository Name</Table.HeaderCell>
          <Table.HeaderCell>Scan Status</Table.HeaderCell>
          <Table.HeaderCell>Finding</Table.HeaderCell>
          <Table.HeaderCell>Timestamp</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {scans.map((item: IScanItem, index: number) => {
          return (<Table.Row>
            <Table.Cell>
              <Label ribbon>{item.RepositoryName}</Label>
              <Link to={`/finding?id=${item.id}`}>{item.RepositoryName}</Link>
            </Table.Cell>
            <Table.Cell>{item.Status}</Table.Cell>
            <Table.Cell><Label>
              <Icon name='file' color='yellow' /> {countFinding(item)}
            </Label></Table.Cell>
            <Table.Cell>{moment(timeStampPredict(item)).format('MM/DD/YYYY hh:ss')}</Table.Cell>
          </Table.Row>)
        })}

      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='4'>
            <Menu key={"menuPage"} floated='right' pagination>
              <Pagination defaultActivePage={0} totalPages={Number(total / 10)}
                onPageChange={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) => {
                  setPage(Number(data.activePage))
                }}
              />
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

FormScan.prototype = {

}

export default FormScan