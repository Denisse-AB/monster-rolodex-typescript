// Component to render monsters object and
// send then to the card component as a prop
import { Monster } from '../../App';
import {Card} from '../card/card';

import './card-list.css';

type CardListProps = {
  monsters: Monster[]
}

// Implicit return
export const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>))
    }
  </div>
);
