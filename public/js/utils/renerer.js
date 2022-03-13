export default function(w,h,color){
    let r=new THREE.WebGLRenderer();
    r.setSize(w,h);
    r.setClearColor(color);
    return r;
}