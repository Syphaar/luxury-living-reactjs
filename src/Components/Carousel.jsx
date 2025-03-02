import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Information = [
    {
        id:3,
        fname: "Nia Adebayo",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656448/nia_qpegtv.jpg",
        review: "Great experience with this website! The listings are high-quality and diverse, and the process was super convenient.",
    },
    {
        id:2,
        fname: "John Morgan",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656442/john_dtfjzz.jpg",
        review: "Smooth navigation and accurate property details, truly reliable. This site made my house-hunting journey so much easier.",
    },
    {
        id:3,
        fname: "Ellie Anderson",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656440/ellie_otnnyd.jpg",
        review: "A fantastic platform with top-notch property options. The search filters made it simple to find exactly what I needed.",
    },
    {
        id:4,
        fname: "John Steve",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656459/steve_t2ddjf.jpg",
        review: "A user-friendly platform with amazing property choices available. The advanced filters helped me find my ideal home fast."
    },
    {
        id:5,
        fname: "Bill Cart",
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740656440/bill_qnkenu.jpg",
        review: "An excellent real estate site with detailed listings and updates. I found my perfect home quickly and hassle-free."
    },
]

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", color: "black", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
}

function Carousel() {
    
// function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      
  return (
    <section className="">
        <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-16 xl:px-20">
            <div className="pb-4">
                <h3 className="text-2xl font-bold md:text-4xl">What People Are Saying </h3>
            </div>
        </div>
        <div className="w-2/3 sm:w-5/6 m-auto">
            <div className="">
            <Slider {...settings}>
                {Information.map((info) => (
                    <div key={info.id} className="h-[435px] text-black rounded-xl border-0 bg-wheat border-black ex:h-[346px] ss:h-[324px] dd:h-[306px] mm:h-[306px] gg:h-[282px] ll:h-[259px] xx:h-[235px] sm:h-[170px] lg:h-[187px] xl:h-[160px]">
                        <div className="">
                            <div className="flex flex-col gap-4 w-full p-4">
                                <p>{info.review}</p>
                            </div>
                            <div className="h-16 pl-4 rounded-t-xl sm:flex items-center gap-4">
                                <img src={info.img} alt="" className="h-12 w-12 rounded-full " />
                                <p className="text-xl font-semibold">{info.fname}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default Carousel;