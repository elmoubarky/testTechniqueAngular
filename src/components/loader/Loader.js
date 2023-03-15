import './loader.css';

function Loader(props) {

  function progressColor() {
    switch (true) {
      case (props.progression <= 25):
        return '#7160E8';
      case (props.progression <= 60):
        return '#60ADE8';
      case (props.progression <= 75):
        return '#60E8B6';
      case (props.progression > 75):
        return '#30DB63';
    }
  }

  return (
    <div className="loader-container">
      <span className='loader-title'>{ props.titre }</span>
      <div className="loader-wrapper">
        <span className="loader-progress-text">{ props.progression } %</span>
        <div className="loader">
          <div style={{ width: props.progression + '%', backgroundColor: progressColor() }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
