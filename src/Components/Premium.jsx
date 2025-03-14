const Premium = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} id="about" className="overflow-hidden">
            <div className="px-7 py-12 md:py-16 md:px-10 lg:px-16 xl:px-20">
                <div className="md:flex sm:justify-between">
                    <div className="pb-4 md:pb-0">
                        <h3 className="text-2xl font-bold md:w-96 md:text-4xl" data-aos="fade-right">Discover our premium property selection</h3>
                    </div>
                    <div className="md:w-[40%]" data-aos="fade-left">
                        <p>
                            Discover our exclusive selection of premium properties.
                            Luxury homes in the most desirable locations.
                            Elegance, comfort, and top-tier amenities await.
                            Find the perfect home for your lifestyle.
                            Start your journey to exceptional living today.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Premium;