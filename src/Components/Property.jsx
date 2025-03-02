import { MdArrowOutward } from "react-icons/md";

const Cssgrid = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656454/Property-one_d4cbkw.jpg",
    },
    {
        id:2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656459/property-two_pcsugo.jpg",
    },
    {
        id:3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656455/property-three_urzhqu.jpg",
    },
    {
        id:4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656454/property-four_ejgvf2.jpg",
    },
    {
        id:5,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656454/property-five_ytaelx.jpg",
    },
]

const Property = ({ projectsRef }) => {
    return (
        <section ref={projectsRef} id="projects">
            <div className="px-7 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
                <div className="pb-4 sm:flex sm:justify-between">
                    <div className="pb-4 sm:pb-0">
                        <h3 className="text-2xl font-bold md:w-96 md:text-4xl">Featured Property </h3>
                    </div>
                    <div className="">
                        <a href="">
                            <button className="flex items-center gap-2 font-bold border-2 border-black px-4 py-1 rounded-full cursor-pointer transition-all duration-500 hover:bg-black hover:text-white">
                                <p>See 288 Projects</p>
                                <MdArrowOutward />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 grid-row-2 gap-4">
                    {Cssgrid.map((item, i) => (
                        <div key={i} className={`${i === 0 ? "sm:col-span-2" : ""} ${i === 0 ? "sm:row-span-2" : ""}`}>
                            <div>
                                <img src={item.img} alt="" className="rounded-xl" />
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>
        </section>
    )
}

export default Property;