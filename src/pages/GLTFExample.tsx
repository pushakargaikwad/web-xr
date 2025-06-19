import { Canvas, useLoader } from "@react-three/fiber";
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
  Label,
  Switch,
} from "@react-three/uikit-default";
import { Text, Container, Root, Fullscreen } from "@react-three/uikit";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
const store = createXRStore();

function Model() {
  // this uses the r3f useLoader and GLTFLoader
  const result = useLoader(GLTFLoader, "/cylinder.glb");
  console.log(result);
  return <primitive object={result.scene} />;
}

export default function GLTFExample() {
  const [position] = useState(new Vector3());
  const [isUsingLoader, setIsUsingLoader] = useState(true);

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
              <Fullscreen>
                <Container>
                  <Card width={300}>
                    <CardHeader>
                      <CardTitle>
                        <Text>Notifications</Text>
                      </CardTitle>
                      <CardDescription>
                        <Switch
                          checked={isUsingLoader}
                          onCheckedChange={() => {
                            setIsUsingLoader(!isUsingLoader);
                          }}
                        />
                        <Label>
                          <Text>use GLTFLoader?</Text>
                        </Label>
                        <Text>
                          if toggled on : uses Standard React Three Fiber
                          useLoader and GLTFLoader
                        </Text>
                        <Text>
                          if toggled off : uses DREI convenience hook - Gltf
                        </Text>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Container>
              </Fullscreen>
            </Root>
          </Handle>
          {/* <OrbitControls makeDefault /> */}
          <Environment preset="studio" />
          {isUsingLoader ? (
            <PivotHandles key="loader">
              {" "}
              {/* added key to handle disapperaring objects when resetting state at the same position*/}
              <Suspense>
                <Model />
              </Suspense>
            </PivotHandles>
          ) : (
            <PivotHandles key="hook">
              <Suspense>
                <Gltf src="/cube.glb" />
              </Suspense>
            </PivotHandles>
          )}
        </XR>
      </Canvas>
      <Footer />
    </div>
  );
}
