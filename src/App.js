import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";

function App() {
  const data = [
    {
      img: "https://b.zmtcdn.com/data/pictures/chains/1/93681/42e6dc7dd4d466b1d4a1fc310cc7f84b_o2_featured_v2.jpg?output-format=webp",
      name: "Bhattad Ki Idli - Rambharose Bhandar",
      rating: "4.0",
      sub: "South Indian",
      avg: "₹100 for one",
      desc: "5900+ orders placed from here recently",
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/9/93769/24495bb6d6300352f150f6ea95d1669c_o2_featured_v2.jpg?output-format=webp",
      name: "Swagath Hotel",
      rating: "4.1",
      sub: "South Indian, Chinese, North Indian",
      avg: "₹100 for one",
      desc: "5900+ orders placed from here recently",
    },
  ];

  return (
    <div>
      <Header></Header>
      <div className="cards-con">
        {data.map((e, i) => (
          <Card data={e}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
