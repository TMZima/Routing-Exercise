import { useParams } from "react-router-dom";
import data from "../../data/GalaxyData";
import NotFound from "./NotFound";

export default function Content() {
  const { id } = useParams();

  const contentData = data.find((item) => item.id === id);

  return (
    <div className="content">
      {contentData ? (
        <>
          <h1>{contentData.title}</h1>
          <p>{contentData.content}</p>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
