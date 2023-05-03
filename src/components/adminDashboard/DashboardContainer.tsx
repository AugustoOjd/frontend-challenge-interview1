import React from 'react'
import TableAdmin from './TableAdmin'
import FormAdmin from './FormAdmin'


function DashboardContainer() {
  return (
    <div className='w-full overflow-y-auto flex flex-col justify-around items-center'>
        <TableAdmin/>
        <FormAdmin/>
    </div>
  )
}

export default DashboardContainer