import setControls from "./js/utils/setcontrols.js";
import Entity from "./js/model/entity.js";
// import * as THREE from "./node_modules/three/build/three.module.js";
window.addEventListener("DOMContentLoaded",function(){
  const canvas = document.querySelector("#canvas");
  const DIR = {
      left:false,
      right:false,
      up:false,
      down:false
  };
 console.log(THREE);


});

function init(){
  return new Promise((res,rej)=>{

  const scene = new THREE.Scene();

  const camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);
  scene.add(camera);

  const renderer= new THREE.WebGLRenderer();
  renderer.setClearColor(0xEEEEEE);
  renderer.setSize(window.innerWidth,window.innerHeight);

  const axes = new THREE.AxesHelper(20);
  scene.add(axes);
  const planeGeo = new THREE.PlaneGeometry();
  const planeMaterial = new THREE.MeshBasicMaterial({"color":"0x88ff88"});
  const plane = new THREE.Mesh(planeGeo,planeMaterial);
  plane.rotation.x = -0.5*Math.PI;
  plane.position.x= 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;
  scene.add(plane);

  const cubeGeo = new THREE.CubeGeometry(4,4,4);
  const cubeMaterial = new THREE.MeshBasicMaterial({color:0xff0000,wireframe:true});
  const cube = new THREE.Mesh(cubeGeo,cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;
  cube.castShadow(true);
  scene.add(cube);

  const sphereGeo = new THREE.SphereGeometry(4,20,20);
  const sphereMaterial = new THREE.MeshBasicMaterial({color:0x7777ff,wireframe:true});
  const sphere = new THREE.Mesh(sphereGeo,sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  scene.add(sphere);
   
  document.body.append(renderer.domElement);
  renderer.render(scene,camera);
  });

}

function makeCube({x,y,z},{w,h,d},color,castShadow,...options){
  const geometry = new THREE.CubeGeometry(w,h,d);
  const material = new THREE.MeshBasicMaterial({color:0xff0000,wireframe:true});
  const mesh = new THREE.Mesh(cubeGeo,cubeMaterial);
  mesh.position.x = x;
  mesh.position.y = y;
  mesh.position.z = z;
}