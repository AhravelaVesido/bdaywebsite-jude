export default function Footer (){
   return (
     <footer className="flex md:flex-row justify-between items-center p-1 border-t-1 border-[#0A274A]  px-2 bg-[#fefefe]">
        <div className="md:block hidden">

        </div>
        <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/7NXTygT7/Weaverix-icon.png" alt="weverix co. logo" className="w-[35px]" />
            <p className="font-ss text-[#333333]">&copy; {new Date().getFullYear()} <span className="font-bold text-[#0A274A] tracking-wider">Weaverix</span> <span className="text-[#0BB9D4]">Co.</span> All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2 md:mt-0 mt-1">
            <a href="mailto:weaverixco@gmail.com" target="_blank"><img src="https://cdn.brandfetch.io/id5o3EIREg/w/800/h/601/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1696475443284" alt="gmail icon" className="w-[25px]"/></a>
            <a href="https://www.facebook.com/profile.php?id=61588471944187" target="_blank"><img src="https://cdn.brandfetch.io/idpKX136kp/w/2084/h/2084/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1758525490502" alt="fb icon" className="w-[25px]" /></a>
        </div>
    </footer>
    )
}