import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import {
  UsersIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  RectangleGroupIcon,
  LinkIcon,
  RectangleStackIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { AiOutlineHome } from 'react-icons/ai';
import { SiGraphql } from 'react-icons/si';
import { MdOutlineDashboard } from 'react-icons/md';
export const items = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: AiOutlineHome,
    childs: [
      {
        name: 'Invoices',
        href: '/dashboard/invoices',
        childs: [
          {
            name: 'Customers',
            href: '/dashboard/customers',
            childs: [
              {
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
export const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartBarIcon,
    roles: ['Admin', 'user', 'List'],
  },
  {
    name: 'customers',
    href: '/dashboard/customers',
    icon: UsersIcon,
    roles: ['Admin'],
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: ShoppingBagIcon,
    roles: ['Admin'],
  },
  {
    name: 'Roles',
    href: '/dashboard/roles',
    icon: ShieldCheckIcon,
    roles: ['Admin'],
  },
  {
    name: 'Clients Managements',
    href: '/dashboard/ClientsManagment/isps',
    icon: RectangleGroupIcon,
    roles: ['Admin', 'List'],
    childs: [
      {
        name: 'ISPs',
        href: '/dashboard/ClientsManagment/isps',
      },
      {
        name: 'Data Providers',
        href: '/dashboard/ClientsManagment/dataProviders',
      },
      {
        name: 'Verticals',
        href: '/dashboard/ClientsManagment/verticals',
      },
      {
        name: 'Data Lists',
        href: '/dashboard/ClientsManagment/DataList',
        childs: [
          {
            name: 'Manage Data Lists',
            href: '/dashboard/ClientsManagment/DataList',
          },
          {
            name: 'Fetch Blacklists Emails',
            href: '/dashboard/ClientsManagment/fetchBlacklistsEmails',
          },
          {
            name: 'Manage Blacklists',
            href: '/dashboard/ClientsManagment/manageBlacklists',
          },
        ],
      },
    ],
  },
  {
    name: 'Servers Management',
    href: '/dashboard/tools/list',
    icon: ServerStackIcon,
    roles: ['Admin', 'user'],
    childs: [
      {
        name: 'Server Providers',
        href: '/dashboard/ServerManagment/ServerProviders',
      },
      {
        name: 'Smtp Servers',
        href: '/dashboard/ServerManagment/SmtpServers',
      },
      {
        name: 'Smtp Users',
        href: '/dashboard/ServerManagment/SmtpUsers',
      },
    ],
  },
  {
    name: 'Affiliate Networks',
    href: '/dashboard/AffiliateNetworks',
    icon: LinkIcon,
    roles: ['Admin', 'user'],
  },
  {
    name: 'Offers',
    href: '/dashboard/tools/list',
    icon: RectangleStackIcon,
    roles: ['Admin', 'user'],
    childs: [
      {
        name: 'Creatives',
        href: '/dashboard/Offers/Creatives',
      },
      {
        name: 'Offers',
        href: '/dashboard/Offers/Offers',
      },
      {
        name: 'From Names',
        href: '/dashboard/Offers/FromNames',
      },
      {
        name: 'Subjects',
        href: '/dashboard/Offers/Subjects',
      },
    ],
  },
  {
    name: 'Production',
    href: '/dashboard/SendPage/page',
    icon: PaperAirplaneIcon,
    roles: ['Admin', 'user'],
    childs: [
      {
        name: 'Send Page',
        href: '/dashboard/SendPage/page',
      },
    ],
  },
  {
    name: 'PMTA Management',
    href: '/dashboard/pmtaManagement',
    icon: SiGraphql,
    roles: ['Admin', 'user'],
  },
  {
    name: 'DNS Management',
    href: '/dashboard/DnsManagment/Go-dady-accounts',
    icon: MdOutlineDashboard,
    roles: ['Admin', 'List'],
    childs: [
      {
        name: 'GO Dady accounts',
        href: '/dashboard/DnsManagment/Go-dady-accounts',
      },
      {
        name: 'Names Sheap',
        href: '/dashboard/DnsManagment/Names-sheap',
      },
      {
        name: 'Domains',
        href: '/dashboard/DnsManagment/Domains/Domain-list',
        childs: [
          {
            name: 'Domain List',
            href: '/dashboard/DnsManagment/Domains/Domain-list',
          },
          {
            name: 'Manage domain record',
            href: '/dashboard/DnsManagment/Domains/Manage-Domain-record',
          },
        ],
      },
    ],
  },
];
