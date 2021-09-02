import { useEffect, useRef, useState } from "react";
import { CarouselContainer, Swiper } from "./styles";

import { GoPrimitiveDot } from 'react-icons/go'

export default function Carousel() {

  const [activeIndex, setActiveIndex] = useState(0);
  const datas = [
    {
      id: 1,
      title: 'img1'
    },
    {
      id: 2,
      title: 'img2'
    },
    {
      id: 3,
      title: 'img3'
    },
    {
      id: 4,
      title: 'img4'
    },
  ]

  function handleIsActive(event: any) {
    setActiveIndex(event.currentTarget.id)
  }

  function handleChange(event: any) {
    setActiveIndex(event.currentTarget.id)
  }


  // useEffect(() => {
  //   if(!isClicked) {
  //     setTimeout(() => setActiveIndex((prevIndex) => prevIndex === datas.length ? 0 : prevIndex + 1), 2000)
  //   }
  // }, [activeIndex])

  return (
    <CarouselContainer >
      {datas.map(data => (
        <div 
          key={data.id} 
          id={data.id.toString()} 
          onClick={event => handleIsActive(event)}
          className={Number(activeIndex) === data.id ? "content active" : "content"}
        >
          {data.title}
        </div>
      ))}
      <Swiper>
        {datas.map(data => (
          <span 
            key={data.id}
            id={data.id.toString()}
            onClick={event => handleChange(event)}
          >
            <GoPrimitiveDot color={Number(activeIndex) === data.id ? "#daff" : ""}/>
          </span>  
        ))}
      </Swiper>
    </CarouselContainer>
  )
}