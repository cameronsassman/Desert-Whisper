import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider() {
    const images = [
        { url: "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJilKK3lvyYIupB4gFRHA9LivXd1kDzfMx87YNRxIt16uhn8Zo5?w=730&h=411&fit=crop&auto=enhance,format,compress&q=80" },
        { url: "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAATJx82dzDEDaN11l3WJFAwT5mHWH0TlBSyGpG4ik7MJmM7NBALR?w=730&h=411&fit=crop&auto=enhance,format,compress&q=80" },
        { url: "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA6366477515b8fc21bc69d548828afe8eccdcef5732631ace6da4610d8da09db0019b8cc061943cd8034f35ea0454795daa2d?w=730&h=411&fit=crop&auto=enhance,format,compress&q=80" },
      ];

    return (
        <div>
            <SimpleImageSlider
                style={{objectFit: 'cover', display: 'block'}}
                width={'100%'}
                height={'100%'}
                images={images}
                autoPlay={true}
            />
      </div>
    ); 
  }
  
  export default ImageSlider;