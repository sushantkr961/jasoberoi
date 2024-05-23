// "use client"
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// type AdminInfo = {
//   userCount: number;
//   postCount: number;
//   recentActivity: string[];
// };

// type Props = {
//   isAuthenticated: boolean;
//   isAdmin: boolean;
// };

// const AdminDashboard = ({ isAuthenticated, isAdmin }: Props) => {
//   const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated || !isAdmin) {
//       router.push("/login");
//     } else {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get("/api/admin/dashboard");
//           setAdminInfo(response.data);
//         } catch (error) {
//           console.error("Failed to fetch admin data:", error);
//         }
//       };

//       fetchData();
//     }
//   }, [isAuthenticated, isAdmin, router]);

//   if (!isAuthenticated || !isAdmin) {
//     return <div>Redirecting...</div>;
//   }

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {adminInfo ? (
//         <div>
//           <p>Total Users: {adminInfo.userCount}</p>
//           <p>Total Posts: {adminInfo.postCount}</p>
//           <p>Recent Activities:</p>
//           <ul>
//             {adminInfo.recentActivity.map((activity, index) => (
//               <li key={index}>{activity}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading admin information...</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page</div>
  )
}

export default page