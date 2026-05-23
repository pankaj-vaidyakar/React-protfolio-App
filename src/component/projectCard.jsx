// import "./App.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src={props.img}
          width={"100%"}
          height={"70%"}
          style={{ maxHeight: "70%", objectFit: "contain" }}
        />
        <h2>{props.name}</h2>
        <p>{props.para}</p>
        <span>{props.page}</span>
      </div>
    </>
  );
}

export default Card;
