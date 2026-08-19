import * as THREE from "three";
import { GLTF } from "three-stdlib";

// RobotExpressive ships a set of named, full-body baked clips. We use Idle as
// the resting loop and one-shot gestures for intro / hover / scroll moments.
const setAnimations = (gltf: GLTF) => {
  const character = gltf.scene;
  const mixer = new THREE.AnimationMixer(character);

  const clip = (name: string) =>
    THREE.AnimationClip.findByName(gltf.animations, name);

  const idleClip = clip("Idle");
  const idleAction = idleClip ? mixer.clipAction(idleClip) : null;
  idleAction?.play();

  // Play a one-shot gesture, then fade back into the idle loop.
  const playGesture = (name: string, timeScale = 1) => {
    const gestureClip = clip(name);
    if (!gestureClip || !idleAction) return;
    const action = mixer.clipAction(gestureClip);
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.timeScale = timeScale;
    action.reset();
    action.fadeIn(0.3).play();
    idleAction.crossFadeTo(action, 0.3, false);

    const duration = gestureClip.duration / timeScale;
    setTimeout(() => {
      idleAction.reset();
      idleAction.enabled = true;
      action.crossFadeTo(idleAction, 0.4, false);
      idleAction.play();
    }, duration * 1000 - 250);
  };

  // Intro: wave hello on load, then settle into idle.
  function startIntro() {
    playGesture("Wave");
  }

  // Scroll-driven gesture (fired from GsapScroll via a window event).
  const onGesture = () => playGesture("ThumbsUp");
  window.addEventListener("robot-gesture", onGesture);

  // Hover over the face area gives a thumbs-up.
  function hover(_gltf: GLTF, hoverDiv: HTMLDivElement) {
    if (!hoverDiv) return;
    let isHovering = false;
    const onHoverFace = () => {
      if (!isHovering) {
        isHovering = true;
        playGesture("ThumbsUp");
      }
    };
    const onLeaveFace = () => {
      isHovering = false;
    };
    hoverDiv.addEventListener("mouseenter", onHoverFace);
    hoverDiv.addEventListener("mouseleave", onLeaveFace);

    return () => {
      hoverDiv.removeEventListener("mouseenter", onHoverFace);
      hoverDiv.removeEventListener("mouseleave", onLeaveFace);
      window.removeEventListener("robot-gesture", onGesture);
    };
  }

  return { mixer, startIntro, hover };
};

export default setAnimations;
