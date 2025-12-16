import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();

  console.log(id); 

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Logement;