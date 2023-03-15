import './button.css';

function Button(props) {
  return (
    <div className="button-container" onClick={props.onClick}>
      <span className="button-text">{ props.text }</span>
    </div>
  );
}

export default Button;
