import React from 'react';
import './Actor.scss';

const Actor = ({actors}) => {
    return (
        <div className='movieActors'>
            {actors.map( actor =>
              <div className='movieActor'>{ actor.name } ,
              <div className='movieActor_poster'>
                <img className = 'movieActor_poster_img' src= {"https://image.tmdb.org/t/p/w200/"+actor.profile_path}></img>
              </div>

              </div>
            )}
        ...
        </div>
    );
};

export default Actor;