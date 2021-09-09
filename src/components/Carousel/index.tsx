import { useState, useEffect } from "react";
import { CarouselContainer, Swiper } from "./styles";

import { GoPrimitiveDot } from 'react-icons/go'

import Plant from '../../assets/plantmanager.png'
import Letmeask from '../../assets/letmeask.jpg'
import CRUD from '../../assets/crud.jpg'
import Mows from '../../assets/mows.jpg'

export default function Carousel() {

  const [activeIndex, setActiveIndex] = useState(0);
  const datas = [
    {
      id: 1,
      title: 'plantmanager',
      img: Plant,
      url: 'https://github.com/BrunoMSts/plantmanager'
    },
    {
      id: 2,
      title: 'letmeask',
      img: Letmeask,
      url: 'https://github.com/BrunoMSts/letmeask'
    },
    {
      id: 3,
      title: 'crudapp',
      img: CRUD,
      url: 'https://github.com/BrunoMSts/CRUD-NextJS'
    },
    {
      id: 4,
      title: 'myownwebsite',
      img: Mows,
      url: 'https://brunomows.netlify.app'
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
        <div key={data.id} className="content">
          <div 
            id={data.id.toString()} 
            onClick={event => handleIsActive(event)}
            className={Number(activeIndex) === data.id ? "imgContainer active" : "imgContainer"}
          >
            <a href={data.url} />
            <img src={data.img} alt={data.title} />
          </div>
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