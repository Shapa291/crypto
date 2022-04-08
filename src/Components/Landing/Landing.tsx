import CurrencyList from "../CurrencyList/CurrencyList";
import "./Landing.scss";

function Landing() {
  return (
    <div className="wrapper">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde velit
        dignissimos excepturi et voluptatum deleniti accusamus, amet magni ut,
        temporibus odit aspernatur voluptate aperiam!
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        delectus assumenda nulla, consectetur pariatur inventore. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Tempora, pariatur. Dolores
        quos nesciunt veritatis sit laborum porro inventore ipsa doloribus
        repudiandae beatae quibusdam debitis fuga doloremque laudantium, eveniet
        tempore dicta officia vel ut tenetur et! Cumque earum ab qui quod rem
        libero quae, quia error natus aliquid in, similique deserunt.
      </div>
      <div className="list">
        <CurrencyList />
      </div>
    </div>
  );
}

export default Landing;
