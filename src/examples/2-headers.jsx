import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const Headers = () => {
  const [joke, setJoke] = useState("");

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (error) {
      setJoke(error.message);
    }
  };

  useEffect(() => fetchDadJoke(), []);

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke ? joke : "Loading..."}</p>
    </section>
  );
};
export default Headers;
