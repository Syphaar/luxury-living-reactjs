import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const data = [
    {
        id:1,
        question: "What documents do I need to buy a home?",
        answer:
            "Common documents include proof of identity, proof of income, credit reports, mortgage pre-approval, and a sale agreement. Requirements may vary by country and lender.",
    },
    {
        id:2,
        question: "Are the property listings updated regularly?",
        answer:
            "Yes, our listings are updated frequently to ensure you get the latest available properties with accurate details and pricing.",
    },
    {
        id:3,
        question: "How do I avoid scams when buying or renting a property?",
        answer:
            "Always verify the seller’s or agent’s credentials, visit the property in person, and avoid making payments upfront without a contract. Use secure payment methods and trusted platforms.",
    },
    {
        id:4,
        question: "Is my personal information safe when using this website?",
        answer:
            "Yes, we prioritize your privacy and use secure encryption to protect your data. We never share your personal details without your consent.",
    },
]

import { useState } from "react";

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <div className="flex w-full justify-center items-center px-7 pt-14 pb-12 md:pt-18 md:pb-14 md:px-10 lg:px-16 xl:px-20">
            <div className="w-[500px]" data-aos="zoom-in">
                <div className="pb-4">
                    <h3 className="text-2xl font-bold sm:text-center md:text-4xl">Frequently Asked Questions</h3>
                </div>
                {data.map((item, i) => (
                    <div key={item.id} className="bg-wheat mb-2 px-5 py-5 rounded-lg">
                        <div onClick={() => toggle(i)} className="text-black flex justify-between items-center cursor-pointer">
                            <h2>{item.question}</h2>
                            <span className="pl-4">{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out text-black ${
                                selected === i
                                    ? "opacity-100 scale-y-100 max-h-[500px]"
                                    : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
                            }`}
                        >
                            <p className="py-2">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Faq;