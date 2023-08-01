import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    try {
      const { data } = await axios(url);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setData([])
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <h2 className="text-center">Loading...</h2>}
      {data && <h5 className="text-center error">{error}</h5>}
      <ul>
        {data.map(
          ({
            category,
            colors,
            company,
            description,
            id,
            image,
            name,
            price,
            shipping,
          }) => {
            return (
              <li key={id}>
                {name} ${price}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};
export default FirstRequest;
