'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Package, LayoutDashboard, DollarSign, ShoppingCart, Star, Play } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage(props: { id: number; overviewData: { products: number; revenue: string; orders: number; feedback: number } }) {
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
                <h3 className="font-bold text-2xl">{props.overviewData.products}</h3>
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
                <h3 className="font-bold text-2xl">${props.overviewData.revenue}</h3>
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
                <h3 className="font-bold text-2xl">{props.overviewData.orders}</h3>
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
                <h3 className="font-bold text-2xl flex items-center gap-2">
                  {props.overviewData.feedback} / 5 <Star size={20} />
                </h3>
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
      <main className="grid grid-cols-12 w-full p-8 grid-rows-[auto_1fr] mt-[65px] gap-y-2">
        <div className="col-span-full">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-500">Monitor and manage your products</p>
        </div>

        <div className="col-span-full flex gap-4">
          <Card className="col-span-4 rounded-lg pt-6 w-full aspect-square h-auto flex flex-col">
            <CardContent className="justify-start gap-4 flex flex-col">
              <div className="h-[200px] aspect-video rounded-md bg-blue-200 flex items-center justify-center mx-auto">
                {/* <div className="flex justify-between w-full p-4">
                  <Play size={16} fill="#000" transform="rotate(180)" />
                  <Play size={16} fill="#000" />
                </div> */}
              </div>
              <div className="w-[355.547px] mx-auto">
                <h2 className="text-lg text-gray-600 font-bold">Product Title</h2>
                <p className="text-gray-500 leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus doloremque dolor perspiciatis iusto possimus sit eveniet natus labore minima
                  architecto totam laudantium perferendis amet aliquam, omnis tempora, commodi nesciunt.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-4 rounded-lg pt-6 w-full aspect-square h-auto flex flex-col">
            <CardContent className="justify-start gap-4 flex flex-col">
              <div className="h-[200px] aspect-video rounded-md bg-blue-200 flex items-center justify-center mx-auto">
                {/* <div className="flex justify-between w-full p-4">
                  <Play size={16} fill="#000" transform="rotate(180)" />
                  <Play size={16} fill="#000" />
                </div> */}
              </div>
              <h2 className="text-lg text-gray-600 font-bold">Product Title</h2>
            </CardContent>
          </Card>

          <Card className="col-span-4 rounded-lg pt-6 w-full aspect-square h-auto flex flex-col">
            <CardContent className="justify-start gap-4 flex flex-col">
              <div className="h-[200px] aspect-video rounded-md bg-blue-200 flex items-center justify-center mx-auto">
                {/* <div className="flex justify-between w-full p-4">
                  <Play size={16} fill="#000" transform="rotate(180)" />
                  <Play size={16} fill="#000" />
                </div> */}
              </div>
              <h2 className="text-lg text-gray-600 font-bold">Product Title</h2>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  } else if (props.id === 3) {
    return <div>3</div>;
  }
}
