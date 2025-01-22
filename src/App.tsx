import { Canvas } from "@react-three/fiber";
import { createXRStore, XR, XROrigin, PointerEvents } from "@react-three/xr";
import { useState } from "react";
import { Vector3 } from "three";
import { Handle } from "@react-three/handle";
import "./App.css";

const store = createXRStore();

export default function App() {
  const [position] = useState(new Vector3());

  return (
    <div className="app-container">
      <div className="controls">
        <button onClick={() => store.enterVR()}>Enter VR</button>
        <button onClick={() => store.enterAR()}>Enter AR</button>
      </div>
      <Canvas className="canvas-container">

        <XR store={store}>
          <ambientLight />
          <XROrigin position={position} />
          <PointerEvents />
          <Handle>
            <mesh scale={0.1}>
              <boxGeometry />
              <meshBasicMaterial color="red" />
            </mesh>
          </Handle>
        </XR>
      </Canvas>
    </div>
  );
}

