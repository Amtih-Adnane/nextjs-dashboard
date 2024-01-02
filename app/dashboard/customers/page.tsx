import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Customers ',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const data = await fetchCustomers();
  return (
    // <div className="w-full">
    //   <div className="flex w-full items-center justify-between">
    //     <h1 className={`text-2xl`}>Customers </h1>
    //   </div>
    <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
      <Table customers={data} />
    </Suspense>
    //   <div className="mt-5 flex w-full justify-end">
    //     <Pagination totalPages={totalPages} />
    //   </div>
    // </div>
  );
}
