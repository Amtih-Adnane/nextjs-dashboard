import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col sm:flex-row sm:overflow-hidden">
      <div className="w-full flex-none sm:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 sm:overflow-y-auto">{children}</div>
    </div>
  );
}
