import InfiniteScroller from "./modules/InfiniteScroller"

export default function Carousel (){
    return(
        <section id="carousel" className="relative bg-[#8fa8a0] py-10"> 
            <div>
                    <InfiniteScroller/>
            </div>
        </section>
    )
}