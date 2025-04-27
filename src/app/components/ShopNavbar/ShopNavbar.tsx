
export default function ShopNavbar(){
    return(
        <>
        <div className="flex gap-[100px] w-full h-[150px] items-start justify-center p-[5vmin] mb-[3vmin]">
            <div className="flex flex-col items-center group">
                <div className="w-[7vw] flex justify-center">Material</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryA</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryB</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryC</div>
            </div>
            <div className="flex flex-col items-center group">
                <div className="w-[7vw] flex justify-center">Type</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryA</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryB</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryC</div>
            </div>
            <div className="flex flex-col items-center group">
                <div className="w-[7vw] flex justify-center">Artist</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryA</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryB</div>
                <div className="hidden group-hover:block w-[7vw] flex justify-center text-gray-500 hover:text-black">CategoryC</div>
            </div>
        </div>

        

        </>
    )
}