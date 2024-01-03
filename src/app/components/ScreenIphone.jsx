import Image from "next/image";


const ScreenIphone = (props)=>{
    return(
        <div className="relative">
            <div className="bg-gray-500 overflow-hidden w-[262px] h-[568px] rounded-3xl relative border-black border-8 shadow-gray-400 shadow-xl m-8">
                <div className="absolute z-10 top-2 left-1/2 -translate-x-1/2 w-[70px] h-[17px] bg-neutral-950 rounded-xl">
                    <div className="absolute z-20 top-1/2 right-0.5 -translate-y-1/2 w-3 h-3 bg-gradient-radial from-gray-900 to-gray-950 rounded-full"></div>
                </div>
                <div>
                    <Image src={props.src} fill alt="screenshot" loading="lazy"></Image> 
                </div>
            </div>
            <div className="absolute top-52 right-[30px] w-[2px] h-16 bg-black rounded-r-md"></div>
            <div className="absolute top-32 left-[30px] w-[2px] h-8 bg-black rounded-l-md"></div>
            <div className="absolute top-48 left-[30px] w-[2px] h-11 bg-black rounded-l-md"></div>
            <div className="absolute top-60 left-[30px] w-[2px] h-11 bg-black rounded-l-md"></div>
        </div>
    )
}

export default ScreenIphone;