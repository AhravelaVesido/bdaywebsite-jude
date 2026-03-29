const medialinks = [
    "https://i.ibb.co/3yrjx0R7/received-1567663364230755.jpg",
    "https://i.ibb.co/1tZ3kYvd/received-3086062071600391.jpg",
    "https://i.ibb.co/yFDb6Q8z/received-2118981658872952.jpg",
    "https://i.ibb.co/PyNRkbb/received-4195379757382477.jpg",
    "https://i.ibb.co/r2BFqGzp/received-907694311649125.jpg",
    "https://i.ibb.co/3yXTLm5c/received-1614135666378584.jpg",
    "https://i.ibb.co/N6W9VPSn/received-1954973328563987.jpg",
    "https://i.ibb.co/LzGqn18F/received-888756213848188.jpg",
    "https://i.ibb.co/N6dyCn2y/received-898808565938001.jpg",
    "https://i.ibb.co/QjTZ7H39/received-1403885031381669.jpg",
    "https://i.ibb.co/zh2pRDNG/received-2720328038306688.jpg",
    "https://i.ibb.co/DDstYRw5/received-763826246145751.jpg",
    "https://i.ibb.co/gLGTk7Nm/received-2111187566317028.jpg",
    "https://i.ibb.co/gMWdp5rn/received-1361721228337937.jpg",
    "https://i.ibb.co/TDqs6zsq/received-811455395263164.jpg",
    "https://i.ibb.co/bg0df3HP/Screenshot-20260329-201833-Messenger.jpg",
    "https://i.ibb.co/XZgQ9N36/Screenshot-20260329-201743-Messenger.jpg",
    "https://i.ibb.co/MDBMTrZx/received-1974479889771863.jpg",
    "https://i.ibb.co/Y4M4sB5Q/received-4457658854467761.jpg",
    "https://i.ibb.co/MkjH9xFb/Screenshot-20260329-201602-Messenger.jpg",
    "https://i.ibb.co/pv9t4ss1/received-1911748952717970.jpg",
    "https://i.ibb.co/tp9WWShZ/received-893093756573897.jpg",
    "https://i.ibb.co/nGmRnmh/received-4163964717250806.jpg",
    "https://i.ibb.co/Ng1tnZMP/received-912671664650110.jpg",
    "https://i.ibb.co/chVyJrcW/received-698708476544272.jpg"

]

export default function InfiniteScroller() {
    return (
        <>
            <div className="scroll-wrapper overflow-hidden">
                <div className="scroll-track">
                    {medialinks.map((src, index) => (
                        <img
                            key={`a-${index}`}
                            src={src}
                            alt={`Prince Thomas Jude photo ${index + 1}`}
                            className="photo-card"
                        />
                    ))}
                    {medialinks.map((src, index) => (
                        <img
                            key={`b-${index}`}
                            src={src}
                            alt={`Prince Thomas Jude photo ${index + 1}`}
                            className="photo-card"
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}