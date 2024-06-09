
export const CityList = (props) => {
  return (
    <div className="city">
      <div className="info">
        <h2>{props.name}</h2>
        <p>Počet obyvatel: {props.population}</p>
        <p>Rozloha: {props.area} km²</p>
      </div>

    </div>
  );
}