import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <button onClick={handleClick}>Go Back</button>;
}
