import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/oldtelephone.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/oldtelephone.glb"
  );

  return (
    <group ref={group} scale={[10,10,10]}>
      <primitive object={scene} />
    </group>
  );
}
