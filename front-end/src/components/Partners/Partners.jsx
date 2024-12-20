import Slider from "react-slick";
import './Partners.css';
import { partnersData } from "../../mocks/data";
import { PARTNERS_CONTENT } from '../../constants'


const partners = partnersData.partners;

export const Partners = () => {

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, width: "2vw", height: "2vw", display: "block", zIndex: 1000, position: "absolute",  top: "8vw", left:"1vw" }}
            onClick={onClick}
          />
        );
      }
    
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
                ...style,
                display: "block",
                height: "auto",
                zIndex: 1000, 
                position: "absolute", 
                top: "8vw",
                right:"2vw",
            }}
            onClick={onClick}
          />
        );
      }  

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "2vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [  
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }, 
            { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }, 
            { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }   
        ] 
    };

    return(
        <div className="partners-section">
            <div className="partners__title">{PARTNERS_CONTENT.title}</div>
            <div className="partners__desc">{PARTNERS_CONTENT.desc}</div>
            <div className="partners__background">
              <Slider {...settings}>
                  {partners.map(partner => (
                      <div key={partner.id} className="partner">
                          <img src={require(`../../mocks${partner.image}`)} alt={partner.name} />
                          <div className="partner__name">{partner.name}</div>
                          <div className="partner__role">{partner.role}</div>
                      </div>
                  ))}
              </Slider>
            </div>
            <div className="FAQs-section">
              <div className="partners__title">FAQs</div>
            </div>
        </div>
    )
}
