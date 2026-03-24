export default function InvitationDetails (){
    return(
      <section id="details" className="relative bg-[#A1B6C2] p-5 md:p-10">
        <div className="bg-[#b8d4e8] p-5 md:p-10 rounded-xl border-white border-[5px]">
          <div>
              <h3 className="text-center font-ad text-xl md:px-0 md:text-3xl lg:text-2xl font-bold text-prim pb-1">Invitation Details</h3>
              <hr className="w-20 h-[2px] my-1 mx-auto bg-gold border-none sr" />
          </div>
          <div className="flex justify-around p-3 md:p-10 font-ad flex-col md:flex-row gap-[10px]">
              <div className="flex-1 p-5 md:p-15 bg-[#e8f4fd] rounded-md shadow-md">
                <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">Who?</h3>
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl ">his royal summons is for you and one companion only. Kindly reserve your seat at least two weeks before the grand feast.</p>
                <br />
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl ">Attire: Semi‑formal or casual attire is most welcome. Children may wear costumes of their choice to bring joy and color to the celebration.</p>
                <br />
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic">Ang paanyaya na ito ay para sa iyo at isa pang kasama lamang. Mangyaring mag‑reserba ng upuan dalawang linggo bago ang kasiyahan.</p>
                <br />
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic">Kasuutan: Pinakamainam ang semi‑pormal o simpleng kasuotan. Ang mga bata ay maaaring magsuot ng anumang kasuotan na kanilang nais upang magdagdag saya at kulay sa kasayahan.</p>
              </div>
              <div className="flex-1 p-5 md:p-15 bg-[#e8f4fd] rounded-md shadow-md">
                <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">When?</h3>
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">On the blessed day of Saturday, May 30, 2026, the kingdom shall gather.</p>
                <br />
                <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic">Sa banal na araw ng Sabado, Mayo 30, 2026, magtitipon ang buong kaharian.</p>
              </div>
              <div className="flex-1 p-5 md:p-15 bg-[#e8f4fd] rounded-md shadow-md">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">Where?</h3>
              <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">The festivities shall be held at Crisolaido Resort and Garden, Brgy. Concepcion, San Pablo City.</p>
              <br />
              <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic">Gaganapin ang kasayahan sa Crisolaido Resort and Garden, Brgy. Concepcion, San Pablo City.</p>
              </div>
          </div>
        </div>
      </section>   
    );
}