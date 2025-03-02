const Heading = [
    {
        id:1, 
        text: "Your Perfect Home Awaits Here",
    },
]

const Sectionone = ({ sectiononeRef }) => {
    return (
        <section ref={sectiononeRef} id="sectionone">
            <div className="flex justify-center items-center w-full h-[100vh] bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656439/background_h7tkv7.jpg)] bg-cover bg-no-repeat bg-center bg-fixed px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="w-full flex justify-center text-center">
                   {Heading.map((data) => (
                        <div key={data.id} >
                            <h2 className="text-3xl text-white font-bold uppercase pt-2 pb-6 sm:w-96 sm:text-4xl md:w-[500px] md:w-96 md:text-5xl xl:text-6xl xl:w-[700px]" data-aos="zoom-in">{data.text}</h2>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Sectionone;