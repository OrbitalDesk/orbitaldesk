/* eslint-disable @typescript-eslint/no-unused-vars */
import { Package, LayoutDashboard, DollarSign, ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage(props: { id: number; data: { products: number; revenue: string; orders: number, feedback: number } }) {
  if (props.id === 1) {
    return (
      <main className="grid grid-cols-12 w-full p-8 grid-rows-[auto_1fr] h-[2000px] mt-[65px] gap-y-2">
        <div className="col-span-full">
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-gray-500">Monitor and manage your account</p>
        </div>

        <div className="col-span-full flex gap-4">
          {/* PRODUCTS */}
          <Card className="col-span-4 rounded-lg h-[150px] pt-6 w-full">
            <CardContent className="flex justify-start gap-4 my-auto">
              <div className="h-14 w-14 rounded-md bg-blue-200 flex items-center justify-center">
                <Package size={20} />
              </div>
              <div>
                <p className="text-lg text-gray-600 font-medium">Products</p>
                <h3 className="font-bold text-2xl">{props.data.products}</h3>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-200 rounded-b-lg flex justify-center py-2">
              <p className="text-gray-600">Your listed products</p>
            </CardFooter>
          </Card>

          {/* REVENUE */}
          <Card className="col-span-4 rounded-lg h-[150px] pt-6 w-full">
            <CardContent className="flex justify-start gap-4 my-auto">
              <div className="h-14 w-14 rounded-md bg-blue-200 flex items-center justify-center">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="text-lg text-gray-600 font-medium">Revenue</p>
                <h3 className="font-bold text-2xl">${props.data.revenue}</h3>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-200 rounded-b-lg flex justify-center py-2">
              <p className="text-gray-600">Your total revenue</p>
            </CardFooter>
          </Card>

          {/* ORDERS */}
          <Card className="col-span-4 rounded-lg h-[150px] pt-6 w-full">
            <CardContent className="flex justify-start gap-4 my-auto">
              <div className="h-14 w-14 rounded-md bg-blue-200 flex items-center justify-center">
                <ShoppingCart size={20} />
              </div>
              <div>
                <p className="text-lg text-gray-600 font-medium">Orders</p>
                <h3 className="font-bold text-2xl">{props.data.orders}</h3>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-200 rounded-b-lg flex justify-center py-2">
              <p className="text-gray-600">Pending orders</p>
            </CardFooter>
          </Card>

          {/* FEEDBACK */}
          <Card className="col-span-4 rounded-lg h-[150px] pt-6 w-full">
            <CardContent className="flex justify-start gap-4 my-auto">
              <div className="h-14 w-14 rounded-md bg-blue-200 flex items-center justify-center">
                <Star size={20} />
              </div>
              <div>
                <p className="text-lg text-gray-600 font-medium">Feedback</p>
                <h3 className="font-bold text-2xl flex items-center gap-2">{props.data.feedback} / 5 <Star size={20} /></h3>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-200 rounded-b-lg flex justify-center py-2">
              <p className="text-gray-600">Pending orders</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    );
  } else if (props.id === 2) {
    return (
      <main className="grid grid-cols-12 w-full p-8 grid-rows-[auto_1fr] h-[2000px] mt-[65px] gap-y-2">
        <div className="col-span-full">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-500">Monitor and manage your products</p>
        </div>
      </main>
    );
  } else if (props.id === 3) {
    return <div>3</div>;
  }
}
