export default function InvitationDetails (){
    return(
      <section className="p-10">
        <div>
             <h3 className="text-center font-ad text-xl md:px-0 md:text-3xl lg:text-2xl font-bold text-prim pb-1">Invitation Details</h3>
             <hr className="w-20 h-[2px] my-1 mx-auto bg-gold border-none sr" />
        </div>
        <div className="flex justify-around p-10 font-ad flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">Who?</h3>
              <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl ">You and 2 companions are invited</p>
            </div>
            <div className="flex-1">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">When?</h3>
              <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl"></p>
            </div>
            <div className="flex-1">
             <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">Where?</h3>
             <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl"></p>
            </div>
        </div>
      </section>   
    );
}