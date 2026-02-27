"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import type { Vector3 } from "three";

type Node = {
  id: number;
  position: Vector3;
};

type Edge = {
  from: number;
  to: number;
  weight: number;
};

function NodeSphere({ position, highlighted }: { position: Vector3; highlighted?: boolean }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[highlighted ? 0.13 : 0.09, 32, 32]} />
      <meshStandardMaterial
        color={highlighted ? "#3b82f6" : "#111827"}
        emissive={highlighted ? "#3b82f6" : "#1f2937"}
        emissiveIntensity={highlighted ? 1.2 : 0.6}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

function EdgeCylinder({
  start,
  end,
  weight,
}: {
  start: Vector3;
  end: Vector3;
  weight: number;
}) {
  const diff = {
    x: end.x - start.x,
    y: end.y - start.y,
    z: end.z - start.z,
  };

  const length = Math.sqrt(diff.x * diff.x + diff.y * diff.y + diff.z * diff.z);
  const mid = [
    start.x + diff.x / 2,
    start.y + diff.y / 2,
    start.z + diff.z / 2,
  ] as [number, number, number];

  const rotationY = Math.atan2(diff.x, diff.z);
  const rotationZ = Math.atan2(diff.y, Math.sqrt(diff.x * diff.x + diff.z * diff.z));

  return (
    <mesh position={mid} rotation={[rotationZ, rotationY, 0]}>
      <cylinderGeometry args={[0.01 + weight * 0.02, 0.01 + weight * 0.02, length, 16]} />
      <meshStandardMaterial
        color="#22c55e"
        transparent
        opacity={0.5 + weight * 0.4}
        metalness={0.3}
        roughness={0.3}
      />
    </mesh>
  );
}

function Graph() {
  const { nodes, edges } = useMemo(() => {
    const baseNodes: Node[] = [
      { id: 0, position: { x: -0.8, y: 0.4, z: 0 } as Vector3 },
      { id: 1, position: { x: 0, y: 0.7, z: 0.4 } as Vector3 },
      { id: 2, position: { x: 0.9, y: 0.3, z: -0.2 } as Vector3 },
      { id: 3, position: { x: -0.4, y: -0.5, z: -0.4 } as Vector3 },
      { id: 4, position: { x: 0.6, y: -0.6, z: 0.5 } as Vector3 },
    ];

    const baseEdges: Edge[] = [
      { from: 0, to: 1, weight: 0.9 },
      { from: 1, to: 2, weight: 0.7 },
      { from: 2, to: 4, weight: 0.8 },
      { from: 4, to: 3, weight: 0.5 },
      { from: 3, to: 0, weight: 0.6 },
      { from: 1, to: 3, weight: 0.3 },
      { from: 2, to: 0, weight: 0.2 },
    ];

    return { nodes: baseNodes, edges: baseEdges };
  }, []);

  return (
    <group>
      {edges.map((edge) => {
        const start = nodes.find((n) => n.id === edge.from)!.position;
        const end = nodes.find((n) => n.id === edge.to)!.position;
        return (
          <EdgeCylinder
            key={`${edge.from}-${edge.to}`}
            start={start}
            end={end}
            weight={edge.weight}
          />
        );
      })}
      {nodes.map((node) => (
        <NodeSphere key={node.id} position={node.position} highlighted={node.id === 1} />
      ))}
    </group>
  );
}

export function MarkovGraph3D() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
      <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.7} />
        <directionalLight
          intensity={1.1}
          position={[2, 2, 2]}
          color="#60a5fa"
        />
        <directionalLight
          intensity={0.6}
          position={[-2, -2, -2]}
          color="#22c55e"
        />
        <group rotation={[0.2, 0.4, 0]}>
          <Graph />
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

