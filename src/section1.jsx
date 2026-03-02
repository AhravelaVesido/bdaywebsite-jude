import BirthdayCountdown from "./modules/countDown";

export default function SectionDate () {
    return(
        <section id="DaysLeft" className="bg-[#F0E8DE] p-5 relative overflow-hidden">

            <div className="font-ad flex flex-col items-center pt-8">
                <BirthdayCountdown/>
            </div>
        </section>
    )
}