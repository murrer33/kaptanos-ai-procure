
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const Financials = () => {
  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', revenue: 4000, expense: 2400 },
    { month: 'Feb', revenue: 3000, expense: 1398 },
    { month: 'Mar', revenue: 2000, expense: 9800 },
    { month: 'Apr', revenue: 2780, expense: 3908 },
    { month: 'May', revenue: 1890, expense: 4800 },
    { month: 'Jun', revenue: 2390, expense: 3800 },
  ];

  const budgetData = [
    { name: 'Completion', budget: 80, spending: 65 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Financials</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Information */}
        <Card>
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" placeholder="e.g., Downtown Mall" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g., 123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalBudget">Total Budget</Label>
              <Input id="totalBudget" type="number" placeholder="500000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Input id="projectType" placeholder="e.g., Commercial" />
            </div>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Revenues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="revenueType">Revenue Type</Label>
              <Input id="revenueType" placeholder="e.g., Sales" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="revenueAmount">Amount</Label>
              <Input id="revenueAmount" type="number" placeholder="10000" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="revenueDate">Date</Label>
                <Input id="revenueDate" type="date" />
              </div>
            <div className="space-y-2">
              <Label htmlFor="revenueDesc">Description / Notes</Label>
              <Input id="revenueDesc" placeholder="Initial milestone" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="revenueProjectName">Project Name</Label>
              <Input id="revenueProjectName" placeholder="e.g., Downtown Mall" />
            </div>
            <Button>Add Revenue</Button>
          </CardContent>
        </Card>

        {/* Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="expenseCat">Expense Category</Label>
              <Input id="expenseCat" placeholder="e.g., Materials" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expenseAmount">Amount</Label>
              <Input id="expenseAmount" type="number" placeholder="5000" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="expenseDate">Date</Label>
                <Input id="expenseDate" type="date" />
              </div>
            <div className="space-y-2">
              <Label htmlFor="expenseDesc">Description / Notes</Label>
              <Input id="expenseDesc" placeholder="Cement purchase" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expenseProjectName">Project Name</Label>
              <Input id="expenseProjectName" placeholder="e.g., Downtown Mall" />
            </div>
            <Button>Add Expense</Button>
          </CardContent>
        </Card>
      </div>

       {/* Dashboards */}
      <Card>
        <CardHeader>
          <CardTitle>Dashboards</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h3 className="font-semibold mb-2">Monthly Revenue vs. Expense</h3>
                 <div className="h-300">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                        <Bar dataKey="expense" fill="#82ca9d" name="Expense" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Project Completion vs. Budget Spending</h3>
                 <div className="h-300">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={budgetData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="budget" fill="#8884d8" name="Budget" />
                    <Bar dataKey="spending" fill="#82ca9d" name="Spending" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Receivables */}
        <Card>
          <CardHeader>
            <CardTitle>Receivables</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From Whom</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Example Row */}
                <TableRow>
                  <TableCell>Client A</TableCell>
                  <TableCell>₺15,000</TableCell>
                  <TableCell>2024-08-15</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Payables */}
        <Card>
          <CardHeader>
            <CardTitle>Payables</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>To Whom</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Example Row */}
                <TableRow>
                  <TableCell>Supplier X</TableCell>
                  <TableCell>₺8,200</TableCell>
                  <TableCell>2024-08-10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Financials;
