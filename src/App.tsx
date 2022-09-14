import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="App" id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color='hotpink' />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
