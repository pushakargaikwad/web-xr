import { Canvas } from "@react-three/fiber";
import { createXRStore, XR, XROrigin, PointerEvents } from "@react-three/xr";
import { Suspense, useState } from "react";
import { Vector3 } from "three";
import { Handle, PivotHandles } from "@react-three/handle";
import { Footer } from "../components/Footer";
import "../App.css";
import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@react-three/uikit-default";
import { Text, Container, Root } from "@react-three/uikit";
const store = createXRStore();

export default function GLTFExample() {
  const [position] = useState(new Vector3());

  return (
    <div className="app-container vr-page">
      <Link to="/" className="back-link">
        ← Back to App
      </Link>
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
            <Root>
              <Container>
                <Card width={380}>
                  <CardHeader>
                    <CardTitle>
                      <Text>Notifications</Text>
                    </CardTitle>
                    <CardDescription>
                      <Text>You have 3 unread messages.</Text>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Container>
            </Root>
          </Handle>
          {/* <OrbitControls makeDefault /> */}
          {/* <Environment preset="studio" /> */}
          <PivotHandles>
            <Suspense>
              <Gltf src="/Untitled.glb" />
            </Suspense>
          </PivotHandles>
        </XR>
      </Canvas>
      <Footer />
    </div>
  );
}
