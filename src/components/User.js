import { useParams } from "react-router-dom";

export default function User() {
  const { name } = useParams();
  return <h1>Witaj, {name}!</h1>;
}
