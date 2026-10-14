import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Hero3DFallback } from './Hero3DFallback';

// ---------------------------------------------------------------------------
// 3D Isometric Architecture Island (Full Stack MERN)
// ---------------------------------------------------------------------------

function ArchitectureIsland({ mousePos }) {
  const islandGroup = useRef();
  const packet1Ref = useRef();
  const packet2Ref = useRef();
  const packet3Ref = useRef();
  const reactAtomRef = useRef();
  const [hoveredTier, setHoveredTier] = useState(null);

  // Smooth mouse-responsive isometric tilt and gentle idle breathing
  useFrame((state, delta) => {
    if (!islandGroup.current) return;
    const t = state.clock.getElapsedTime();

    // Base isometric angle: ~35 deg X tilt, -45 deg Y tilt, with mouse parallax
    const targetRotX = 0.52 + mousePos.y * 0.22;
    const targetRotY = -0.68 + mousePos.x * 0.28;
    const targetRotZ = 0.05 + mousePos.x * 0.08;

    islandGroup.current.rotation.x = THREE.MathUtils.damp(islandGroup.current.rotation.x, targetRotX, 3.5, delta);
    islandGroup.current.rotation.y = THREE.MathUtils.damp(islandGroup.current.rotation.y, targetRotY, 3.5, delta);
    islandGroup.current.rotation.z = THREE.MathUtils.damp(islandGroup.current.rotation.z, targetRotZ, 3.5, delta);

    // Traveling Data Packets between tiers
    if (packet1Ref.current) {
      // Moves up and down conduit 1: from DB (y: -0.6) to API (y: 0.1) to Client (y: 0.8)
      const p1 = (Math.sin(t * 2.5) + 1) / 2; // 0 to 1
      packet1Ref.current.position.y = -0.6 + p1 * 1.5;
    }

    if (packet2Ref.current) {
      // Moves down: from Client to DB
      const p2 = (Math.cos(t * 2.8) + 1) / 2;
      packet2Ref.current.position.y = 0.9 - p2 * 1.5;
    }

    if (packet3Ref.current) {
      // Secondary packet
      const p3 = (Math.sin(t * 3.2 + 1.2) + 1) / 2;
      packet3Ref.current.position.y = -0.5 + p3 * 1.3;
    }

    // React Atom rotation
    if (reactAtomRef.current) {
      reactAtomRef.current.rotation.y = t * 1.2;
      reactAtomRef.current.rotation.x = t * 0.8;
    }
  });

  return (
    <group ref={islandGroup} position={[0, -0.1, 0]} scale={1.15}>
      {/* =================================================================== */}
      {/* 1. FOUNDATION / PLATFORM PEDESTAL                                    */}
      {/* =================================================================== */}
      {/* Base Beveled Slab */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.2, 0.16, 3.2]} />
        <meshStandardMaterial
          color="#0b1329"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing Platform Neon Edge Line */}
      <mesh position={[0, -1.11, 0]}>
        <boxGeometry args={[3.24, 0.02, 3.24]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>

      {/* Holographic Isometric Grid Plate */}
      <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.9, 2.9, 12, 12]} />
        <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.4} />
      </mesh>


      {/* =================================================================== */}
      {/* 2. BOTTOM TIER: DATABASE LAYER (MongoDB Storage Cylinders)          */}
      {/* =================================================================== */}
      <group
        position={[-0.7, -0.6, -0.3]}
        onPointerOver={() => setHoveredTier('database')}
        onPointerOut={() => setHoveredTier(null)}
      >
        {/* Database Primary Disk Cluster */}
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.16, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Neon Emerald Ring 1 */}
        <mesh position={[0, 0.28, 0]}>
          <torusGeometry args={[0.56, 0.018, 16, 32]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>

        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.16, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Neon Emerald Ring 2 */}
        <mesh position={[0, 0.08, 0]}>
          <torusGeometry args={[0.56, 0.018, 16, 32]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>

        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.16, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Neon Emerald Ring 3 */}
        <mesh position={[0, -0.12, 0]}>
          <torusGeometry args={[0.56, 0.018, 16, 32]} />
          <meshBasicMaterial color="#059669" />
        </mesh>

        {/* Database Core Glow light */}
        <pointLight position={[0, 0.1, 0]} color="#10b981" intensity={1.4} distance={1.8} />
      </group>


      {/* =================================================================== */}
      {/* 3. MIDDLE TIER: BACKEND / API GATEWAY (Node.js & Express.js)        */}
      {/* =================================================================== */}
      <group
        position={[0.5, 0.05, 0.4]}
        onPointerOver={() => setHoveredTier('backend')}
        onPointerOut={() => setHoveredTier(null)}
      >
        {/* Server Block Enclosure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.35, 1.2]} />
          <meshStandardMaterial
            color="#111c38"
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>

        {/* Server Top Glass Panel */}
        <mesh position={[0, 0.18, 0]}>
          <boxGeometry args={[1.42, 0.02, 1.12]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.3} />
        </mesh>

        {/* Server Edge Neon Trim */}
        <mesh position={[0, 0.08, 0.61]}>
          <planeGeometry args={[1.3, 0.04]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>

        {/* Micro LED Activity Nodes */}
        <mesh position={[-0.45, 0, 0.61]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
        <mesh position={[-0.32, 0, 0.61]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[-0.19, 0, 0.61]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        {/* Mini Express Route Rails */}
        <mesh position={[0.2, 0.19, -0.2]}>
          <boxGeometry args={[0.8, 0.02, 0.04]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
        <mesh position={[0.2, 0.19, 0.1]}>
          <boxGeometry args={[0.8, 0.02, 0.04]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>

        <pointLight position={[0, 0.2, 0]} color="#22c55e" intensity={1.2} distance={2.0} />
      </group>


      {/* =================================================================== */}
      {/* 4. TOP TIER: FRONTEND / CLIENT LAYER (React.js Glass Interface)     */}
      {/* =================================================================== */}
      <group
        position={[-0.2, 0.85, 0.1]}
        rotation={[-0.2, 0.15, 0]}
        onPointerOver={() => setHoveredTier('frontend')}
        onPointerOut={() => setHoveredTier(null)}
      >
        {/* Floating Glass Display Tablet */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 1.2, 0.05]} />
          <meshStandardMaterial
            color="#0b132b"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.88}
          />
        </mesh>

        {/* Glass Screen Surface */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.72, 1.12]} />
          <meshBasicMaterial color="#070d1e" />
        </mesh>

        {/* Futuristic Glowing UI Wireframe on Client Screen */}
        <group position={[-0.7, 0.42, 0.035]}>
          {/* Header dots */}
          <mesh position={[0.08, 0, 0]}>
            <circleGeometry args={[0.02, 16]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>
          <mesh position={[0.15, 0, 0]}>
            <circleGeometry args={[0.02, 16]} />
            <meshBasicMaterial color="#f59e0b" />
          </mesh>
          <mesh position={[0.22, 0, 0]}>
            <circleGeometry args={[0.02, 16]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>

          {/* Navigation Bar Strip */}
          <mesh position={[0.75, 0, 0]}>
            <planeGeometry args={[0.8, 0.03]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>

          {/* Hero Section Wireframe Card */}
          <mesh position={[0.7, -0.22, 0]}>
            <planeGeometry args={[1.3, 0.28]} />
            <meshBasicMaterial color="#172554" />
          </mesh>
          <mesh position={[0.4, -0.16, 0.005]}>
            <planeGeometry args={[0.55, 0.04]} />
            <meshBasicMaterial color="#60a5fa" />
          </mesh>
          <mesh position={[0.3, -0.24, 0.005]}>
            <planeGeometry args={[0.35, 0.03]} />
            <meshBasicMaterial color="#93c5fd" />
          </mesh>

          {/* Dual Component Cards */}
          <mesh position={[0.32, -0.55, 0]}>
            <planeGeometry args={[0.56, 0.28]} />
            <meshBasicMaterial color="#1e1b4b" />
          </mesh>
          <mesh position={[1.02, -0.55, 0]}>
            <planeGeometry args={[0.56, 0.28]} />
            <meshBasicMaterial color="#064e3b" />
          </mesh>
        </group>

        {/* Rotating React Atom Glyph floating on top right of the client screen */}
        <group ref={reactAtomRef} position={[0.65, 0.35, 0.22]}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.2, 0.015, 16, 32]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh rotation={[1.05, 0.5, 0]}>
            <torusGeometry args={[0.2, 0.015, 16, 32]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh rotation={[-1.05, 0.5, 0]}>
            <torusGeometry args={[0.2, 0.015, 16, 32]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>

        <pointLight position={[0, 0, 0.3]} color="#38bdf8" intensity={1.5} distance={2.2} />
      </group>


      {/* =================================================================== */}
      {/* 5. VERTICAL ENERGY CONDUITS & REST DATA PACKETS                    */}
      {/* =================================================================== */}
      {/* Vertical Conduit 1 (DB to API) */}
      <mesh position={[-0.4, 0.05, -0.1]}>
        <cylinderGeometry args={[0.018, 0.018, 1.6, 16]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
      </mesh>

      {/* Vertical Conduit 2 (API to Client) */}
      <mesh position={[0.3, 0.45, 0.2]}>
        <cylinderGeometry args={[0.018, 0.018, 1.4, 16]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>

      {/* Diagonal Conduit 3 (Direct Client Sync) */}
      <mesh position={[-0.1, 0.1, 0.3]} rotation={[0.4, 0, -0.3]}>
        <cylinderGeometry args={[0.015, 0.015, 1.8, 16]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.4} />
      </mesh>

      {/* Traveling Data Packet 1: JSON Data Stream (Cyan) */}
      <mesh ref={packet1Ref} position={[-0.4, 0, -0.1]}>
        <sphereGeometry args={[0.065, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.8} />
      </mesh>

      {/* Traveling Data Packet 2: REST Request Packet (Violet) */}
      <mesh ref={packet2Ref} position={[0.3, 0.4, 0.2]}>
        <sphereGeometry args={[0.065, 16, 16]} />
        <meshStandardMaterial color="#a855f7" emissive="#8b5cf6" emissiveIntensity={1.8} />
      </mesh>

      {/* Traveling Data Packet 3: DB Query Shard (Emerald) */}
      <mesh ref={packet3Ref} position={[-0.1, 0.1, 0.3]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial color="#34d399" emissive="#10b981" emissiveIntensity={1.8} />
      </mesh>


      {/* =================================================================== */}
      {/* 6. ORBITING AMBIENT TECH SATELLITES & PARTICLES                    */}
      {/* =================================================================== */}
      {/* Ambient floating tech diamond (Mongo shard) */}
      <group position={[-1.4, -0.2, 0.8]}>
        <mesh rotation={[0.5, 0.4, 0]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.6} wireframe />
        </mesh>
      </group>

      {/* Ambient floating server node (Node.js) */}
      <group position={[1.5, 0.8, -0.6]}>
        <mesh rotation={[0.2, 0.6, 0]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={0.7} />
        </mesh>
      </group>

      {/* Ambient floating JS Golden Byte */}
      <group position={[-1.2, 0.9, -0.5]}>
        <mesh rotation={[0.6, 0.8, 0.2]}>
          <boxGeometry args={[0.22, 0.22, 0.22]} />
          <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Main 3D Hero Workspace Export with Responsive Fallback & Error Catching
// ---------------------------------------------------------------------------
export function Hero3DWorkspace() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || prefersReducedMotion) return;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth) * 2 - 1,
      y: -(e.clientY / innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, prefersReducedMotion]);

  // If mobile, reduced motion, or WebGL error -> lightweight SVG/CSS animated fallback
  if (isMobile || prefersReducedMotion || hasWebGlError) {
    return <Hero3DFallback />;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '480px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="3D Interactive MERN Architecture Island"
    >
      {/* Ambient Soft Glow Behind Island */}
      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(139,92,246,0.12) 50%, transparent 72%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Architecture Tier Badges Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '10px',
          zIndex: 5,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'flex-end',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '0.72rem',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: 'var(--surface-glass)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: '#38bdf8',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
          Client: React.js UI
        </span>

        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '0.72rem',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: 'var(--surface-glass)',
            border: '1px solid rgba(34, 197, 94, 0.4)',
            color: '#22c55e',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
          API: Express &bull; Node.js
        </span>

        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '0.72rem',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: 'var(--surface-glass)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#10b981',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          Data: MongoDB Cluster
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 1.2, 5.0], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => setHasWebGlError(true)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 8, 5]} intensity={1.8} color="#ffffff" />
          <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#3b82f6" />
          <pointLight position={[0, 3, 3]} intensity={1.5} color="#8b5cf6" distance={8} />

          <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6}>
            <ArchitectureIsland mousePos={mousePos} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
