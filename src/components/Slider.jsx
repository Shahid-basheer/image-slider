import { useState } from "react";
import { Form } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://t3.ftcdn.net/jpg/01/23/52/24/360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg" },
    { url: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698537600&semt=sph" },
    { url: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { url: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];
export default function Slider() { 
    const [slideduration,setSlideduration] = useState(0.5)
    
    return <div>
        <SimpleImageSlider
            width={"100%"}
            height={"90vh"}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={slideduration}
            style={{width:"100%",height:'90vh'}}
        />
        <Form.Label>Set Transition</Form.Label>
      <Form.Range value={slideduration} max={10} onChange={(e)=>setSlideduration(e.target.value)}/>
      <span>{slideduration}</span>
    </div>
}