import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Orders(){
    const { userId } =await auth();

    if(!userId) {
        return redirect('/')
    }

    const orders = await getMyOrders(userId);

    return (
    <div className="flex bg-[url('/shopbg/AIChatbotConcept01.png')] bg-contain bg-center bg-no-repeat  flex-col items-center justify-center min-h-screen px-4">
        <div className=" mt-[17vw] mb-[10vh] sm:px-8 rounded-xl  w-full max-w-4xl">
            <h3 className="text-2xl px-10 sm:px-6 pb-4 font-bold text-gray-900 tracking-tight mb-4">
                Past Orders
            </h3>


            {orders.length === 0 ? (
                <div className="text-center text-gray-600">
                        <p>You have not placed any orders yet.</p>
                </div>
            ):(

                <div className="space-y-6 sm:space-y-8">
                    {orders.map((order)=>(
                    <div key={order.orderNumber}
                    className="bg-white border p-6 sm:p-10 overflow-hidden backdrop-blur-xl shadow-[0_1px_6px_rgba(0,0,0,0.1),inset_0px_0px_5px_2px_rgba(0,0,0,0.10)]  rounded-3xl bg-[rgba(122,122,122,0.1)] "
                    >
                <div className="border-b border-gray-800">
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-2">
                        <div>
                            <p className="text-sm text-gray-600 mb-1 font-bold">
                                Order Number
                            </p>

                            <p className="font-mono text-sm text-gray-600 break-all">
                                {order.orderNumber}
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <p className="text-sm text-gray-600 mb-1 font-bold">
                                Order Date
                            </p>

                            <p className=" text-sm text-gray-600 break-all">
                                {order.orderDate
                                    ? new Date(order.orderDate).toLocaleDateString()
                                    : 'N/A'}
                            </p>

                         </div>
                    </div>
                </div>


            <div className=" py-3  sm:py-4 border-b border-gray-800">
                

                <div className="">
                    {order.products?.map((product)=>(
                        <div
                        key={product.product?._id}
                        className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-3 py-2 border-b border-gray-300 last:border-b-0"
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                {product.product?.productimage?.[0].asset && (
                                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 rounded-md overflow-hidden">
                                    <Image
                                    src={urlFor(product.product?.productimage?.[0].asset).url()}
                                    alt={product.product.name ?? "Product Image"}
                                    fill
                                    />
                                    </div>
                                )}

                                <div>
                                    <p className="font-medium text-sm sm:text-base">
                                        {product.product?.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                       Quantity:{product.quantity ?? "N/A"} 
                                    </p>
                                </div>

                                <p className="font-medium text-right">
                                    {product.product?.price && product.quantity
                                    ? formatCurrency(
                                        product.product.price * product.quantity, 
                                        order.currency
                                    )
                                    : "N/A"}
                                </p>

                                
                            </div>
                            
                        </div>
                    ))}

                </div>


            </div>


            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start pt-4 sm:pt-6  border-gray-200">
                    <div className="flex items-center gap-2">
                            <span className="text-base ">Status:</span>
                            <span
                             className={`px-2 py-0.5 rounded-sm text-base ${
                                order.status ==="paid"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                             }`}
                            >
                                {order.status}
                            </span>

                            
                    </div>

                    <div className="sm:text-right">
                            <h3 className="text-base text-gray-800 mb-1">Total Amount</h3>    
                             <p className="font-bold text-lg">
                                {formatCurrency(order.totalPrice ?? 0, order.currency)}
                             </p>
                    </div>
                </div>
            
                


            </div>
            ))}
                </div>
            )}
 
        </div>
    </div>
    );
}