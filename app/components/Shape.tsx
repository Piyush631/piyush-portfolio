"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Shape() {
  return (
    <div className="lg:h-screen md:h-1/2 h-96 w-screen lg:mt-0 lg:pt-5 md:mt-12 pt-2 mt-48 ">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
     
        <Sphere args={[1, 100, 100]} scale={2.8}>
          <MeshDistortMaterial color="grey" attach="material" distort={0.6} speed={2} />
        </Sphere>

     
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 3]} />
      </Canvas>
    </div>
  );
}
