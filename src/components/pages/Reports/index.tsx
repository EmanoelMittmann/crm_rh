import { useRef } from 'react'

import { List } from 'contexts'

import { IconExport } from 'components/atoms'
import { Modal, IReports } from 'components/molecules/Modais'
import { Filter, Table } from 'components/organisms'
import { AuthTemplate, ReleaseTemplate } from 'components/templates'

const Reports = () => {
  const ref = useRef<IReports>(null)

  return (
    <AuthTemplate>
      <List.Reports.Provider>
        <ReleaseTemplate
          title='Relatorios'
          arrow={true}
          btnText='Exportar Excel'
          Icon={<IconExport />}
          event={() => ref.current?.open(true)}
        >
          <Filter.Reports />
          <Table.Reports />
          <Modal.Report
            ref={ref}
            text='Selecione Empresa'
            placeholder='Empresa'
          />
        </ReleaseTemplate>
      </List.Reports.Provider>
    </AuthTemplate>
  )
}

export default Reports
