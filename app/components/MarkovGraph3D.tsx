 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

type Vec3 = [number, number, number];

type Node = {
  id: number;
  position: Vec3;
};

type Edge = {
  from: number;
  to: number;
  weight: number;
  curved?: boolean;
};

const EDGE_COLOR = "#38bdf8"; // soft sky blue
const EDGE_ALT_COLOR = "#a855f7"; // soft purple for curved edges

function NodeSphere({
  position,
  highlighted,
}: {
  position: Vec3;
  highlighted?: boolean;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[highlighted ? 0.16 : 0.11, 32, 32]} />
      <meshStandardMaterial
        color={highlighted ? "#38bdf8" : "#020617"}
        emissive={highlighted ? "#38bdf8" : "#1e293b"}
        emissiveIntensity={highlighted ? 1.4 : 0.7}
        metalness={0.4}
        roughness={0.25}
      />
    </mesh>
  );
}

function ParticlesBackground() {
  const ref = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => {
    const count = 260;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        size={0.03}
        color="#64748b"
        transparent
        opacity={0.32}
        depthWrite={false}
        sizeAttenuation
      />
    </Points>
  );
}

function MovingLight({
  start,
  end,
  color,
  offset,
  speed,
}: {
  start: Vec3;
  end: Vec3;
  color: string;
  offset: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    const x = start[0] + (end[0] - start[0]) * t;
    const y = start[1] + (end[1] - start[1]) * t;
    const z = start[2] + (end[2] - start[2]) * t;
    ref.current.position.set(x, y, z);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

function Graph() {
  const { nodes, edges } = useMemo(() => {
    const baseNodes: Node[] = [
      { id: 0, position: [-1.2, 0.5, 0] },
      { id: 1, position: [0, 1.05, 0.6] },
      { id: 2, position: [1.3, 0.45, -0.3] },
      { id: 3, position: [-0.7, -0.9, -0.6] },
      { id: 4, position: [0.9, -1.1, 0.8] },
      { id: 5, position: [-1.5, -0.1, 0.7] },
      { id: 6, position: [1.7, -0.2, 0.2] },
      { id: 7, position: [0.2, 0, -1.2] },
      { id: 8, position: [0.0, 0, -0.5] },
      { id: 9, position: [0.8, 0.2, 1.4] },
    ];

    const baseEdges: Edge[] = [
      { from: 0, to: 1, weight: 0.9, curved: true },
      { from: 1, to: 2, weight: 0.7, curved: true },
      { from: 2, to: 4, weight: 0.8 },
      { from: 4, to: 3, weight: 0.5, curved: true },
      { from: 3, to: 0, weight: 0.6 },
      { from: 1, to: 3, weight: 0.3 },
      { from: 2, to: 0, weight: 0.2, curved: true },
      { from: 5, to: 0, weight: 0.4, curved: true },
      { from: 5, to: 3, weight: 0.5 },
      { from: 6, to: 2, weight: 0.6 },
      { from: 6, to: 4, weight: 0.4, curved: true },
      { from: 7, to: 1, weight: 0.5, curved: true },
      { from: 7, to: 3, weight: 0.3 },
      { from: 8, to: 1, weight: 0.45, curved: true },
      { from: 8, to: 2, weight: 0.35 },
      { from: 8, to: 3, weight: 0.4, curved: true },
      { from: 9, to: 1, weight: 0.5 },
      { from: 9, to: 4, weight: 0.55, curved: true },
    ];

    return { nodes: baseNodes, edges: baseEdges };
  }, []);

  return (
    <group>
      {edges.map((edge) => {
        const start = nodes.find((n) => n.id === edge.from)!.position;
        const end = nodes.find((n) => n.id === edge.to)!.position;

        let points: Vec3[];
        if (edge.curved) {
          const mid: Vec3 = [
            (start[0] + end[0]) / 2,
            (start[1] + end[1]) / 2 + 0.5 * edge.weight,
            (start[2] + end[2]) / 2,
          ];
          points = [start, mid, end];
        } else {
          points = [start, end];
        }

        const color = edge.curved ? EDGE_ALT_COLOR : EDGE_COLOR;

        return (
          <group key={`${edge.from}-${edge.to}`}>
            <Line
              points={points}
              color={color}
              lineWidth={1 + edge.weight * 1.1}
              transparent
              opacity={0.32 + edge.weight * 0.22}
            />
            {!edge.curved && (
              <MovingLight
                start={start}
                end={end}
                color={color}
                offset={edge.weight * 0.2}
                speed={0.06 + edge.weight * 0.04}
              />
            )}
          </group>
        );
      })}
      {nodes.map((node) => (
        <NodeSphere
          key={node.id}
          position={node.position}
          highlighted={node.id === 1}
        />
      ))}
    </group>
  );
}

export function MarkovGraph3D() {
  return (
    <div className="h-80 w-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <Canvas camera={{ position: [0, 0, 3.7], fov: 40 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.75} />
        <directionalLight
          intensity={1}
          position={[2, 2.5, 2]}
          color="#38bdf8"
        />
        <directionalLight
          intensity={0.7}
          position={[-2.5, -2, -1.5]}
          color="#6366f1"
        />
        <ParticlesBackground />
        <group rotation={[0.18, 0.42, 0]}>
          <Graph />
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.22}
        />
      </Canvas>
    </div>
  );
}

