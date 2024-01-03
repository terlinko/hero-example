import Image from "next/image"
import AppStoreButton from "./AppStoreButton"

const HeroSection = ()=>{
    return(
        <section className="min-h-screen w-full flex flex-col justify-center items-center pb-16 bg-white">
            <div className="min-w-fit flex flex-wrap items-center justify-center">
                <div className="relative p-4 w-64 h-64 sm:w-32 sm:h-32">
                    <Image className="rounded-3xl" src={'/logo-3.png'} fill sizes="(max-width: 256px)" alt='logo' />
                </div>
                <div className="text-2xl p-4">
                    <span className="text-3xl font-extrabold">대한민국을<br />티셔츠에 담으세요</span>
                    <br />
                    <span>
                        Korea T-shirt Shop
                    </span>
                </div>
            </div>
            <AppStoreButton />
        </section>
    )
}

export default HeroSection