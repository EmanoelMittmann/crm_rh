import { useContext } from 'react'

import { List } from 'contexts'

const Jobs = () => {
  const {
    filterOptions,
    handleOrder,
    handleSearch,
    handleStatus,
    handleUpdateStatus
  } = useContext(List.Settings.Context)
  return <div>Jobs</div>
}

export default Jobs
