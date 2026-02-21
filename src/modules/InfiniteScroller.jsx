const medialinks = [
    "https://i.ibb.co/3yrjx0R7/received-1567663364230755.jpg",
    "https://i.ibb.co/YT8vWDc2/1769770885661.png",
    "https://i.ibb.co/1tZ3kYvd/received-3086062071600391.jpg",
    "https://i.ibb.co/yFDb6Q8z/received-2118981658872952.jpg",
    "https://i.ibb.co/PyNRkbb/received-4195379757382477.jpg",
    "https://i.ibb.co/r2BFqGzp/received-907694311649125.jpg",
    "https://i.ibb.co/3yXTLm5c/received-1614135666378584.jpg",
    "https://i.ibb.co/N6W9VPSn/received-1954973328563987.jpg",
    "https://i.ibb.co/RpJKrV8b/1769770816506.png",
    "https://i.ibb.co/LzGqn18F/received-888756213848188.jpg",
    "https://i.ibb.co/N6dyCn2y/received-898808565938001.jpg",
    "https://i.ibb.co/QjTZ7H39/received-1403885031381669.jpg",
    "https://i.ibb.co/zh2pRDNG/received-2720328038306688.jpg",
    "https://i.ibb.co/DDstYRw5/received-763826246145751.jpg",
    "https://i.ibb.co/gLJdpqch/Messenger-creation-1636926704344834.jpg"
]

const images = medialinks.map((item,index) => (
                <img key={index} src={item} alt="" className="w-30 md:w-60 aspect-square object-cover rounded-lg bg-white overflow-none"/>
            ))

export default function InfiniteScroller () {
    return(
        <div className="overflow-hidden">
            <div className="flex gap-3 p-3 md:gap-5 md:p-5 min-w-full animate-scroll ">
                {images}
                {images}
            </div>
        </div>
    )
}