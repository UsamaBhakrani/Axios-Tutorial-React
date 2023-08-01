import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    const response = await axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })

      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <h2 className="text-center">Loading...</h2>}
      {error && <h3 className="text-center error">{error}</h3>}
      <h2>Working with Apis</h2>
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
              <li>
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
