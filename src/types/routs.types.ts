// export const adminRoutes = [
//     {
//       title: "User Management of Admin",
     
//       items: [
//         {
//           title: "Analytics Of Admin",
//           url: "/admin/analytics",
//         },
       
//       ],
//     },
   
// ]
  
export interface Route {
    title: string;
       items: {
        title: string;
        url: string;
      }[];
}