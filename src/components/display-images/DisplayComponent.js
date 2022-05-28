import Card from "./Card";
import "./DisplayComponent.css";
function DisplayComponent(props) {
  console.log(props.gifs);
  return (
    <div className="display-container">
      {props.gifs.map((img) => {
        return <Card key={img.id} image={img} />;
      })}
    </div>
  );
}
export default DisplayComponent;
