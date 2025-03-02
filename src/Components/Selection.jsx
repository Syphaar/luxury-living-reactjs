import { MdArrowOutward } from "react-icons/md";

const Selection = () => {
    return (
        <section>
            <div>
                <div className="sm:flex">
                    <div className="pt-50 bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656443/house_fqzyqd.jpg)] w-full h-full bg-cover bg-no-repeat md:pt-64 lg:pt-64 xl:pt-74">
                        <div className="flex justify-between items-center px-7 py-5 text-white md:py-5 md:px-10 lg:px-16 xl:px-20">
                            <div>
                                <p className="font-bold">Houses</p>
                                <p>268 Units</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl xl:text-3xl">
                                    <MdArrowOutward />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-50 bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656439/apartment_sd9qaw.jpg)] w-full h-full bg-cover bg-no-repeat md:pt-64 lg:pt-64 xl:pt-74">
                        <div className="flex justify-between items-center px-7 py-5 text-white md:py-5 md:px-10 lg:px-16 xl:px-20">
                            <div>
                                <p className="font-bold">Apartment</p>
                                <p>188 Units</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl xl:text-3xl">
                                    <MdArrowOutward />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-50 bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656461/villa_vquyj3.jpg)] w-full h-full bg-cover bg-no-repeat md:pt-64 lg:pt-64 xl:pt-74">
                        <div className="flex justify-between items-center px-7 py-5 text-white md:py-5 md:px-10 lg:px-16 xl:px-20">
                            <div>
                                <p className="font-bold">Villa</p>
                                <p>158 Units</p>
                            </div>
                            <div>
                                <p className="text-xl md:text-2xl xl:text-3xl">
                                    <MdArrowOutward />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Selection;