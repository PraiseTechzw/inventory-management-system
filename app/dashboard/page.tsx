import type { Metadata } from "next"
import { ArrowRightIcon, Package2Icon, TruckIcon, Users2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard page for the inventory management system.",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your inventory.</p>
        </div>
        <Button>
          Download Report
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package2Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
            <TruckIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users2Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 since last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <Package2Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Stock Overview</CardTitle>
            <CardDescription>Monthly stock levels across all warehouses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart
                data={[
                  { name: "Jan", total: 1200 },
                  { name: "Feb", total: 1100 },
                  { name: "Mar", total: 1300 },
                  { name: "Apr", total: 1400 },
                  { name: "May", total: 1200 },
                  { name: "Jun", total: 1500 },
                  { name: "Jul", total: 1300 },
                  { name: "Aug", total: 1600 },
                  { name: "Sep", total: 1700 },
                  { name: "Oct", total: 1400 },
                  { name: "Nov", total: 1500 },
                  { name: "Dec", total: 1800 },
                ]}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#total)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest inventory movements and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="mr-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Stock Update</p>
                  <p className="text-sm text-muted-foreground">Added 100 units of Product XYZ</p>
                </div>
                <div className="ml-auto font-medium">+100</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 space-y-1">
                  <p className="text-sm font-medium leading-none">New Supplier</p>
                  <p className="text-sm text-muted-foreground">Onboarded Supplier ABC</p>
                </div>
                <div className="ml-auto font-medium">New</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Low Stock Alert</p>
                  <p className="text-sm text-muted-foreground">Product DEF below threshold</p>
                </div>
                <div className="ml-auto font-medium text-destructive">Alert</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Low Stock Items</CardTitle>
            <CardDescription>Items that require immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Product ABC</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell className="text-destructive">Critical</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product DEF</TableCell>
                  <TableCell>75</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell className="text-warning">Warning</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product XYZ</TableCell>
                  <TableCell>90</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell className="text-warning">Warning</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Stock Distribution</CardTitle>
            <CardDescription>Stock levels by warehouse location</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={[
                  { name: "Warehouse A", total: 1200 },
                  { name: "Warehouse B", total: 900 },
                  { name: "Warehouse C", total: 1600 },
                  { name: "Warehouse D", total: 1100 },
                ]}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

