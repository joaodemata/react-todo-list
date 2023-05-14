import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  check: (_color) => <CheckSVG className="Icon-svg" fill={_color} />,
  delete: (_color) => <DeleteSVG className="Icon-svg" fill={_color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
