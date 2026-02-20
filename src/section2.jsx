import InfiniteScroller from "./modules/infiniteScroller"

export default function Carousel (){
    return(
        <section id="carousel" className="bg-[#A1B6C2]"> 
            <div>
                <hr className="border-dashed border-prim border-5" />
                    <InfiniteScroller/>
                <hr className="border-dashed border-prim border-5" />
            </div>
        </section>
    )
}