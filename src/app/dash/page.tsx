import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const information = {
  orders: {
    total: 0,
    completed: 0,
    inWork: 0,
  },
};

export default function page() {
  return (
    <main className="grid grid-cols-12 w-full p-8 grid-rows-[auto_1fr] gap-4">
      <div className="col-span-full">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Monitor and manage your orders</p>
      </div>

      <Card className="col-span-4 rounded-lg h-[150px] max-w-[320px]">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800 font-medium flex gap-2 items-center">
            <ShoppingBag size={20} /> Orders
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">{information.orders.total}</h2>
            <p className="text-gray-500">Total</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{information.orders.inWork}</h2>
            <p className="text-gray-500">In work</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{information.orders.completed}</h2>
            <p className="text-gray-500">Completed</p>
          </div>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
