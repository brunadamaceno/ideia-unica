import { useState } from "react";

function Home() {
  return (
    <div>
      <h1> App Wix</h1>
      <Contador />
      <instalarAppWix />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adiconarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div> {contador} </div>
      <button onClick={adiconarContador}>Contador de produtos</button>
      <a href="https://www.wix.com/installer/install?token=a8f8e90f91ad2c2863878e11da80b366907cf39849a6afb4d40662808d67c75cc7b0d03ccd5ac5d237bbb6e10c2a4d0f8efe50fa555bdf1f0aa39cbfa54e8f7709f61e935a13b0c61a4dd250c600fbcc9317ff2d6c60ee851a026a7d2eb979fda59a890e0077fdea49e5f699732d208a71560c97d6675bb99223da9299fe3077b391ef1db99b13ef0f949254ecc9ce3c79c833c43228818cc7282662a71c7c6746f0bb5283278d3ea8c4a0b7d33213bc4cc8c9a8ef60aaf20adb2e457199497b09632e1c05106e09de9bc533af9ca966&appId=5e941a6a-ec79-4ca5-a56b-e30387d76a61&redirectUrl=https://ideia-unica-bruna.vercel.app/">
        Instalar
      </a>
    </div>
  );
}

export default Home;
