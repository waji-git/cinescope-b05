import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Moviestable() {
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[140px]">Id</TableHead>
          <TableHead className="w-[140px]">Title</TableHead>
          <TableHead className="w-[140px]">Year</TableHead>
          <TableHead className="w-[140px]">Genre</TableHead>
          <TableHead className="w-[140px]">Rating</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead className="w-[140px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
      <TableFooter>
        <TableRow>
          {/* <TableCell colSpan={3}></TableCell>
          <TableCell ></TableCell> */}
        </TableRow>
      </TableFooter>
    </Table>
  );
}


