export default function InvitationDetails() {
  return (
    <section id="details" className="relative bg-[#8fa8a0] p-5 md:p-10">

      <div className="bg-[#c5d8d0] p-5 md:p-10 rounded-md border-[5px] border-white">
        {/* Section Header */}
        <div>
          <div className="about-title-row mb-1 font-ad text-prim">
            <span className="star">✦</span>
            <h3 className="text-l md:text-xl lg:text-2xl font-semibold mb-1">
              Invitation Details
            </h3>
            <span className="star">✦</span>
          </div>
          {/* Crown Divider */}
          <div className="crown-divider">
            <span className="text-base leading-none">👑</span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-around p-1 md:p-8 font-ad flex-col md:flex-row gap-[10px]">

          {/* WHO */}
          <div className="flex-1 p-5 md:p-15 parchment-card rounded-md">
            <div className="card-heading-line">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">
                Who?
              </h3>
            </div>
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">
              his royal summons is for you and one companion only. Kindly
              reserve your seat at least two weeks before the grand feast.
            </p>
            <br />
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">
              Attire: Semi‑formal or casual attire is most welcome. Children may
              wear costumes of their choice to bring joy and color to the
              celebration.
            </p>
            <br />
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic" style={{ color: "#7a6a3a" }}>
              Ang paanyaya na ito ay para sa iyo at isa pang kasama lamang.
              Mangyaring mag‑reserba ng upuan dalawang linggo bago ang
              kasiyahan.
            </p>
            <br />
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic" style={{ color: "#7a6a3a" }}>
              Kasuutan: Pinakamainam ang semi‑pormal o simpleng kasuotan. Ang
              mga bata ay maaaring magsuot ng anumang kasuotan na kanilang nais
              upang magdagdag saya at kulay sa kasayahan.
            </p>
          </div>

          {/* WHEN */}
          <div className="flex-1 p-5 md:p-15 parchment-card rounded-md">
            <div className="card-heading-line">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">
                When?
              </h3>
            </div>
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">
              On the blessed day of Saturday, May 30, 2026, the kingdom shall
              gather.
            </p>
            <br />
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic" style={{ color: "#7a6a3a" }}>
              Sa banal na araw ng Sabado, Mayo 30, 2026, magtitipon ang buong
              kaharian.
            </p>
          </div>

          {/* WHERE */}
          <div className="flex-1 p-5 md:p-15 parchment-card rounded-md">
            <div className="card-heading-line">
              <h3 className="text-center font-ad text-l md:px-0 md:text-xl lg:text-xl font-bold text-prim pb-1">
                Where?
              </h3>
            </div>
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl">
              The festivities shall be held at Crisolaido Resort and Garden,
              Brgy. Concepcion, San Pablo City.
            </p>
            <br />
            <p className="font-semibold text-m text-center mt-[5px] mb-[5px] md:mb-0 lg:text-xl italic" style={{ color: "#7a6a3a" }}>
              Gaganapin ang kasayahan sa Crisolaido Resort and Garden, Brgy.
              Concepcion, San Pablo City.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}