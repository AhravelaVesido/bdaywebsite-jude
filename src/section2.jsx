import InfiniteScroller from "./modules/InfiniteScroller"

export default function Carousel (){
    return(
        <section id="carousel" className="relative bg-[#A1B6C2] py-10"> 
            <div>
                    <InfiniteScroller/>
            </div>
        </section>
    )
}