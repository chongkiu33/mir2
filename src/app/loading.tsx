import Image from "next/image";

export default function Loading(){
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="custom-spin">
                <Image 
                    src="/logo9.svg"
                    alt="Home" 
                    width={50} 
                    height={50} 
                />
            </div>
        </div>
    )
}