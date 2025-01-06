import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZlYmNhYzc2YmMzOTg2ZDUyNzY0ZjEyM2YyMjQyYSIsIm5iZiI6MTczNTg0MTQwNS4zNTEsInN1YiI6IjY3NzZkNjdkN2QxYmM4N2RlNzYyMDlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Yq9yJB_ncD4Gi9tgA2M_k8xkZUaa2qEgxENjAlUZY8',
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setMovie(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
<div className="h-[100vh] flex flex-col justify-center items-center">
    <img onClick={()=> navigate('/home')} src={back_arrow_icon} alt="Back" className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer" /> {movie ? (
    <>
        <iframe src={`https://www.youtube.com/embed/${movie.key}`} className="rounded" width="90%" height="90%" title="Trailer" frameBorder="0" allowFullScreen></iframe>
        <div className="player-info flex items-center justify-between w-[90%]">
            <p>Published Date: {movie.published_at.slice(0,10) || 'N/A'}</p>
            <p>Name: {movie.name || 'N/A'}</p>
            <p>Type: {movie.type || 'N/A'}</p>
        </div>
        </> ) : (
        <p>Loading...</p>
        )}
</div>
  );
};

export default Player;
