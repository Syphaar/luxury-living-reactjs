import { MdArrowOutward } from "react-icons/md";

const Designs = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656447/kitchen_b5lklv.jpg",
        header: "Kitchen Organization Made Easy",
        description: "A well-organized kitchen brings ease and joy to every meal. Enjoy a space where cooking feels effortless and enjoyable. Let your kitchen be a place of warmth and connection.",
    },
    {
        id:2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656441/bedroom_yxlrzy.jpg",
        header: "Well-Organized Bedroom Spaces",
        description: "A well-organized bedroom maximizes space with smart storage and a clutter-free design. Thoughtful details create a stylish and relaxing retreat.",
    },
    {
        id:3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656456/reading_n6bnqz.jpg",
        header: "Cozy and Organized Reading Corner",
        description: "Find comfort in a quiet corner filled with your favorite books. Soft lighting and a comfy chair create the perfect retreat. Let your reading space be a sanctuary of peace and imagination.",
    },
    {
        id:4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656449/parlor_bl6rg0.jpg",
        header: "Welcoming Indoor Space",
        description: "Step into a space filled with, warmth, and comfort. A fresh and inviting atmosphere makes every moment special. Surround yourself with soothing colors and peaceful vibes.",
    },
]

const Indoors = ({ servicesRef }) => {
    return (
        <section ref={servicesRef} id="services">
            <div className="px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="pb-4 sm:flex sm:justify-between">
                    <div className="pb-4 sm:pb-0">
                        <h3 className="text-2xl font-bold md:w-96 md:text-4xl">Interior Designs </h3>
                    </div>
                    <div className="">
                        <a href="">
                            <button className="flex items-center gap-2 font-bold border-2 border-black px-4 py-1 rounded-full cursor-pointer transition-all duration-500 hover:bg-black hover:text-white">
                                <p>See More</p>
                                <MdArrowOutward />
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 xl:grid-cols-4" data-aos="fade-up">
                        {Designs.map((data3) => (
                            <div key={data3.id}>
                                <div>
                                    <div>
                                        <img src={data3.img} alt="" className="rounded-xl" />
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 pb-2">
                                        <h4 className="w-40">{data3.header}</h4>
                                        <MdArrowOutward />
                                    </div>
                                    <p>{data3.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Indoors;