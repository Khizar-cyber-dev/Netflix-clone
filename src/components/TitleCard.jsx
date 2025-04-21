import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;  
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZlYmNhYzc2YmMzOTg2ZDUyNzY0ZjEyM2YyMjQyYSIsIm5iZiI6MTczNTg0MTQwNS4zNTEsInN1YiI6IjY3NzZkNjdkN2QxYmM4N2RlNzYyMDlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Yq9yJB_ncD4Gi9tgA2M_k8xkZUaa2qEgxENjAlUZY8'
    }
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);

    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(`Data for category ${category}:`, res.results);
        setApiData(res.results);
      })
      .catch((err) => console.error(err));

    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, [category]);


  return (
    <div className='title-cards mt-[50px] mb-[30px] overflow-x-auto hide-scrollbar' ref={cardsRef}>
    <h2 className='mb-[8px]'>{title ? title : "Popular on Netflix"}</h2>
    <div className='card-list flex gap-[10px] w-[850%] md:w-[600%] xl:w-[350%]'>
        {apiData.map((card, index) => (
        <Link to={`/player/${card.id}`} key={index} className='card relative'>
        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" className='w-[240px] rounded cursor-pointer' />
        <p className='absolute bottom-[10px] right-[10px]'>{card.original_title}</p>
        </Link>
        ))}
    </div>
</div>
  )
}

export default TitleCard