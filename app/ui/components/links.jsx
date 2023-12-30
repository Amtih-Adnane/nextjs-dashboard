import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { AiOutlineHome } from 'react-icons/ai';

export const links = [
  {
    id: 1,
    name: 'Home',
    href: '/dashboard',
    icon: AiOutlineHome,
    childs: [
      {
        id: 1.1,
        name: 'Invoices',
        href: '/dashboard/invoices',
        childs: [
          {
            id: 1.2,
            name: 'Customers',
            href: '/dashboard/customers',
            childs: [
              {
                id: 1.3,
                name: 'Customers 2',
                href: '/dashboard/customers2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];
//
// export const items = [
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: (
//       <SvgIcon fontSize="small">
//         <ChartBarIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user", "List"],
//   },
//   {
//     title: "Users",
//     path: "/users",
//     icon: (
//       <SvgIcon fontSize="small">
//         <UsersIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin"],
//   },
//   {
//     title: "Teams",
//     path: "/teams",
//     icon: (
//       <SvgIcon fontSize="small">
//         <ShoppingBagIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin"],
//   },
//   {
//     title: "Roles",
//     path: "/roles",
//     icon: (
//       <SvgIcon fontSize="small">
//         <ShieldCheckIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin"],
//   },
//   {
//     title: "Clients Managements",
//     path: "/ClientsManagment/isps",
//     icon: (
//       <SvgIcon fontSize="small">
//         <RectangleGroupIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "List"],
//     childs: [
//       {
//         title: "ISPs",
//         path: "/ClientsManagment/isps",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Data Providers",
//         path: "/ClientsManagment/dataProviders",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Verticals",
//         path: "/ClientsManagment/verticals",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Data Lists",
//         path: "/ClientsManagment/DataList",
//         icon: (
//           <SvgIcon fontSize="small">
//             <ChartBarIcon />
//           </SvgIcon>
//         ),
//         secondChilds: [
//           {
//             title: "Manage Data Lists",
//             path: "/ClientsManagment/DataList",
//             icon: (
//               <SvgIcon fontSize="small">
//                 <ChartBarIcon />
//               </SvgIcon>
//             ),
//           },
//           {
//             title: "Fetch Blacklists Emails",
//             path: "/ClientsManagment/fetchBlacklistsEmails",
//             icon: (
//               <SvgIcon fontSize="small">
//                 <ChartBarIcon />
//               </SvgIcon>
//             ),
//           },
//           {
//             title: "Manage Blacklists",
//             path: "/ClientsManagment/manageBlacklists",
//             icon: (
//               <SvgIcon fontSize="small">
//                 <ChartBarIcon />
//               </SvgIcon>
//             ),
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Servers Management",
//     path: "/tools/list",
//     icon: (
//       <SvgIcon fontSize="small">
//         <ServerStackIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user"],
//     childs: [
//       {
//         title: "Server Providers",
//         path: "/ServerManagment/ServerProviders",
//       },
//       {
//         title: "Smtp Servers",
//         path: "/ServerManagment/SmtpServers",
//       },
//       {
//         title: "Smtp Users",
//         path: "/ServerManagment/SmtpUsers",
//       },
//     ],
//   },
//   {
//     title: "Affiliate Networks",
//     path: "/AffiliateNetworks",
//     icon: (
//       <SvgIcon fontSize="small">
//         <LinkIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user"],
//   },
//   {
//     title: "Offers",
//     path: "/tools/list",
//     icon: (
//       <SvgIcon fontSize="small">
//         <RectangleStackIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user"],
//     childs: [
//       {
//         title: "Creatives",
//         path: "/Offers/Creatives",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Offers",
//         path: "/Offers/Offers",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "From Names",
//         path: "/Offers/FromNames",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Subjects",
//         path: "/Offers/Subjects",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//     ],
//   },
//   {
//     title: "Production",
//     path: "/SendPage/page",
//     icon: (
//       <SvgIcon fontSize="small">
//         <PaperAirplaneIcon />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user"],
//     childs: [
//       {
//         title: "Send Page",
//         path: "/SendPage/page",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//     ],
//   },
//   {
//     title: "PMTA Management",
//     path: "/pmtaManagement",
//     icon: (
//       <SvgIcon fontSize="small">
//         <SiGraphql />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "user"],
//   },
//   {
//     title: "DNS Management",
//     path: "/DnsManagment/Go-dady-accounts",
//     icon: (
//       <SvgIcon fontSize="small">
//         <MdOutlineDashboard />
//       </SvgIcon>
//     ),
//     roles: ["Admin", "List"],
//     childs: [
//       {
//         title: "GO Dady accounts",
//         path: "/DnsManagment/Go-dady-accounts",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Names Sheap",
//         path: "/DnsManagment/Names-sheap",
//         icon: (
//           <SvgIcon fontSize="small">
//             <CogIcon />
//           </SvgIcon>
//         ),
//       },
//       {
//         title: "Domains",
//         path: "/DnsManagment/Domains/Domain-list",
//         icon: (
//           <SvgIcon fontSize="small">
//             <ChartBarIcon />
//           </SvgIcon>
//         ),
//         secondChilds: [
//           {
//             title: "Domain List",
//             path: "/DnsManagment/Domains/Domain-list",
//             icon: (
//               <SvgIcon fontSize="small">
//                 <ChartBarIcon />
//               </SvgIcon>
//             ),
//           },
//           {
//             title: "Manage domain record",
//             path: "/DnsManagment/Domains/Manage-Domain-record",
//             icon: (
//               <SvgIcon fontSize="small">
//                 <ChartBarIcon />
//               </SvgIcon>
//             ),
//           },
//         ],
//       },
//     ],
//   },
// ];
