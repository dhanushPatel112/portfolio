import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

// Tunable framing for the RobotExpressive model so it sits in the existing
// camera view (camera looks down -Z at roughly y = 13).
const ROBOT_SCALE = 1.1;
const ROBOT_POSITION = { x: 0, y: 10.4, z: 0 };
// Accent colour applied to the robot's "Main" body material to match the site.
const ROBOT_ACCENT = "#8B4513";

const setCharacter = (
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
) => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);

    const loadCharacter = () => {
        return new Promise<GLTF | null>((resolve, reject) => {
            loader.load(
                "/models/RobotExpressive.glb?v=1",
                async (gltf) => {
                    const character = gltf.scene;
                    await renderer.compileAsync(character, camera, scene);

                    character.traverse((child) => {
                        if ((child as THREE.Mesh).isMesh) {
                            const mesh = child as THREE.Mesh;
                            // Recolour the robot's main body panels to the site accent.
                            const applyAccent = (mat: THREE.Material) => {
                                if (mat.name === "Main") {
                                    const newMat = (mat as THREE.MeshStandardMaterial).clone();
                                    newMat.color = new THREE.Color(ROBOT_ACCENT);

                                    return newMat;
                                }

                                return mat;
                            };
                            if (Array.isArray(mesh.material)) {
                                mesh.material = mesh.material.map(applyAccent);
                            } else if (mesh.material) {
                                mesh.material = applyAccent(mesh.material);
                            }
                            mesh.castShadow = true;
                            mesh.receiveShadow = true;
                            mesh.frustumCulled = true;
                        }
                    });

                    character.scale.setScalar(ROBOT_SCALE);
                    character.position.set(
                        ROBOT_POSITION.x,
                        ROBOT_POSITION.y,
                        ROBOT_POSITION.z
                    );

                    // Invisible "screenlight" driver — no visible geometry, it only
                    // carries the emissive/opacity values that GsapScroll flickers and
                    // that lighting.ts reads to pulse a warm point light on the robot
                    // during the "What I Do" reveal. Named "screenlight" so the rest of
                    // the scene wiring finds it unchanged.
                    const glow = new THREE.Mesh(
                        new THREE.PlaneGeometry(1, 1),
                        new THREE.MeshStandardMaterial({
                            emissive: new THREE.Color("#FFD9A0"),
                            emissiveIntensity: 0,
                            transparent: true,
                            opacity: 0,
                        })
                    );
                    glow.name = "screenlight";
                    glow.visible = false;
                    character.add(glow);

                    resolve(gltf);
                    setCharTimeline(character, camera);
                    setAllTimeline();

                    dracoLoader.dispose();
                },
                undefined,
                (error) => {
                    console.error("Error loading GLTF model:", error);
                    reject(error);
                }
            );
        });
    };

    return { loadCharacter };
};

export default setCharacter;
