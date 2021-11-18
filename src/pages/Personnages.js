import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Personnages = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="block">
      {data.results.map((elem, index) => {
        return (
          <div key={elem._id}>
            <div>
              <h3> {elem.name} </h3>
              <img
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Personnages;
