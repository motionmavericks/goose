import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Download } from "lucide-react"

const orders = [
  {
    id: "ORD001",
    event: "Tech Conference 2024",
    customer: "John Doe",
    date: "2024-12-10",
    amount: "$599.00",
    status: "completed",
  },
  {
    id: "ORD002",
    event: "Design Workshop",
    customer: "Jane Smith",
    date: "2024-12-15",
    amount: "$299.00",
    status: "pending",
  },
  {
    id: "ORD003",
    event: "Marketing Summit",
    customer: "Bob Johnson",
    date: "2024-12-20",
    amount: "$799.00",
    status: "completed",
  },
  {
    id: "ORD004",
    event: "AI Symposium",
    customer: "Alice Brown",
    date: "2024-12-25",
    amount: "$499.00",
    status: "cancelled",
  },
  {
    id: "ORD005",
    event: "Startup Meetup",
    customer: "Charlie Wilson",
    date: "2024-12-30",
    amount: "$199.00",
    status: "pending",
  },
]

export default function OrdersPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Orders</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Manage and track your event ticket orders.
        </p>
      </div>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="-ml-4">
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-sm">{order.id}</TableCell>
                <TableCell>{order.event}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "success"
                        : order.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 