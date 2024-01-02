import SideNav from '@/app/ui/dashboard/sidenav';
import Sidebar from '@/app/ui/components/Sidebar';
import Header from '../ui/components/NavBar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content p-6">{children}</main>;
    </div>
  );
}
