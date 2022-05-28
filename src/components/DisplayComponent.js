function DisplayComponent(props){
    //console.log(props.gifs);
    return (
        <div className="gifClass">
          {props.gifs.map((item) => {
            return (
                <h3>{item.username}</h3>
            );
          })}
        </div>
      );
}
export default DisplayComponent;