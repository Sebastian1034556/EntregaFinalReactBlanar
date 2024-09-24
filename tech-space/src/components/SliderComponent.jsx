import { Carousel } from "flowbite-react";

export function SliderComponent({children}){
    return (
            <Carousel slideInterval={10500}> 
            <div className="relative w-screen h-screen">
                <video autoPlay loop  muted className="w-full h-full object-cover">
                    <source src="/videos/slide1.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
            <div className="relative w-screen h-screen">
                <video autoPlay loop  muted className="w-full h-full object-cover">
                    <source src="/videos/slide2.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
                <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Overlay */}
                <div className="absolute inset-0 flex items-end justify-center z-20">
                    {children}
                </div>
            </div>
            </Carousel>
        
    )
}
