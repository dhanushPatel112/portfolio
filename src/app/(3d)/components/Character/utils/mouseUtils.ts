import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

// `state` holds the smoothed rotation across frames. We intentionally do NOT
// read the rotation back off the bone: the animation mixer overwrites the Head
// bone every frame (RobotExpressive's Idle animates the whole body), so reading
// it back makes the lerp fight the animation and jerk. Keeping our own state and
// writing the absolute value AFTER mixer.update lets tracking win smoothly.
export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number,
  state: { rx: number; ry: number }
) => {
  if (!headBone) return;
  let targetX: number;
  let targetY: number;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    targetY = mouseX * maxRotation;
    const minRotationX = -0.3;
    const maxRotationX = 0.4;
    if (mouseY > minRotationX) {
      targetX =
        mouseY < maxRotationX
          ? -mouseY - 0.5 * maxRotation
          : -maxRotation - 0.5 * maxRotation;
    } else {
      targetX = -minRotationX - 0.5 * maxRotation;
    }
  } else {
    if (window.innerWidth <= 1024) return;
    targetX = -0.4;
    targetY = -0.3;
  }
  state.ry = lerp(state.ry, targetY, interpolationY);
  state.rx = lerp(state.rx, targetX, interpolationX);
  headBone.rotation.y = state.ry;
  headBone.rotation.x = state.rx;
};
