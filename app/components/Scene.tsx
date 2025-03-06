
"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Telephone/Telephone";

export default function Scene(){
    return (
        <Canvas>
            <group>

         
        <Suspense fallback={<div>Loading...</div>}> 
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="white" />
        <pointLight position={[0, 5, 5]} intensity={2} color="white" />

     <Model/>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
        </group>
    </Canvas>
    )
}