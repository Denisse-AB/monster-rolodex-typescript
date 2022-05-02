import { Monster } from '../../App';
import './card.css';

type CardProps = {
  monster: Monster
}

export const Card = ({ monster }: CardProps) => {
  const { name, email, id } = monster;

  return (
    <div className='card-container' key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
};
