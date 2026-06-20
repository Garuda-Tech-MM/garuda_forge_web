"use client";

import { useEffect, useMemo, useState } from "react";
import { animated, to, useSprings } from "@react-spring/web";

const REFRESH_DURATION = 5000;

type Point = {
  x: number;
  y: number;
  originX: number;
  originY: number;
};

type Triangle = {
  p1: number;
  p2: number;
  p3: number;
  fill: string;
  stroke: string;
};

type MeshData = {
  points: Point[];
  triangles: Triangle[];
  numPointsX: number;
  unitWidth: number;
  unitHeight: number;
};

function createMesh(width: number, height: number): MeshData {
  const unitSize = (width + height) / 20;

  const numPointsX = Math.ceil(width / unitSize) + 1;
  const numPointsY = Math.ceil(height / unitSize) + 1;

  const unitWidth = Math.ceil(width / (numPointsX - 1));
  const unitHeight = Math.ceil(height / (numPointsY - 1));

  const points: Point[] = [];

  for (let y = 0; y < numPointsY; y++) {
    for (let x = 0; x < numPointsX; x++) {
      points.push({
        x: unitWidth * x,
        y: unitHeight * y,
        originX: unitWidth * x,
        originY: unitHeight * y,
      });
    }
  }

  const triangles: Triangle[] = [];

  for (let y = 0; y < numPointsY - 1; y++) {
    for (let x = 0; x < numPointsX - 1; x++) {
      const i = y * numPointsX + x;

      const rando = Math.floor(Math.random() * 2);

      if (rando === 0) {
        triangles.push({
          p1: i,
          p2: i + numPointsX,
          p3: i + numPointsX + 1,
          fill: `rgba(0,0,0,${Math.random() / 5})`,
          stroke: `rgba(250,250,250,${Math.random()})`,
        });

        triangles.push({
          p1: i,
          p2: i + 1,
          p3: i + numPointsX + 1,
          fill: `rgba(0,0,0,${Math.random() / 5})`,
          stroke: `rgba(250,250,250,${Math.random()})`,
        });
      } else {
        triangles.push({
          p1: i,
          p2: i + numPointsX,
          p3: i + 1,
          fill: `rgba(0,0,0,${Math.random() / 5})`,
          stroke: `rgba(250,250,250,${Math.random()})`,
        });

        triangles.push({
          p1: i + numPointsX,
          p2: i + 1,
          p3: i + numPointsX + 1,
          fill: `rgba(0,0,0,${Math.random() / 5})`,
          stroke: `rgba(250,250,250,${Math.random()})`,
        });
      }
    }
  }

  return {
    points,
    triangles,
    numPointsX,
    unitWidth,
    unitHeight,
  };
}

function randomizePoints(
  points: Point[],
  unitWidth: number,
  unitHeight: number,
  numPointsX: number,
) {
  const maxX = points[numPointsX - 1].originX;
  const maxY = points[points.length - 1].originY;

  return points.map((point) => {
    let x = point.originX;
    let y = point.originY;

    if (point.originX !== 0 && point.originX !== maxX) {
      x += Math.random() * unitWidth - unitWidth / 2;
    }

    if (point.originY !== 0 && point.originY !== maxY) {
      y += Math.random() * unitHeight - unitHeight / 2;
    }

    return {
      ...point,
      x,
      y,
    };
  });
}

export default function AnimatedBackground({
  className,
}: {
  className?: string;
}) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const update = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const mesh = useMemo(() => {
    if (!size.width || !size.height) {
      return null;
    }

    const initialMesh = createMesh(size.width, size.height);

    initialMesh.points = randomizePoints(
      initialMesh.points,
      initialMesh.unitWidth,
      initialMesh.unitHeight,
      initialMesh.numPointsX,
    );

    return initialMesh;
  }, [size]);

  const [springs, api] = useSprings(
    mesh?.points.length ?? 0,
    (index) => ({
      x: mesh?.points[index]?.x ?? 0,
      y: mesh?.points[index]?.y ?? 0,
    }),
    [mesh],
  );

  useEffect(() => {
    if (!mesh) return;

    const animate = () => {
      const next = randomizePoints(
        mesh.points,
        mesh.unitWidth,
        mesh.unitHeight,
        mesh.numPointsX,
      );

      api.start((i) => ({
        x: next[i].x,
        y: next[i].y,
        config: {
          mass: 2,
          tension: 30,
          friction: 18,
          duration: REFRESH_DURATION,
        },
      }));
    };

    // start immediately
    animate();

    const interval = setInterval(animate, REFRESH_DURATION);

    return () => clearInterval(interval);
  }, [mesh, api]);

  if (!mesh) return null;

  return (
    <svg
      width={size.width}
      height={size.height}
      className={"fixed inset-0 -z-10 " + className}
      preserveAspectRatio="none"
    >
      {mesh.triangles.map((triangle, index) => (
        <animated.polygon
          key={index}
          fill={triangle.fill}
          stroke={triangle.stroke}
          points={to(
            [
              springs[triangle.p1].x,
              springs[triangle.p1].y,
              springs[triangle.p2].x,
              springs[triangle.p2].y,
              springs[triangle.p3].x,
              springs[triangle.p3].y,
            ],
            (x1, y1, x2, y2, x3, y3) => `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
          )}
        />
      ))}
    </svg>
  );
}
