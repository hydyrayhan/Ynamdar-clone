import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


function AdminDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-gray-50 dark:bg-black/90 p-4">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <SidebarTrigger />
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="border">CN</AvatarFallback>
            </Avatar>
            <ModeToggle />
          </div>
        </header>
        <div className="px-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <Button className="bg-orange-600 dark:text-white">Add New</Button>
          </div>

          <div className="mt-5 overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell className="text-center">Paid</TableCell>
                  <TableCell className="text-center">Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell className="text-center">Paid</TableCell>
                  <TableCell className="text-center">Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell className="text-center">Paid</TableCell>
                  <TableCell className="text-center">Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default AdminDashboard;