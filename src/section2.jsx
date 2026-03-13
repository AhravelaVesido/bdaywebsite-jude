import InfiniteScroller from "./modules/InfiniteScroller"

export default function Carousel (){
    return(
        <section id="carousel" className="relative bg-[#A1B6C2] py-10"> 
            <div>
                    <InfiniteScroller/>
            </div>

    {/**stickers**/}

    <img src="https://i.ibb.co/4ZdmYDsj/rockmoss.png" alt="" className="absolute drop-shadow-lg md:left-[60%] left-[30%] md:bottom-[-20%] bottom-[-7%] rotate-[0deg] md:scale-[.5] scale-[.8] "/>
    
        </section>
    )
}