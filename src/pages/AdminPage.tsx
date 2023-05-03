import React from 'react'
import AdminLaylout from '../layouts/AdminLaylout'
import DashboardContainer from '../components/adminDashboard/DashboardContainer'
import BodyAdmin from '../components/main/BodyAdmin'

function AdminPage() {
  return (
    <>
      <AdminLaylout>
        <BodyAdmin>
          <DashboardContainer/>
        </BodyAdmin>
      </AdminLaylout>
    </>
  )
}
// export function getServerSideProps(ctx) {
//   const authSession = getAuthSession(ctx);
//   if (!authSession) {
//     return {
//       redirect: {
//         destination: "/LoginPage",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       user: authSession.user,
//     },
//   };
// }


export default AdminPage