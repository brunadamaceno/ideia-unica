import { useState } from "react";

function Home() {
  return (
    <div>
      <h1> Home Bruna Isabela Damaceno</h1>
      <Contador />
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
      <button onClick={adiconarContador}>teste botao</button>
      <a href="https://www.wix.com/installer/install?token=8efe50fa555bdf1f0aa39cbfa54e8f7709f61e935a13b0c61a4dd250c600fbcc3f1250a273893faa0456053e17d76d511e216c6b2bf1f285cf941fb77a735f5bb6cdfe8b520acc90a2dcd3377cb572b7c2f74e037ad9cfe11d3463f2b3170477828771b675f1d2fc11fd3980954fab0dddbc827359c6f641417085f80b5ae47deb33440534c67d3289d42198a3d85584253dda1d619d1467d032977a736d48e109632e1c05106e09de9bc533af9ca966&appId=5e941a6a-ec79-4ca5-a56b-e30387d76a61&redirectUrl=https://ideia-unica-bruna.vercel.app/">
        Instalar
      </a>
    </div>
  );
}

export default Home;
