import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel
        itemHeight={100}
        itemWidth={250}
        shadowsWidth={200}
        animationDirection="RL"
        animationSpeed={5}
      >
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div className=" w-[250px] h-[100px]">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
