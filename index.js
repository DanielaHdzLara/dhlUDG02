// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#202C39")
document.body.appendChild( renderer.domElement )
camera.position.z = 90

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var material = new THREE.MeshStandardMaterial( { color: "#F9BD9F", flatShading: true, metalness: 0, roughness: 1 })
var torus = new THREE.Mesh ( geometry, material )
scene.add(torus)

//wireframe cone
var geometry = new THREE.ConeGeometry( 40, 60, 106 );
var material = new THREE.MeshBasicMaterial( {color: "#C0E5CC", wireframe: true, transparent: true} );
var wireframeCone = new THREE.Mesh( geometry, material );
scene.add( wireframeCone );

// ambient light
var ambientLight = new THREE.AmbientLight (0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	torus.rotation.x += 0.04;
	torus.rotation.y += 0.04;
	wireframeCone.rotation.x -= -0.003;
	wireframeCone.rotation.y -= -0.003;
	renderer.render( scene, camera )
}
animate()
