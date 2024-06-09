
export const CityList = (props) => {
  return (
    <div className="city-card">
        <div className="city">
            <img src={props.photo}></img>
                <div className="info">
                    <h2>{props.name}</h2>
                        <p>Počet obyvatel: {props.population}</p>
                        <p>Rozloha: {props.area} km²</p>
                        <p>Okres: {props.district}</p>
                </div>
        </div>
    </div>
  );
}