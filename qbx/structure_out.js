import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////

// init renderer
var renderer	= new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    precision: 'mediump',
});
renderer.setClearColor(new THREE.Color('lightgrey'), 0)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute'
renderer.domElement.style.top = '0px'
renderer.domElement.style.left = '0px'
document.body.appendChild( renderer.domElement );

// array of functions for the rendering loop
var onRenderFcts= [];

// init scene and camera
var scene	= new THREE.Scene();

//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);

const controls = new TrackballControls( camera, renderer.domElement );
camera.position.set( 0, 0, 59.64194839397904 );
controls.update();

const hemisphere_light = new THREE.HemisphereLight( 0xffffff, 0x080808, 1 );
camera.add(hemisphere_light);

const sphere_geom = new THREE.SphereGeometry(1, 36, 18);
const marker_geom = new THREE.CylinderGeometry(1, 1, 0.2, 36, 1, true);

const bond_mat = new THREE.MeshPhysicalMaterial({color: "#444444"})

const m_ring1 = new THREE.Matrix4();
m_ring1.set(
    1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, -1.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const m_ring2 = new THREE.Matrix4();
m_ring2.set(
    0.0, -1.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
);


////////////////////////////////////////////////////////////////////////////////
//          Entries for Cps2si
////////////////////////////////////////////////////////////////////////////////
var structureRoot = new THREE.Group
scene.add(structureRoot)

//             Si1             //
var mat = new THREE.MeshPhysicalMaterial({color:"#f0c8a0"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1800786519600739;
mesh.scale.y = 0.13850848300370328;
mesh.scale.z = 0.12679198722606108;
var m = new THREE.Matrix4();
m.set(-0.7441240961978234, 0.5253356416265935, 0.41267637816398905, 0, 
      0.6627741246294867, 0.657972225692071, 0.35749546841804847, 0,
      -0.08372448375110793, 0.5395322176243026, -0.8377918577821181, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.323471420824728;
mesh.position.y = -1.0293419610382517;
mesh.position.z = -0.352092467082608;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1880786519600739;
mesh.scale.y = 0.14650848300370328;
mesh.scale.z = 0.1347919872260611;
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.323471420824728;
mesh.position.y = -1.0293419610382517;
mesh.position.z = -0.352092467082608;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1880786519600739;
mesh.scale.y = 0.1347919872260611;
mesh.scale.z = 0.14650848300370328;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -5.323471420824728;
mesh.position.y = -1.0293419610382517;
mesh.position.z = -0.352092467082608;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14650848300370328;
mesh.scale.y = 0.1880786519600739;
mesh.scale.z = 0.1347919872260611;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -5.323471420824728;
mesh.position.y = -1.0293419610382517;
mesh.position.z = -0.352092467082608;
structureRoot.add(mesh);
//             C1             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17769017485981325;
mesh.scale.y = 0.12927096640108499;
mesh.scale.z = 0.15527916605830006;
var m = new THREE.Matrix4();
m.set(-0.9525918676085136, 0.10917787540146211, 0.2839875442496501, 0, 
      0.20977638406699597, -0.440375099190522, 0.8729625654635564, 0,
      0.22036924117013315, 0.8911509207400062, 0.39659479826434796, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.8489135135685757;
mesh.position.y = -1.4511067610382513;
mesh.position.z = 1.692154209664368;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18569017485981326;
mesh.scale.y = 0.137270966401085;
mesh.scale.z = 0.16327916605830006;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.8489135135685757;
mesh.position.y = -1.4511067610382513;
mesh.position.z = 1.692154209664368;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18569017485981326;
mesh.scale.y = 0.16327916605830006;
mesh.scale.z = 0.137270966401085;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.8489135135685757;
mesh.position.y = -1.4511067610382513;
mesh.position.z = 1.692154209664368;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.137270966401085;
mesh.scale.y = 0.18569017485981326;
mesh.scale.z = 0.16327916605830006;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.8489135135685757;
mesh.position.y = -1.4511067610382513;
mesh.position.z = 1.692154209664368;
structureRoot.add(mesh);
//             C2             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15907296834920848;
mesh.scale.y = 0.15107464412567467;
mesh.scale.z = 0.14306478576745993;
var m = new THREE.Matrix4();
m.set(-0.8662055161201881, 0.2715540782347012, 0.4194596362429411, 0, 
      0.46353344295588905, 0.7501766062450853, 0.4715631524027993, 0,
      -0.18661390919333481, 0.6029041731790459, -0.7756815112266586, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.2076420978480655;
mesh.position.y = -0.629739961038251;
mesh.position.z = 0.7305391824263907;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16707296834920848;
mesh.scale.y = 0.15907464412567468;
mesh.scale.z = 0.15106478576745994;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.2076420978480655;
mesh.position.y = -0.629739961038251;
mesh.position.z = 0.7305391824263907;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16707296834920848;
mesh.scale.y = 0.15106478576745994;
mesh.scale.z = 0.15907464412567468;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.2076420978480655;
mesh.position.y = -0.629739961038251;
mesh.position.z = 0.7305391824263907;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15907464412567468;
mesh.scale.y = 0.16707296834920848;
mesh.scale.z = 0.15106478576745994;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.2076420978480655;
mesh.position.y = -0.629739961038251;
mesh.position.z = 0.7305391824263907;
structureRoot.add(mesh);
//             C3             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1637227894090971;
mesh.scale.y = 0.1420546631827645;
mesh.scale.z = 0.13666648676343873;
var m = new THREE.Matrix4();
m.set(-0.8444914604917956, 0.38984788983530794, 0.36722308743785725, 0, 
      0.5327089259128244, 0.68220099917733, 0.5008223207628207, 0,
      -0.05527543223928332, 0.6185631895872966, -0.7837883688077739, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.9609551751721845;
mesh.position.y = 0.5756141389617491;
mesh.position.z = 0.6103916202793975;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1717227894090971;
mesh.scale.y = 0.1500546631827645;
mesh.scale.z = 0.14466648676343874;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.9609551751721845;
mesh.position.y = 0.5756141389617491;
mesh.position.z = 0.6103916202793975;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1717227894090971;
mesh.scale.y = 0.14466648676343874;
mesh.scale.z = 0.1500546631827645;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.9609551751721845;
mesh.position.y = 0.5756141389617491;
mesh.position.z = 0.6103916202793975;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1500546631827645;
mesh.scale.y = 0.1717227894090971;
mesh.scale.z = 0.14466648676343874;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.9609551751721845;
mesh.position.y = 0.5756141389617491;
mesh.position.z = 0.6103916202793975;
structureRoot.add(mesh);
//             C4             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16805026087132843;
mesh.scale.y = 0.1577440427088678;
mesh.scale.z = 0.14873218974475438;
var m = new THREE.Matrix4();
m.set(-0.7910225990038312, -0.520424037692217, -0.32162411112563444, 0, 
      -0.600346877992727, 0.761500328297007, 0.24433762724545058, 0,
      0.11775769167919034, 0.38636261593958604, -0.9147989150926606, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.0775908595643315;
mesh.position.y = 0.4749580889617486;
mesh.position.z = 1.4953120915718205;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17605026087132844;
mesh.scale.y = 0.1657440427088678;
mesh.scale.z = 0.1567321897447544;
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.0775908595643315;
mesh.position.y = 0.4749580889617486;
mesh.position.z = 1.4953120915718205;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17605026087132844;
mesh.scale.y = 0.1567321897447544;
mesh.scale.z = 0.1657440427088678;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -5.0775908595643315;
mesh.position.y = 0.4749580889617486;
mesh.position.z = 1.4953120915718205;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1657440427088678;
mesh.scale.y = 0.17605026087132844;
mesh.scale.z = 0.1567321897447544;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -5.0775908595643315;
mesh.position.y = 0.4749580889617486;
mesh.position.z = 1.4953120915718205;
structureRoot.add(mesh);
//             C5             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.13371584613636464;
mesh.scale.y = 0.17608885303287802;
mesh.scale.z = 0.16783914460103785;
var m = new THREE.Matrix4();
m.set(-0.11371746762894072, -0.3630265391995784, 0.9248135322284368, 0, 
      -0.8922878245128252, 0.44667279003144084, 0.06561902827456548, 0,
      -0.43691048943946237, -0.817737825028478, -0.37471865944394067, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.996030763494787;
mesh.position.y = -0.7749734610382513;
mesh.position.z = 2.1605776165159423;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14171584613636465;
mesh.scale.y = 0.18408885303287803;
mesh.scale.z = 0.17583914460103786;
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.996030763494787;
mesh.position.y = -0.7749734610382513;
mesh.position.z = 2.1605776165159423;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14171584613636465;
mesh.scale.y = 0.17583914460103786;
mesh.scale.z = 0.18408885303287803;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -4.996030763494787;
mesh.position.y = -0.7749734610382513;
mesh.position.z = 2.1605776165159423;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18408885303287803;
mesh.scale.y = 0.14171584613636465;
mesh.scale.z = 0.17583914460103786;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -4.996030763494787;
mesh.position.y = -0.7749734610382513;
mesh.position.z = 2.1605776165159423;
structureRoot.add(mesh);
//             C6             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.13795899596832997;
mesh.scale.y = 0.21909246927429393;
mesh.scale.z = 0.19489468753566247;
var m = new THREE.Matrix4();
m.set(0.18237181116126497, -0.8375087160025678, 0.5150919074432156, 0, 
      -0.974876628836333, -0.08588149703447785, 0.20552354370198941, 0,
      -0.12789089507258286, -0.5396327631703316, -0.8321300378370478, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.4269142327621687;
mesh.position.y = -2.836029911038251;
mesh.position.z = 2.0708471587099613;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14595899596832998;
mesh.scale.y = 0.22709246927429394;
mesh.scale.z = 0.20289468753566248;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.4269142327621687;
mesh.position.y = -2.836029911038251;
mesh.position.z = 2.0708471587099613;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14595899596832998;
mesh.scale.y = 0.20289468753566248;
mesh.scale.z = 0.22709246927429394;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.4269142327621687;
mesh.position.y = -2.836029911038251;
mesh.position.z = 2.0708471587099613;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22709246927429394;
mesh.scale.y = 0.14595899596832998;
mesh.scale.z = 0.20289468753566248;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.4269142327621687;
mesh.position.y = -2.836029911038251;
mesh.position.z = 2.0708471587099613;
structureRoot.add(mesh);
//             H6A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -4.221037584472089;
mesh.position.y = -3.386490061038251;
mesh.position.z = 2.234013196996388;
structureRoot.add(mesh);
//             H6B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.8812863474309154;
mesh.position.y = -2.8004099260382507;
mesh.position.z = 2.88407016977;
structureRoot.add(mesh);
//             H6C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.901746263632994;
mesh.position.y = -3.2281687560382513;
mesh.position.z = 1.3420967917055275;
structureRoot.add(mesh);
//             H6D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.4483553679571344;
mesh.position.y = -2.8902196360382515;
mesh.position.z = 2.072780817485926;
structureRoot.add(mesh);
//             H6E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -3.788106604998312;
mesh.position.y = -3.476299771038251;
mesh.position.z = 1.4227238447123103;
structureRoot.add(mesh);
//             H6F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -3.7676391355805574;
mesh.position.y = -3.048540941038251;
mesh.position.z = 2.964675496273683;
structureRoot.add(mesh);
//             C7             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.21097149290643144;
mesh.scale.y = 0.15820767138759037;
mesh.scale.z = 0.1793738206669701;
var m = new THREE.Matrix4();
m.set(-0.5040783571993872, -0.435292545409658, -0.7459392801789888, 0, 
      -0.859253232024624, 0.3398832516297571, 0.38231303733566435, 0,
      0.08711425290045648, 0.8336664651839872, -0.5453543176405876, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.957072315736763;
mesh.position.y = -0.9558017610382521;
mesh.position.z = -0.029236631005872482;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21897149290643145;
mesh.scale.y = 0.16620767138759038;
mesh.scale.z = 0.18737382066697011;
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.957072315736763;
mesh.position.y = -0.9558017610382521;
mesh.position.z = -0.029236631005872482;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21897149290643145;
mesh.scale.y = 0.18737382066697011;
mesh.scale.z = 0.16620767138759038;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -1.957072315736763;
mesh.position.y = -0.9558017610382521;
mesh.position.z = -0.029236631005872482;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16620767138759038;
mesh.scale.y = 0.21897149290643145;
mesh.scale.z = 0.18737382066697011;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -1.957072315736763;
mesh.position.y = -0.9558017610382521;
mesh.position.z = -0.029236631005872482;
structureRoot.add(mesh);
//             H7A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.932845478704543;
mesh.position.y = -0.43361597103825167;
mesh.position.z = -0.8582113568139391;
structureRoot.add(mesh);
//             H7B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.9455325729590456;
mesh.position.y = -1.9116984360382516;
mesh.position.z = -0.2448939007836426;
structureRoot.add(mesh);
//             H7C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.174918483166234;
mesh.position.y = -0.7351307910382512;
mesh.position.z = 0.5186188711819462;
structureRoot.add(mesh);
//             C8             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.19817028025874378;
mesh.scale.y = 0.16782102186256345;
mesh.scale.z = 0.138779794372006;
var m = new THREE.Matrix4();
m.set(0.7210735699516411, -0.4669163028079251, -0.5119004521285107, 0, 
      -0.613120537448241, -0.08589701151297212, -0.7853056156505696, 0,
      0.3227012756038872, 0.8801198041092577, -0.3482140392607765, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.53344306990698;
mesh.position.y = 1.8116939389617488;
mesh.position.z = -0.1204879440289055;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2061702802587438;
mesh.scale.y = 0.17582102186256346;
mesh.scale.z = 0.146779794372006;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.53344306990698;
mesh.position.y = 1.8116939389617488;
mesh.position.z = -0.1204879440289055;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2061702802587438;
mesh.scale.y = 0.146779794372006;
mesh.scale.z = 0.17582102186256346;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.53344306990698;
mesh.position.y = 1.8116939389617488;
mesh.position.z = -0.1204879440289055;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17582102186256346;
mesh.scale.y = 0.2061702802587438;
mesh.scale.z = 0.146779794372006;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.53344306990698;
mesh.position.y = 1.8116939389617488;
mesh.position.z = -0.1204879440289055;
structureRoot.add(mesh);
//             H8A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -4.3184264891145805;
mesh.position.y = 2.3667377589617486;
mesh.position.z = -0.3106600256695309;
structureRoot.add(mesh);
//             H8B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -3.099770022901854;
mesh.position.y = 1.5598103589617485;
mesh.position.z = -0.9624551186912047;
structureRoot.add(mesh);
//             H8C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.9025353028034733;
mesh.position.y = 2.3169805939617487;
mesh.position.z = 0.43355961154261813;
structureRoot.add(mesh);
//             C9             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.23209503126285208;
mesh.scale.y = 0.15773291320846264;
mesh.scale.z = 0.1906476795721702;
var m = new THREE.Matrix4();
m.set(0.6829781317280302, 0.5177185383203224, 0.5152750592263885, 0, 
      0.696719192834044, -0.6735926019034134, -0.24668881814477878, 0,
      0.21937009349035572, 0.5274850914864407, -0.8207534589275722, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.101358821975666;
mesh.position.y = 1.540619388961749;
mesh.position.z = 1.73430362567977;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2400950312628521;
mesh.scale.y = 0.16573291320846265;
mesh.scale.z = 0.1986476795721702;
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.101358821975666;
mesh.position.y = 1.540619388961749;
mesh.position.z = 1.73430362567977;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2400950312628521;
mesh.scale.y = 0.1986476795721702;
mesh.scale.z = 0.16573291320846265;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -6.101358821975666;
mesh.position.y = 1.540619388961749;
mesh.position.z = 1.73430362567977;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16573291320846265;
mesh.scale.y = 0.2400950312628521;
mesh.scale.z = 0.1986476795721702;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -6.101358821975666;
mesh.position.y = 1.540619388961749;
mesh.position.z = 1.73430362567977;
structureRoot.add(mesh);
//             H9A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.976881976087004;
mesh.position.y = 1.1255370089617478;
mesh.position.z = 1.8813920516716625;
structureRoot.add(mesh);
//             H9B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.146887806288408;
mesh.position.y = 2.1308550489617493;
mesh.position.z = 0.9532141127056963;
structureRoot.add(mesh);
//             H9C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -5.850718647598882;
mesh.position.y = 2.063250113961748;
mesh.position.z = 2.524453090446846;
structureRoot.add(mesh);
//             C10             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14281721116084645;
mesh.scale.y = 0.23073936676941176;
mesh.scale.z = 0.21903584029434953;
var m = new THREE.Matrix4();
m.set(-0.45347572069286635, -0.38901144295490686, 0.8018914315493253, 0, 
      -0.7567154093600397, -0.3073117921816813, -0.5770106165601724, 0,
      0.4708944255129298, -0.8684639080792158, -0.1550125168643581, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.003695278425232;
mesh.position.y = -1.3183818110382508;
mesh.position.z = 3.1321868351802546;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15081721116084645;
mesh.scale.y = 0.23873936676941176;
mesh.scale.z = 0.22703584029434953;
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.003695278425232;
mesh.position.y = -1.3183818110382508;
mesh.position.z = 3.1321868351802546;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15081721116084645;
mesh.scale.y = 0.22703584029434953;
mesh.scale.z = 0.23873936676941176;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -6.003695278425232;
mesh.position.y = -1.3183818110382508;
mesh.position.z = 3.1321868351802546;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23873936676941176;
mesh.scale.y = 0.15081721116084645;
mesh.scale.z = 0.22703584029434953;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -6.003695278425232;
mesh.position.y = -1.3183818110382508;
mesh.position.z = 3.1321868351802546;
structureRoot.add(mesh);
//             H10A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.889812937704532;
mesh.position.y = -0.9581187810382517;
mesh.position.z = 2.9196581818489857;
structureRoot.add(mesh);
//             H10B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -5.7539855131751025;
mesh.position.y = -1.0556854710382506;
mesh.position.z = 4.042831486143934;
structureRoot.add(mesh);
//             H10C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.024548532932464;
mesh.position.y = -2.296113881038251;
mesh.position.z = 3.068571634101337;
structureRoot.add(mesh);
//             H10D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -5.555769809098313;
mesh.position.y = -1.915165571038251;
mesh.position.z = 3.767708777379484;
structureRoot.add(mesh);
//             H10E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.691566320627741;
mesh.position.y = -1.8175904860382515;
mesh.position.z = 2.6445354730845363;
structureRoot.add(mesh);
//             H10F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.421010854086049;
mesh.position.y = -0.5771620760382512;
mesh.position.z = 3.6188170516302325;
structureRoot.add(mesh);
//             C11             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.23005668243031363;
mesh.scale.y = 0.14547802717471978;
mesh.scale.z = 0.1305799024190222;
var m = new THREE.Matrix4();
m.set(-0.8025375967090851, 0.34953737766560206, 0.48348425774068415, 0, 
      0.5945935612051557, 0.5350420522149979, 0.6001570622219937, 0,
      -0.04890708375865356, 0.7691252329602882, -0.6372240368834232, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.24807840326384;
mesh.position.y = -0.013546961038251926;
mesh.position.z = -2.203407796295169;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23805668243031364;
mesh.scale.y = 0.15347802717471978;
mesh.scale.z = 0.1385799024190222;
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.24807840326384;
mesh.position.y = -0.013546961038251926;
mesh.position.z = -2.203407796295169;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23805668243031364;
mesh.scale.y = 0.1385799024190222;
mesh.scale.z = 0.15347802717471978;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -6.24807840326384;
mesh.position.y = -0.013546961038251926;
mesh.position.z = -2.203407796295169;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15347802717471978;
mesh.scale.y = 0.23805668243031364;
mesh.scale.z = 0.1385799024190222;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -6.24807840326384;
mesh.position.y = -0.013546961038251926;
mesh.position.z = -2.203407796295169;
structureRoot.add(mesh);
//             C12             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.18820685746439403;
mesh.scale.y = 0.15760876273149718;
mesh.scale.z = 0.14687116978140444;
var m = new THREE.Matrix4();
m.set(0.6831693336149253, -0.08192273417624181, -0.7256502788762836, 0, 
      0.5633791657093935, 0.6913662704453051, 0.4523456595736686, 0,
      0.46463273372926, -0.7178449315246579, 0.5184737958967974, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.325130716318423;
mesh.position.y = -0.8101485110382516;
mesh.position.z = -1.7195585722420788;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19620685746439404;
mesh.scale.y = 0.1656087627314972;
mesh.scale.z = 0.15487116978140444;
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.325130716318423;
mesh.position.y = -0.8101485110382516;
mesh.position.z = -1.7195585722420788;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19620685746439404;
mesh.scale.y = 0.15487116978140444;
mesh.scale.z = 0.1656087627314972;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -7.325130716318423;
mesh.position.y = -0.8101485110382516;
mesh.position.z = -1.7195585722420788;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1656087627314972;
mesh.scale.y = 0.19620685746439404;
mesh.scale.z = 0.15487116978140444;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -7.325130716318423;
mesh.position.y = -0.8101485110382516;
mesh.position.z = -1.7195585722420788;
structureRoot.add(mesh);
//             C13             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17135403925451603;
mesh.scale.y = 0.1364403850847124;
mesh.scale.z = 0.14311415383830892;
var m = new THREE.Matrix4();
m.set(0.5683189755981806, -0.40678933338679507, -0.7152174356220363, 0, 
      -0.7452194812372106, -0.6229598468598306, -0.237842288050126, 0,
      -0.3488000383594822, 0.668164251844638, -0.6571872380055161, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.991989731931909;
mesh.position.y = -2.168123711038252;
mesh.position.z = -1.9335646277841967;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17935403925451604;
mesh.scale.y = 0.1444403850847124;
mesh.scale.z = 0.15111415383830892;
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.991989731931909;
mesh.position.y = -2.168123711038252;
mesh.position.z = -1.9335646277841967;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17935403925451604;
mesh.scale.y = 0.15111415383830892;
mesh.scale.z = 0.1444403850847124;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -6.991989731931909;
mesh.position.y = -2.168123711038252;
mesh.position.z = -1.9335646277841967;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1444403850847124;
mesh.scale.y = 0.17935403925451604;
mesh.scale.z = 0.15111415383830892;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -6.991989731931909;
mesh.position.y = -2.168123711038252;
mesh.position.z = -1.9335646277841967;
structureRoot.add(mesh);
//             C14             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17886802226831466;
mesh.scale.y = 0.14774987462185454;
mesh.scale.z = 0.15680842440378015;
var m = new THREE.Matrix4();
m.set(0.4268858491841948, -0.8839338663410581, -0.19086485192836677, 0, 
      -0.6619279395757873, -0.16162643116683442, -0.7319346279260364, 0,
      0.616133000719198, 0.43879131336390514, -0.6540965591876602, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.716699346590104;
mesh.position.y = -2.2237825610382522;
mesh.position.z = -2.531477993116079;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18686802226831467;
mesh.scale.y = 0.15574987462185455;
mesh.scale.z = 0.16480842440378016;
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.716699346590104;
mesh.position.y = -2.2237825610382522;
mesh.position.z = -2.531477993116079;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18686802226831467;
mesh.scale.y = 0.16480842440378016;
mesh.scale.z = 0.15574987462185455;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -5.716699346590104;
mesh.position.y = -2.2237825610382522;
mesh.position.z = -2.531477993116079;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15574987462185455;
mesh.scale.y = 0.18686802226831467;
mesh.scale.z = 0.16480842440378016;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -5.716699346590104;
mesh.position.y = -2.2237825610382522;
mesh.position.z = -2.531477993116079;
structureRoot.add(mesh);
//             C15             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.22491220897381806;
mesh.scale.y = 0.14921592106712173;
mesh.scale.z = 0.13535771854383735;
var m = new THREE.Matrix4();
m.set(0.6086908496862967, -0.7455880813247011, -0.2712818875168873, 0, 
      -0.7092752167049531, -0.35811982341955173, -0.6071893107113228, 0,
      0.35556169151965283, 0.5620040970139808, -0.7468114075609609, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.239715962566709;
mesh.position.y = -0.8993873610382526;
mesh.position.z = -2.69507856146452;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23291220897381806;
mesh.scale.y = 0.15721592106712173;
mesh.scale.z = 0.14335771854383736;
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.239715962566709;
mesh.position.y = -0.8993873610382526;
mesh.position.z = -2.69507856146452;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23291220897381806;
mesh.scale.y = 0.14335771854383736;
mesh.scale.z = 0.15721592106712173;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -5.239715962566709;
mesh.position.y = -0.8993873610382526;
mesh.position.z = -2.69507856146452;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15721592106712173;
mesh.scale.y = 0.23291220897381806;
mesh.scale.z = 0.14335771854383736;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -5.239715962566709;
mesh.position.y = -0.8993873610382526;
mesh.position.z = -2.69507856146452;
structureRoot.add(mesh);
//             C16             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.31477065199219845;
mesh.scale.y = 0.16901790579156753;
mesh.scale.z = 0.13355474922789085;
var m = new THREE.Matrix4();
m.set(-0.8091946233637459, 0.2223370117722211, 0.543847694410305, 0, 
      0.586609958732968, 0.35781067931165306, 0.7265399328913993, 0,
      -0.03305779536676383, 0.9069386809298259, -0.4199635831816335, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.241180764124135;
mesh.position.y = 1.4763136889617479;
mesh.position.z = -2.3352876701165552;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.32277065199219845;
mesh.scale.y = 0.17701790579156754;
mesh.scale.z = 0.14155474922789085;
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.241180764124135;
mesh.position.y = 1.4763136889617479;
mesh.position.z = -2.3352876701165552;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.32277065199219845;
mesh.scale.y = 0.14155474922789085;
mesh.scale.z = 0.17701790579156754;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -6.241180764124135;
mesh.position.y = 1.4763136889617479;
mesh.position.z = -2.3352876701165552;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17701790579156754;
mesh.scale.y = 0.32277065199219845;
mesh.scale.z = 0.14155474922789085;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -6.241180764124135;
mesh.position.y = 1.4763136889617479;
mesh.position.z = -2.3352876701165552;
structureRoot.add(mesh);
//             H16A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -5.317078005423998;
mesh.position.y = 1.7930318539617471;
mesh.position.z = -2.4133292692543513;
structureRoot.add(mesh);
//             H16B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.657846918275858;
mesh.position.y = 1.8763270439617483;
mesh.position.z = -1.5435738971262278;
structureRoot.add(mesh);
//             H16C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -6.7441048147223395;
mesh.position.y = 1.7357107939617475;
mesh.position.z = -3.1353878733037615;
structureRoot.add(mesh);
//             C17             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16408673094755524;
mesh.scale.y = 0.21581506503754766;
mesh.scale.z = 0.24159435238028126;
var m = new THREE.Matrix4();
m.set(-0.7484250987402618, 0.6553064744340856, 0.10214350757830158, 0, 
      0.6114745598143253, 0.6221604667519941, 0.48889182475351123, 0,
      0.25682432570826846, 0.4283570685487865, -0.8663437467592084, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.584271879089307;
mesh.position.y = -0.3027547110382516;
mesh.position.z = -1.0836238264839348;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17208673094755525;
mesh.scale.y = 0.22381506503754767;
mesh.scale.z = 0.24959435238028127;
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.584271879089307;
mesh.position.y = -0.3027547110382516;
mesh.position.z = -1.0836238264839348;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17208673094755525;
mesh.scale.y = 0.24959435238028127;
mesh.scale.z = 0.22381506503754767;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -8.584271879089307;
mesh.position.y = -0.3027547110382516;
mesh.position.z = -1.0836238264839348;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22381506503754767;
mesh.scale.y = 0.17208673094755525;
mesh.scale.z = 0.24959435238028127;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -8.584271879089307;
mesh.position.y = -0.3027547110382516;
mesh.position.z = -1.0836238264839348;
structureRoot.add(mesh);
//             H17A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -8.721687319516207;
mesh.position.y = -0.7548758310382517;
mesh.position.z = -0.2249924239433838;
structureRoot.add(mesh);
//             H17B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -9.344820548939275;
mesh.position.y = -0.4847331260382517;
mesh.position.z = -1.6740632747491677;
structureRoot.add(mesh);
//             H17C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -8.509190622180576;
mesh.position.y = 0.6631488039617479;
mesh.position.z = -0.9357315198773168;
structureRoot.add(mesh);
//             C18             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14016243571653686;
mesh.scale.y = 0.18601623726216393;
mesh.scale.z = 0.21070225346751337;
var m = new THREE.Matrix4();
m.set(-0.5864440510343828, -0.7922131699764019, 0.16876512768437157, 0, 
      -0.7307043489722116, 0.4275257527203125, -0.5322526516176564, 0,
      0.3495061221201687, -0.43545381394227173, -0.8295935429616427, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.795625992460254;
mesh.position.y = -3.3503915610382515;
mesh.position.z = -1.4892576393744221;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14816243571653687;
mesh.scale.y = 0.19401623726216394;
mesh.scale.z = 0.21870225346751337;
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.795625992460254;
mesh.position.y = -3.3503915610382515;
mesh.position.z = -1.4892576393744221;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14816243571653687;
mesh.scale.y = 0.21870225346751337;
mesh.scale.z = 0.19401623726216394;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -7.795625992460254;
mesh.position.y = -3.3503915610382515;
mesh.position.z = -1.4892576393744221;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19401623726216394;
mesh.scale.y = 0.14816243571653687;
mesh.scale.z = 0.21870225346751337;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -7.795625992460254;
mesh.position.y = -3.3503915610382515;
mesh.position.z = -1.4892576393744221;
structureRoot.add(mesh);
//             H18A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -7.630368202396886;
mesh.position.y = -4.103683306038252;
mesh.position.z = -2.0939931266799316;
structureRoot.add(mesh);
//             H18B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -8.748481723684865;
mesh.position.y = -3.1220475610382517;
mesh.position.z = -1.5047486360852371;
structureRoot.add(mesh);
//             H18C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -7.534081300876583;
mesh.position.y = -3.5994124460382517;
mesh.position.z = -0.5782436378580282;
structureRoot.add(mesh);
//             H18D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -8.31159877098056;
mesh.position.y = -3.1130733060382516;
mesh.position.z = -0.6906565649011664;
structureRoot.add(mesh);
//             H18E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -7.193485249692582;
mesh.position.y = -4.094717446038252;
mesh.position.z = -1.279901055495861;
structureRoot.add(mesh);
//             H18F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -8.407885672500864;
mesh.position.y = -3.6173525610382518;
mesh.position.z = -2.20640605372307;
structureRoot.add(mesh);
//             C19             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16909043791660158;
mesh.scale.y = 0.20411301594797435;
mesh.scale.z = 0.23343470878715245;
var m = new THREE.Matrix4();
m.set(0.7425025550864482, -0.5833297777577593, -0.32926634518453135, 0, 
      -0.6332235508677155, -0.45095255684762475, -0.6290228343224683, 0,
      0.21844424990504427, 0.6755502659711362, -0.7042115788807718, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.978996484242607;
mesh.position.y = -3.483536261038252;
mesh.position.z = -2.88127469303771;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1770904379166016;
mesh.scale.y = 0.21211301594797435;
mesh.scale.z = 0.24143470878715245;
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.978996484242607;
mesh.position.y = -3.483536261038252;
mesh.position.z = -2.88127469303771;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1770904379166016;
mesh.scale.y = 0.24143470878715245;
mesh.scale.z = 0.21211301594797435;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -4.978996484242607;
mesh.position.y = -3.483536261038252;
mesh.position.z = -2.88127469303771;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21211301594797435;
mesh.scale.y = 0.1770904379166016;
mesh.scale.z = 0.24143470878715245;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -4.978996484242607;
mesh.position.y = -3.483536261038252;
mesh.position.z = -2.88127469303771;
structureRoot.add(mesh);
//             H19A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -4.159635532366746;
mesh.position.y = -3.257542861038252;
mesh.position.z = -3.369034687648929;
structureRoot.add(mesh);
//             H19B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -5.548001805134909;
mesh.position.y = -4.050064441038252;
mesh.position.z = -3.4431003367192936;
structureRoot.add(mesh);
//             H19C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -4.747780034867382;
mesh.position.y = -3.9654008660382516;
mesh.position.z = -2.0597956107993927;
structureRoot.add(mesh);
//             C20             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.30139926072915607;
mesh.scale.y = 0.14557102194401192;
mesh.scale.z = 0.19500557615379588;
var m = new THREE.Matrix4();
m.set(0.5021610241357388, -0.8570905909131735, -0.11502184491240404, 0, 
      -0.677544831725987, -0.47259528585632665, 0.5635483091872259, 0,
      -0.5373707350054991, -0.2050595395354341, -0.8180362329415279, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.961024491000085;
mesh.position.y = -0.5063334610382522;
mesh.position.z = -3.3792461441062702;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.3093992607291561;
mesh.scale.y = 0.15357102194401193;
mesh.scale.z = 0.20300557615379589;
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.961024491000085;
mesh.position.y = -0.5063334610382522;
mesh.position.z = -3.3792461441062702;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.3093992607291561;
mesh.scale.y = 0.20300557615379589;
mesh.scale.z = 0.15357102194401193;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -3.961024491000085;
mesh.position.y = -0.5063334610382522;
mesh.position.z = -3.3792461441062702;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15357102194401193;
mesh.scale.y = 0.3093992607291561;
mesh.scale.z = 0.20300557615379589;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -3.961024491000085;
mesh.position.y = -0.5063334610382522;
mesh.position.z = -3.3792461441062702;
structureRoot.add(mesh);
//             H20A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -3.2457170604349592;
mesh.position.y = -1.1212504210382526;
mesh.position.z = -3.1130530281162176;
structureRoot.add(mesh);
//             H20B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -3.7193684847723354;
mesh.position.y = 0.4073783389617476;
mesh.position.z = -3.1200706886177496;
structureRoot.add(mesh);
//             H20C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -4.083621641304749;
mesh.position.y = -0.5488541360382522;
mesh.position.z = -4.350529465224067;
structureRoot.add(mesh);
//             Si2             //
var mat = new THREE.MeshPhysicalMaterial({color:"#f0c8a0"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1320331145303931;
mesh.scale.y = 0.14948648372986525;
mesh.scale.z = 0.16815680435291266;
var m = new THREE.Matrix4();
m.set(-0.7739365550879584, -0.340127993685392, 0.5341677232949721, 0, 
      -0.586590082361105, 0.06721632908565385, -0.8070898589251643, 0,
      0.23860906096411297, -0.9379738338652093, -0.2515368820074407, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.1680663026566265;
mesh.position.y = 2.484805038961747;
mesh.position.z = -3.838978949717557;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1400331145303931;
mesh.scale.y = 0.15748648372986526;
mesh.scale.z = 0.17615680435291267;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.1680663026566265;
mesh.position.y = 2.484805038961747;
mesh.position.z = -3.838978949717557;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1400331145303931;
mesh.scale.y = 0.17615680435291267;
mesh.scale.z = 0.15748648372986526;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.1680663026566265;
mesh.position.y = 2.484805038961747;
mesh.position.z = -3.838978949717557;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15748648372986526;
mesh.scale.y = 0.1400331145303931;
mesh.scale.z = 0.17615680435291267;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.1680663026566265;
mesh.position.y = 2.484805038961747;
mesh.position.z = -3.838978949717557;
structureRoot.add(mesh);
//             C21             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1657518032454065;
mesh.scale.y = 0.13283278180907282;
mesh.scale.z = 0.15164312382230302;
var m = new THREE.Matrix4();
m.set(-0.9505737205463994, -0.24966173114619994, -0.184603959349897, 0, 
      -0.2930334788560832, 0.9179211525331076, 0.26749231391162054, 0,
      0.10266928496915453, 0.3083663044714417, -0.9457109707466381, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.1015144798579612;
mesh.position.y = 4.130644788961748;
mesh.position.z = -5.293351067279918;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1737518032454065;
mesh.scale.y = 0.14083278180907283;
mesh.scale.z = 0.15964312382230303;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.1015144798579612;
mesh.position.y = 4.130644788961748;
mesh.position.z = -5.293351067279918;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1737518032454065;
mesh.scale.y = 0.15964312382230303;
mesh.scale.z = 0.14083278180907283;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.1015144798579612;
mesh.position.y = 4.130644788961748;
mesh.position.z = -5.293351067279918;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14083278180907283;
mesh.scale.y = 0.1737518032454065;
mesh.scale.z = 0.15964312382230303;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.1015144798579612;
mesh.position.y = 4.130644788961748;
mesh.position.z = -5.293351067279918;
structureRoot.add(mesh);
//             C22             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16931309972631975;
mesh.scale.y = 0.1545493927721985;
mesh.scale.z = 0.13166734746704264;
var m = new THREE.Matrix4();
m.set(-0.2581888412266107, 0.6070010177429647, -0.7515905046799521, 0, 
      0.9660897436920068, 0.16465340609509532, -0.19889661383340881, 0,
      0.003021489561777189, -0.7774567642771455, -0.6289291297757952, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.0815492769154638;
mesh.position.y = 4.008413588961748;
mesh.position.z = -4.274595336887042;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17731309972631976;
mesh.scale.y = 0.16254939277219851;
mesh.scale.z = 0.13966734746704265;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.0815492769154638;
mesh.position.y = 4.008413588961748;
mesh.position.z = -4.274595336887042;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17731309972631976;
mesh.scale.y = 0.13966734746704265;
mesh.scale.z = 0.16254939277219851;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.0815492769154638;
mesh.position.y = 4.008413588961748;
mesh.position.z = -4.274595336887042;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16254939277219851;
mesh.scale.y = 0.17731309972631976;
mesh.scale.z = 0.13966734746704265;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.0815492769154638;
mesh.position.y = 4.008413588961748;
mesh.position.z = -4.274595336887042;
structureRoot.add(mesh);
//             C23             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14314755860893277;
mesh.scale.y = 0.14740189562815204;
mesh.scale.z = 0.15848596178058186;
var m = new THREE.Matrix4();
m.set(0.5822143752402077, 0.8092466809773643, -0.07839789914771142, 0, 
      0.806506979464109, -0.587043214477808, -0.07019085703452947, 0,
      -0.10282467281412933, -0.022362326862017834, -0.9944480946726096, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.616122685510497;
mesh.position.y = 2.7020676389617475;
mesh.position.z = -4.3308669799179125;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15114755860893278;
mesh.scale.y = 0.15540189562815204;
mesh.scale.z = 0.16648596178058186;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.616122685510497;
mesh.position.y = 2.7020676389617475;
mesh.position.z = -4.3308669799179125;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15114755860893278;
mesh.scale.y = 0.16648596178058186;
mesh.scale.z = 0.15540189562815204;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.616122685510497;
mesh.position.y = 2.7020676389617475;
mesh.position.z = -4.3308669799179125;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15540189562815204;
mesh.scale.y = 0.15114755860893278;
mesh.scale.z = 0.16648596178058186;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.616122685510497;
mesh.position.y = 2.7020676389617475;
mesh.position.z = -4.3308669799179125;
structureRoot.add(mesh);
//             C24             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1640048532152411;
mesh.scale.y = 0.1564105543670835;
mesh.scale.z = 0.12785281480102553;
var m = new THREE.Matrix4();
m.set(-0.8829526434237442, 0.09436397435376886, -0.45988049514540497, 0, 
      0.4654190918178375, 0.047664988349115346, -0.883806040858025, 0,
      -0.061479252130141375, -0.9943960424447791, -0.08600472270566772, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.9688919078444798;
mesh.position.y = 2.009564088961748;
mesh.position.z = -5.384819645333959;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17200485321524112;
mesh.scale.y = 0.16441055436708352;
mesh.scale.z = 0.13585281480102554;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.9688919078444798;
mesh.position.y = 2.009564088961748;
mesh.position.z = -5.384819645333959;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17200485321524112;
mesh.scale.y = 0.13585281480102554;
mesh.scale.z = 0.16441055436708352;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.9688919078444798;
mesh.position.y = 2.009564088961748;
mesh.position.z = -5.384819645333959;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16441055436708352;
mesh.scale.y = 0.17200485321524112;
mesh.scale.z = 0.13585281480102554;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.9688919078444798;
mesh.position.y = 2.009564088961748;
mesh.position.z = -5.384819645333959;
structureRoot.add(mesh);
//             C25             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16380979577390925;
mesh.scale.y = 0.13748288154574523;
mesh.scale.z = 0.14284295770410607;
var m = new THREE.Matrix4();
m.set(-0.9948761442930236, 0.10061564092165301, -0.009896985327464197, 0, 
      0.06601146806727128, 0.7206046707330201, 0.6901966347363331, 0,
      0.076576390619111, 0.6860068522395972, -0.7235541825461785, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.042755541217492;
mesh.position.y = 2.898090888961747;
mesh.position.z = -5.996637972650305;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17180979577390926;
mesh.scale.y = 0.14548288154574524;
mesh.scale.z = 0.15084295770410608;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.042755541217492;
mesh.position.y = 2.898090888961747;
mesh.position.z = -5.996637972650305;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17180979577390926;
mesh.scale.y = 0.15084295770410608;
mesh.scale.z = 0.14548288154574524;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.042755541217492;
mesh.position.y = 2.898090888961747;
mesh.position.z = -5.996637972650305;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14548288154574524;
mesh.scale.y = 0.17180979577390926;
mesh.scale.z = 0.15084295770410608;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.042755541217492;
mesh.position.y = 2.898090888961747;
mesh.position.z = -5.996637972650305;
structureRoot.add(mesh);
//             C26             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1346348458929954;
mesh.scale.y = 0.21006510610792223;
mesh.scale.z = 0.197232847849104;
var m = new THREE.Matrix4();
m.set(0.4308771341013198, -0.9023975237999835, 0.0048584306408491805, 0, 
      -0.8879903357753365, -0.42302706778897586, 0.1803365284335562, 0,
      -0.16067998904107175, -0.08201712600134065, -0.983592970778178, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.2916334079302842;
mesh.position.y = 5.360932038961749;
mesh.position.z = -5.576230137651326;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1426348458929954;
mesh.scale.y = 0.21806510610792224;
mesh.scale.z = 0.205232847849104;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.2916334079302842;
mesh.position.y = 5.360932038961749;
mesh.position.z = -5.576230137651326;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1426348458929954;
mesh.scale.y = 0.205232847849104;
mesh.scale.z = 0.21806510610792224;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.2916334079302842;
mesh.position.y = 5.360932038961749;
mesh.position.z = -5.576230137651326;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21806510610792224;
mesh.scale.y = 0.1426348458929954;
mesh.scale.z = 0.205232847849104;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.2916334079302842;
mesh.position.y = 5.360932038961749;
mesh.position.z = -5.576230137651326;
structureRoot.add(mesh);
//             H26A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.7394374290600254;
mesh.position.y = 5.212617573961747;
mesh.position.z = -6.37207194623079;
structureRoot.add(mesh);
//             H26B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.8926862536051665;
mesh.position.y = 6.119050908961748;
mesh.position.z = -5.732139523902109;
structureRoot.add(mesh);
//             H26C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.7134506746272073;
mesh.position.y = 5.554881723961747;
mesh.position.z = -4.808980407152411;
structureRoot.add(mesh);
//             C27             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.24015572324795975;
mesh.scale.y = 0.2016780642618425;
mesh.scale.z = 0.13705457880063754;
var m = new THREE.Matrix4();
m.set(-0.2714487493037521, -0.6253636861170988, 0.731598138726079, 0, 
      -0.9511515895658011, 0.29045151437880606, -0.1046354216386955, 0,
      -0.1470585943353139, -0.7242638869093864, -0.6736583644185151, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.39032429945879;
mesh.position.y = 5.071388488961748;
mesh.position.z = -3.263443882579418;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.24815572324795976;
mesh.scale.y = 0.20967806426184252;
mesh.scale.z = 0.14505457880063755;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.39032429945879;
mesh.position.y = 5.071388488961748;
mesh.position.z = -3.263443882579418;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.24815572324795976;
mesh.scale.y = 0.14505457880063755;
mesh.scale.z = 0.20967806426184252;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.39032429945879;
mesh.position.y = 5.071388488961748;
mesh.position.z = -3.263443882579418;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.20967806426184252;
mesh.scale.y = 0.24815572324795976;
mesh.scale.z = 0.14505457880063755;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.39032429945879;
mesh.position.y = 5.071388488961748;
mesh.position.z = -3.263443882579418;
structureRoot.add(mesh);
//             H27A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.115197077266057;
mesh.position.y = 4.765768513961747;
mesh.position.z = -2.679044402176185;
structureRoot.add(mesh);
//             H27B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.591299358729529;
mesh.position.y = 5.252208393961748;
mesh.position.z = -2.7254304862962275;
structureRoot.add(mesh);
//             H27C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.665869159565645;
mesh.position.y = 5.890891598961748;
mesh.position.z = -3.724632363898454;
structureRoot.add(mesh);
//             C28             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.21818025431710236;
mesh.scale.y = 0.15506488486096817;
mesh.scale.z = 0.1884681249265564;
var m = new THREE.Matrix4();
m.set(0.47659397666766606, -0.20891951636347458, -0.8539384152774437, 0, 
      0.785693572264669, -0.3345423332084711, 0.5203528012737277, 0,
      -0.3943904054437467, -0.9189309348225709, 0.004705860179920888, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.637091876040341;
mesh.position.y = 2.1051831389617477;
mesh.position.z = -3.411184103664331;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22618025431710237;
mesh.scale.y = 0.16306488486096818;
mesh.scale.z = 0.1964681249265564;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.637091876040341;
mesh.position.y = 2.1051831389617477;
mesh.position.z = -3.411184103664331;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22618025431710237;
mesh.scale.y = 0.1964681249265564;
mesh.scale.z = 0.16306488486096818;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.637091876040341;
mesh.position.y = 2.1051831389617477;
mesh.position.z = -3.411184103664331;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16306488486096818;
mesh.scale.y = 0.22618025431710237;
mesh.scale.z = 0.1964681249265564;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.637091876040341;
mesh.position.y = 2.1051831389617477;
mesh.position.z = -3.411184103664331;
structureRoot.add(mesh);
//             H28A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.30640448849341;
mesh.position.y = 1.2491869639617472;
mesh.position.z = -3.067210106573695;
structureRoot.add(mesh);
//             H28B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.800242583883154;
mesh.position.y = 2.716775678961747;
mesh.position.z = -2.6629885163847504;
structureRoot.add(mesh);
//             H28C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.472907052522437;
mesh.position.y = 1.9590849539617472;
mesh.position.z = -3.9017250906724428;
structureRoot.add(mesh);
//             H28D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.413275135034031;
mesh.position.y = 2.7008419689617473;
mesh.position.z = -3.3540651270125323;
structureRoot.add(mesh);
//             H28E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.91946795264429;
mesh.position.y = 1.2332532539617476;
mesh.position.z = -3.7582867172014733;
structureRoot.add(mesh);
//             H28F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.246803484005003;
mesh.position.y = 1.9909439789617474;
mesh.position.z = -2.519550142913781;
structureRoot.add(mesh);
//             C29             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.12696120531397645;
mesh.scale.y = 0.20321119355783646;
mesh.scale.z = 0.21891661234004162;
var m = new THREE.Matrix4();
m.set(0.09333870655903485, -0.9772078586220289, -0.19066380596546106, 0, 
      -0.9746703172100033, -0.050591605278137664, -0.21784917311096835, 0,
      0.20323793594611692, 0.20616811228395554, -0.9571776485426478, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.276931248962182;
mesh.position.y = 0.6116286889617482;
mesh.position.z = -5.827171248464669;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.13496120531397646;
mesh.scale.y = 0.21121119355783646;
mesh.scale.z = 0.22691661234004162;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.276931248962182;
mesh.position.y = 0.6116286889617482;
mesh.position.z = -5.827171248464669;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.13496120531397646;
mesh.scale.y = 0.22691661234004162;
mesh.scale.z = 0.21121119355783646;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.276931248962182;
mesh.position.y = 0.6116286889617482;
mesh.position.z = -5.827171248464669;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21121119355783646;
mesh.scale.y = 0.13496120531397646;
mesh.scale.z = 0.22691661234004162;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.276931248962182;
mesh.position.y = 0.6116286889617482;
mesh.position.z = -5.827171248464669;
structureRoot.add(mesh);
//             H29A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.5370297793346346;
mesh.position.y = 0.27074131896174736;
mesh.position.z = -6.371898134205983;
structureRoot.add(mesh);
//             H29B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.39464563029755;
mesh.position.y = 0.038644753961747824;
mesh.position.z = -5.040845648243323;
structureRoot.add(mesh);
//             H29C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.100705534734779;
mesh.position.y = 0.6109906689617479;
mesh.position.z = -6.358036625227722;
structureRoot.add(mesh);
//             C30             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14403055780463944;
mesh.scale.y = 0.2155875886465533;
mesh.scale.z = 0.19189684666093945;
var m = new THREE.Matrix4();
m.set(0.3127407300344728, 0.22729226558355992, 0.9222426263101254, 0, 
      0.9466958773790063, 0.004327774268809984, -0.32209965247337985, 0,
      -0.07720201766209643, 0.973816972729358, -0.21382317950383808, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.2484052355996909;
mesh.position.y = 2.627855838961747;
mesh.position.z = -7.239176684980623;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15203055780463945;
mesh.scale.y = 0.22358758864655331;
mesh.scale.z = 0.19989684666093946;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.2484052355996909;
mesh.position.y = 2.627855838961747;
mesh.position.z = -7.239176684980623;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15203055780463945;
mesh.scale.y = 0.19989684666093946;
mesh.scale.z = 0.22358758864655331;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.2484052355996909;
mesh.position.y = 2.627855838961747;
mesh.position.z = -7.239176684980623;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22358758864655331;
mesh.scale.y = 0.15203055780463945;
mesh.scale.z = 0.19989684666093946;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.2484052355996909;
mesh.position.y = 2.627855838961747;
mesh.position.z = -7.239176684980623;
structureRoot.add(mesh);
//             H30A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.9375361921721712;
mesh.position.y = 1.6984957589617466;
mesh.position.z = -7.232484922025599;
structureRoot.add(mesh);
//             H30B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.8121293247539683;
mesh.position.y = 2.778201893961746;
mesh.position.z = -8.0264582513384;
structureRoot.add(mesh);
//             H30C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.47602337860124777;
mesh.position.y = 3.2303649889617465;
mesh.position.z = -7.270506302451865;
structureRoot.add(mesh);
//             C31             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.16718467657537814;
mesh.scale.y = 0.14705056941124867;
mesh.scale.z = 0.1353753032599635;
var m = new THREE.Matrix4();
m.set(0.8742023979883627, 0.20908268152549728, 0.4382403446027112, 0, 
      0.33965777632124083, 0.3816539460774714, -0.8596353066434649, 0,
      -0.34699101189498405, 0.9003469874051903, 0.2626262361884136, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.09009580983976306;
mesh.position.y = 0.7196723389617472;
mesh.position.z = -2.7265819909605664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17518467657537815;
mesh.scale.y = 0.15505056941124867;
mesh.scale.z = 0.1433753032599635;
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.09009580983976306;
mesh.position.y = 0.7196723389617472;
mesh.position.z = -2.7265819909605664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17518467657537815;
mesh.scale.y = 0.1433753032599635;
mesh.scale.z = 0.15505056941124867;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -0.09009580983976306;
mesh.position.y = 0.7196723389617472;
mesh.position.z = -2.7265819909605664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15505056941124867;
mesh.scale.y = 0.17518467657537815;
mesh.scale.z = 0.1433753032599635;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -0.09009580983976306;
mesh.position.y = 0.7196723389617472;
mesh.position.z = -2.7265819909605664;
structureRoot.add(mesh);
//             C32             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.13421670598673013;
mesh.scale.y = 0.15230828108090452;
mesh.scale.z = 0.17015377923510733;
var m = new THREE.Matrix4();
m.set(0.282129101964665, -0.5848758792657154, -0.7604757561406992, 0, 
      -0.9591520031628917, -0.1548120630521863, -0.23677132419728977, 0,
      0.02075101571548446, 0.7962119259259319, -0.6046618595215795, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.6818569093823861;
mesh.position.y = 1.0636994389617471;
mesh.position.z = -3.974769594097072;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14221670598673014;
mesh.scale.y = 0.16030828108090453;
mesh.scale.z = 0.17815377923510733;
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.6818569093823861;
mesh.position.y = 1.0636994389617471;
mesh.position.z = -3.974769594097072;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14221670598673014;
mesh.scale.y = 0.17815377923510733;
mesh.scale.z = 0.16030828108090453;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -0.6818569093823861;
mesh.position.y = 1.0636994389617471;
mesh.position.z = -3.974769594097072;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16030828108090453;
mesh.scale.y = 0.14221670598673014;
mesh.scale.z = 0.17815377923510733;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -0.6818569093823861;
mesh.position.y = 1.0636994389617471;
mesh.position.z = -3.974769594097072;
structureRoot.add(mesh);
//             C33             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17113985475855314;
mesh.scale.y = 0.13511051514031613;
mesh.scale.z = 0.15302868729847272;
var m = new THREE.Matrix4();
m.set(0.5152906999773669, 0.7477586151973482, -0.4187272954023651, 0, 
      0.7332863330701402, -0.13180035042196042, 0.6670231040685142, 0,
      0.44358386833763763, -0.6507578051985183, -0.6162366677858634, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.204990611669615;
mesh.position.y = 2.3814625889617482;
mesh.position.z = -3.8607054528182783;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17913985475855315;
mesh.scale.y = 0.14311051514031614;
mesh.scale.z = 0.16102868729847272;
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.204990611669615;
mesh.position.y = 2.3814625889617482;
mesh.position.z = -3.8607054528182783;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17913985475855315;
mesh.scale.y = 0.16102868729847272;
mesh.scale.z = 0.14311051514031614;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -1.204990611669615;
mesh.position.y = 2.3814625889617482;
mesh.position.z = -3.8607054528182783;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14311051514031614;
mesh.scale.y = 0.17913985475855315;
mesh.scale.z = 0.16102868729847272;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -1.204990611669615;
mesh.position.y = 2.3814625889617482;
mesh.position.z = -3.8607054528182783;
structureRoot.add(mesh);
//             C34             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15959427879219543;
mesh.scale.y = 0.14230649114352828;
mesh.scale.z = 0.1351265364251022;
var m = new THREE.Matrix4();
m.set(-0.551740285436226, -0.29451029489635994, 0.780286065252232, 0, 
      -0.8322144980442086, 0.13295206633909548, -0.5382776024517371, 0,
      0.05478765072328042, -0.9463548141454261, -0.31845074826729397, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.9204608275808859;
mesh.position.y = 2.845622138961747;
mesh.position.z = -2.5495109906896776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16759427879219543;
mesh.scale.y = 0.1503064911435283;
mesh.scale.z = 0.1431265364251022;
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.9204608275808859;
mesh.position.y = 2.845622138961747;
mesh.position.z = -2.5495109906896776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16759427879219543;
mesh.scale.y = 0.1431265364251022;
mesh.scale.z = 0.1503064911435283;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -0.9204608275808859;
mesh.position.y = 2.845622138961747;
mesh.position.z = -2.5495109906896776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1503064911435283;
mesh.scale.y = 0.16759427879219543;
mesh.scale.z = 0.1431265364251022;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -0.9204608275808859;
mesh.position.y = 2.845622138961747;
mesh.position.z = -2.5495109906896776;
structureRoot.add(mesh);
//             C35             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1493675899016521;
mesh.scale.y = 0.137359752596307;
mesh.scale.z = 0.14263485003101226;
var m = new THREE.Matrix4();
m.set(-0.9975055139203692, 0.06634050863450944, -0.024118180125680233, 0, 
      0.03588475670335796, 0.18235068813557534, -0.9825785010739971, 0,
      -0.06078679079208728, -0.9809929477068611, -0.18427642989433807, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.23970580639502614;
mesh.position.y = 1.8197531389617478;
mesh.position.z = -1.8525247712185013;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15736758990165212;
mesh.scale.y = 0.145359752596307;
mesh.scale.z = 0.15063485003101226;
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.23970580639502614;
mesh.position.y = 1.8197531389617478;
mesh.position.z = -1.8525247712185013;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15736758990165212;
mesh.scale.y = 0.15063485003101226;
mesh.scale.z = 0.145359752596307;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -0.23970580639502614;
mesh.position.y = 1.8197531389617478;
mesh.position.z = -1.8525247712185013;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.145359752596307;
mesh.scale.y = 0.15736758990165212;
mesh.scale.z = 0.15063485003101226;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -0.23970580639502614;
mesh.position.y = 1.8197531389617478;
mesh.position.z = -1.8525247712185013;
structureRoot.add(mesh);
//             C36             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.2314330770621583;
mesh.scale.y = 0.13851821310210205;
mesh.scale.z = 0.1888062575749071;
var m = new THREE.Matrix4();
m.set(0.9008488009385428, 0.3778359906320625, 0.2138022498260416, 0, 
      0.38134914200117903, -0.9240592932413842, 0.02621553869745405, 0,
      0.20747112990137567, 0.05791706792752326, -0.976525137157321, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.6113771683638021;
mesh.position.y = -0.575424311038252;
mesh.position.z = -2.4413130052480803;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2394330770621583;
mesh.scale.y = 0.14651821310210206;
mesh.scale.z = 0.1968062575749071;
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.6113771683638021;
mesh.position.y = -0.575424311038252;
mesh.position.z = -2.4413130052480803;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2394330770621583;
mesh.scale.y = 0.1968062575749071;
mesh.scale.z = 0.14651821310210206;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 0.6113771683638021;
mesh.position.y = -0.575424311038252;
mesh.position.z = -2.4413130052480803;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14651821310210206;
mesh.scale.y = 0.2394330770621583;
mesh.scale.z = 0.1968062575749071;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 0.6113771683638021;
mesh.position.y = -0.575424311038252;
mesh.position.z = -2.4413130052480803;
structureRoot.add(mesh);
//             H36A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.017217977504636;
mesh.position.y = -0.5377223660382517;
mesh.position.z = -1.5502004805719487;
structureRoot.add(mesh);
//             H36B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.3099125906045401;
mesh.position.y = -0.723235076038252;
mesh.position.z = -3.112553318544901;
structureRoot.add(mesh);
//             H36C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.03502290447917744;
mesh.position.y = -1.311330011038252;
mesh.position.z = -2.475075991066605;
structureRoot.add(mesh);
//             C37             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.22220592962931857;
mesh.scale.y = 0.18727460713214109;
mesh.scale.z = 0.13580078140293142;
var m = new THREE.Matrix4();
m.set(-0.17822595476651254, 0.7865820406069317, -0.5912057192231818, 0, 
      0.9836784150310531, 0.15753424312686498, -0.08694675407650528, 0,
      0.024744390264451285, -0.5970524731018877, -0.8018204658858239, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.8056673418271387;
mesh.position.y = 0.14814073896174795;
mesh.position.z = -5.155170507559324;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23020592962931857;
mesh.scale.y = 0.1952746071321411;
mesh.scale.z = 0.14380078140293143;
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.8056673418271387;
mesh.position.y = 0.14814073896174795;
mesh.position.z = -5.155170507559324;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23020592962931857;
mesh.scale.y = 0.14380078140293143;
mesh.scale.z = 0.1952746071321411;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -0.8056673418271387;
mesh.position.y = 0.14814073896174795;
mesh.position.z = -5.155170507559324;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1952746071321411;
mesh.scale.y = 0.23020592962931857;
mesh.scale.z = 0.14380078140293143;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -0.8056673418271387;
mesh.position.y = 0.14814073896174795;
mesh.position.z = -5.155170507559324;
structureRoot.add(mesh);
//             H37A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.1210660746664765;
mesh.position.y = 0.6566678639617476;
mesh.position.z = -5.9313715573357335;
structureRoot.add(mesh);
//             H37B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.4458444299441453;
mesh.position.y = -0.564896981038252;
mesh.position.z = -4.949855053257496;
structureRoot.add(mesh);
//             H37C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.06877940723348885;
mesh.position.y = -0.24587858603825286;
mesh.position.z = -5.356249293756511;
structureRoot.add(mesh);
//             C38             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.24717326031680706;
mesh.scale.y = 0.14002750762846453;
mesh.scale.z = 0.1987684977165298;
var m = new THREE.Matrix4();
m.set(0.692787638280398, 0.6222877827319362, -0.3644217387978372, 0, 
      0.6442382404963226, -0.3069966981535589, 0.7005070426519745, 0,
      0.32404070381368777, -0.7200770394793765, -0.6135851037032651, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.983078432664712;
mesh.position.y = 3.1194670389617474;
mesh.position.z = -4.90727110718008;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.25517326031680704;
mesh.scale.y = 0.14802750762846453;
mesh.scale.z = 0.2067684977165298;
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.983078432664712;
mesh.position.y = 3.1194670389617474;
mesh.position.z = -4.90727110718008;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.25517326031680704;
mesh.scale.y = 0.2067684977165298;
mesh.scale.z = 0.14802750762846453;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -1.983078432664712;
mesh.position.y = 3.1194670389617474;
mesh.position.z = -4.90727110718008;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14802750762846453;
mesh.scale.y = 0.25517326031680704;
mesh.scale.z = 0.2067684977165298;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -1.983078432664712;
mesh.position.y = 3.1194670389617474;
mesh.position.z = -4.90727110718008;
structureRoot.add(mesh);
//             H38A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.8801154292921467;
mesh.position.y = 4.084480683961749;
mesh.position.z = -4.771111112247853;
structureRoot.add(mesh);
//             H38B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.930752934900383;
mesh.position.y = 2.879269298961747;
mesh.position.z = -4.839853768058539;
structureRoot.add(mesh);
//             H38C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.647100236058808;
mesh.position.y = 2.8772712889617478;
mesh.position.z = -5.795537459950017;
structureRoot.add(mesh);
//             C39             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.21716265139504246;
mesh.scale.y = 0.17962511196782113;
mesh.scale.z = 0.13546935522425954;
var m = new THREE.Matrix4();
m.set(-0.6731857184412452, -0.3213532875217414, 0.6659977875982124, 0, 
      -0.7168208076902198, 0.0623713677917159, -0.6944621963376633, 0,
      0.18162851689391984, -0.9449031045979053, -0.27234023715227135, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.2614487443148903;
mesh.position.y = 4.192515938961748;
mesh.position.z = -1.9857082352259319;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22516265139504246;
mesh.scale.y = 0.18762511196782114;
mesh.scale.z = 0.14346935522425955;
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.2614487443148903;
mesh.position.y = 4.192515938961748;
mesh.position.z = -1.9857082352259319;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22516265139504246;
mesh.scale.y = 0.14346935522425955;
mesh.scale.z = 0.18762511196782114;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = -1.2614487443148903;
mesh.position.y = 4.192515938961748;
mesh.position.z = -1.9857082352259319;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18762511196782114;
mesh.scale.y = 0.22516265139504246;
mesh.scale.z = 0.14346935522425955;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = -1.2614487443148903;
mesh.position.y = 4.192515938961748;
mesh.position.z = -1.9857082352259319;
structureRoot.add(mesh);
//             H39A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.5249219308520239;
mesh.position.y = 4.506085978961748;
mesh.position.z = -1.420514983563736;
structureRoot.add(mesh);
//             H39B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -2.078849309652945;
mesh.position.y = 4.124650758961748;
mesh.position.z = -1.4493460531783953;
structureRoot.add(mesh);
//             H39C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -1.4036587729725944;
mesh.position.y = 4.8270604089617475;
mesh.position.z = -2.7189125353660124;
structureRoot.add(mesh);
//             C40             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14344622134848825;
mesh.scale.y = 0.19869849954829089;
mesh.scale.z = 0.1836600212659822;
var m = new THREE.Matrix4();
m.set(-0.35472274891073274, 0.039001048065603165, -0.9341577434539619, 0, 
      0.8372331900518462, 0.45799681705919104, -0.29879675540283135, 0,
      0.41618788651379923, -0.8880978740056945, -0.19511486182693216, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.29126146087952165;
mesh.position.y = 1.9428238389617483;
mesh.position.z = -0.45703147705909686;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15144622134848826;
mesh.scale.y = 0.2066984995482909;
mesh.scale.z = 0.1916600212659822;
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.29126146087952165;
mesh.position.y = 1.9428238389617483;
mesh.position.z = -0.45703147705909686;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15144622134848826;
mesh.scale.y = 0.1916600212659822;
mesh.scale.z = 0.2066984995482909;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 0.29126146087952165;
mesh.position.y = 1.9428238389617483;
mesh.position.z = -0.45703147705909686;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2066984995482909;
mesh.scale.y = 0.15144622134848826;
mesh.scale.z = 0.1916600212659822;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 0.29126146087952165;
mesh.position.y = 1.9428238389617483;
mesh.position.z = -0.45703147705909686;
structureRoot.add(mesh);
//             H40A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.8512269746632839;
mesh.position.y = 2.744193748961749;
mesh.position.z = -0.389918308980965;
structureRoot.add(mesh);
//             H40B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.8263674992986871;
mesh.position.y = 1.1510997839617487;
mesh.position.z = -0.2399837110828802;
structureRoot.add(mesh);
//             H40C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.4570901345227796;
mesh.position.y = 2.0137028239617485;
mesh.position.z = 0.17201596721612056;
structureRoot.add(mesh);
//             Si3             //
var mat = new THREE.MeshPhysicalMaterial({color:"#f0c8a0"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.20560523683844337;
mesh.scale.y = 0.1385993439441689;
mesh.scale.z = 0.13275585443322277;
var m = new THREE.Matrix4();
m.set(-0.6511049930275017, -0.47867208125136246, 0.5890121617463823, 0, 
      -0.754865602681721, 0.3276325615531254, -0.5681855563969398, 0,
      0.07899499947857899, -0.8145734731997042, -0.5746562858063508, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.7209500283570307;
mesh.position.y = -0.8763011110382513;
mesh.position.z = 2.992485420242607;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21360523683844337;
mesh.scale.y = 0.1465993439441689;
mesh.scale.z = 0.14075585443322278;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.7209500283570307;
mesh.position.y = -0.8763011110382513;
mesh.position.z = 2.992485420242607;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.21360523683844337;
mesh.scale.y = 0.14075585443322278;
mesh.scale.z = 0.1465993439441689;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.7209500283570307;
mesh.position.y = -0.8763011110382513;
mesh.position.z = 2.992485420242607;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#000000"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1465993439441689;
mesh.scale.y = 0.21360523683844337;
mesh.scale.z = 0.14075585443322278;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.7209500283570307;
mesh.position.y = -0.8763011110382513;
mesh.position.z = 2.992485420242607;
structureRoot.add(mesh);
//             C41             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14018134936377294;
mesh.scale.y = 0.18252769987430845;
mesh.scale.z = 0.16560810680523588;
var m = new THREE.Matrix4();
m.set(-0.46730887767080503, -0.35376642894061583, -0.8102294283748626, 0, 
      -0.8609362856371536, -0.02628902308380843, 0.5080330691388114, 0,
      -0.20102518479870657, 0.9349642779378807, -0.2922852614428981, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.056022739635644;
mesh.position.y = -1.3927615110382514;
mesh.position.z = 1.1276996591076003;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14818134936377295;
mesh.scale.y = 0.19052769987430845;
mesh.scale.z = 0.1736081068052359;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.056022739635644;
mesh.position.y = -1.3927615110382514;
mesh.position.z = 1.1276996591076003;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14818134936377295;
mesh.scale.y = 0.1736081068052359;
mesh.scale.z = 0.19052769987430845;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.056022739635644;
mesh.position.y = -1.3927615110382514;
mesh.position.z = 1.1276996591076003;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19052769987430845;
mesh.scale.y = 0.14818134936377295;
mesh.scale.z = 0.1736081068052359;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.056022739635644;
mesh.position.y = -1.3927615110382514;
mesh.position.z = 1.1276996591076003;
structureRoot.add(mesh);
//             C42             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14938038662578368;
mesh.scale.y = 0.16251082924152638;
mesh.scale.z = 0.17747009115275136;
var m = new THREE.Matrix4();
m.set(0.09673420790552735, 0.27705867441204707, -0.9559712254842869, 0, 
      -0.9941781706526963, 0.07269369673521034, -0.0795323296064373, 0,
      0.04745796053928086, 0.9580992210559448, 0.2824776532638353, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.4453390519974114;
mesh.position.y = -0.6450188610382517;
mesh.position.z = 2.1640538570120587;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15738038662578369;
mesh.scale.y = 0.17051082924152638;
mesh.scale.z = 0.18547009115275137;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.4453390519974114;
mesh.position.y = -0.6450188610382517;
mesh.position.z = 2.1640538570120587;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15738038662578369;
mesh.scale.y = 0.18547009115275137;
mesh.scale.z = 0.17051082924152638;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.4453390519974114;
mesh.position.y = -0.6450188610382517;
mesh.position.z = 2.1640538570120587;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.17051082924152638;
mesh.scale.y = 0.15738038662578369;
mesh.scale.z = 0.18547009115275137;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.4453390519974114;
mesh.position.y = -0.6450188610382517;
mesh.position.z = 2.1640538570120587;
structureRoot.add(mesh);
//             C43             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17549798479787623;
mesh.scale.y = 0.14124830582283407;
mesh.scale.z = 0.14210037211585524;
var m = new THREE.Matrix4();
m.set(0.6442695682012212, 0.7462087501473527, -0.16759840301547663, 0, 
      0.6620214476530388, -0.6538598693442488, -0.36632618539833717, 0,
      -0.382941674850355, 0.12505907589875398, -0.9152682127104353, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.0968248871392596;
mesh.position.y = 0.6185965389617487;
mesh.position.z = 2.240096617864589;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18349798479787624;
mesh.scale.y = 0.14924830582283408;
mesh.scale.z = 0.15010037211585525;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.0968248871392596;
mesh.position.y = 0.6185965389617487;
mesh.position.z = 2.240096617864589;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.18349798479787624;
mesh.scale.y = 0.15010037211585525;
mesh.scale.z = 0.14924830582283408;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.0968248871392596;
mesh.position.y = 0.6185965389617487;
mesh.position.z = 2.240096617864589;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14924830582283408;
mesh.scale.y = 0.18349798479787624;
mesh.scale.z = 0.15010037211585525;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.0968248871392596;
mesh.position.y = 0.6185965389617487;
mesh.position.z = 2.240096617864589;
structureRoot.add(mesh);
//             C44             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.17757170121151739;
mesh.scale.y = 0.1586034787181921;
mesh.scale.z = 0.15233353265564634;
var m = new THREE.Matrix4();
m.set(0.21060557298254168, -0.6729419906427473, 0.7090799460275772, 0, 
      -0.800701418598908, -0.5348721761721168, -0.26979435392646756, 0,
      0.5608230834072255, -0.5109411241881815, -0.6514726676775695, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.1256038124519634;
mesh.position.y = 0.6301816389617483;
mesh.position.z = 1.2513234617507099;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1855717012115174;
mesh.scale.y = 0.16660347871819212;
mesh.scale.z = 0.16033353265564634;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.1256038124519634;
mesh.position.y = 0.6301816389617483;
mesh.position.z = 1.2513234617507099;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1855717012115174;
mesh.scale.y = 0.16033353265564634;
mesh.scale.z = 0.16660347871819212;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.1256038124519634;
mesh.position.y = 0.6301816389617483;
mesh.position.z = 1.2513234617507099;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16660347871819212;
mesh.scale.y = 0.1855717012115174;
mesh.scale.z = 0.16033353265564634;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.1256038124519634;
mesh.position.y = 0.6301816389617483;
mesh.position.z = 1.2513234617507099;
structureRoot.add(mesh);
//             C45             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14157128258160728;
mesh.scale.y = 0.1654440331195089;
mesh.scale.z = 0.18877810448382742;
var m = new THREE.Matrix4();
m.set(0.20705531650771372, -0.5274324316482475, -0.8239800519135807, 0, 
      -0.9781225803376178, -0.09429279464740908, -0.1854321620195971, 0,
      0.020107554291139165, 0.8443482095221129, -0.5354173954376447, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.094704546570366;
mesh.position.y = -0.6140413110382514;
mesh.position.z = 0.5719357097911182;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1495712825816073;
mesh.scale.y = 0.1734440331195089;
mesh.scale.z = 0.19677810448382743;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.094704546570366;
mesh.position.y = -0.6140413110382514;
mesh.position.z = 0.5719357097911182;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1495712825816073;
mesh.scale.y = 0.19677810448382743;
mesh.scale.z = 0.1734440331195089;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.094704546570366;
mesh.position.y = -0.6140413110382514;
mesh.position.z = 0.5719357097911182;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1734440331195089;
mesh.scale.y = 0.1495712825816073;
mesh.scale.z = 0.19677810448382743;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.094704546570366;
mesh.position.y = -0.6140413110382514;
mesh.position.z = 0.5719357097911182;
structureRoot.add(mesh);
//             C46             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15248203541571884;
mesh.scale.y = 0.2482260180889403;
mesh.scale.z = 0.20909037957291698;
var m = new THREE.Matrix4();
m.set(-0.3342075478496925, -0.8449886520318399, -0.41749190758350035, 0, 
      -0.8526582944078851, 0.08232425984807226, 0.5159423894369445, 0,
      -0.40159575189203894, 0.5284097786546739, -0.7479999718478515, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.7235340972618651;
mesh.position.y = -2.8053042110382513;
mesh.position.z = 0.7511793603720776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16048203541571884;
mesh.scale.y = 0.2562260180889403;
mesh.scale.z = 0.217090379572917;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.7235340972618651;
mesh.position.y = -2.8053042110382513;
mesh.position.z = 0.7511793603720776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16048203541571884;
mesh.scale.y = 0.217090379572917;
mesh.scale.z = 0.2562260180889403;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.7235340972618651;
mesh.position.y = -2.8053042110382513;
mesh.position.z = 0.7511793603720776;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2562260180889403;
mesh.scale.y = 0.16048203541571884;
mesh.scale.z = 0.217090379572917;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.7235340972618651;
mesh.position.y = -2.8053042110382513;
mesh.position.z = 0.7511793603720776;
structureRoot.add(mesh);
//             H46A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.5420647213784626;
mesh.position.y = -3.344204446038251;
mesh.position.z = 0.7493543341116169;
structureRoot.add(mesh);
//             H46B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.3212836521981224;
mesh.position.y = -2.8190888010382515;
mesh.position.z = -0.1422579001358315;
structureRoot.add(mesh);
//             H46C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.0899408249889255;
mesh.position.y = -3.1758679060382513;
mesh.position.z = 1.4005628115495714;
structureRoot.add(mesh);
//             H46D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.7601305954037691;
mesh.position.y = -2.8819001910382513;
mesh.position.z = 0.5890779207375889;
structureRoot.add(mesh);
//             H46E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.9809116645841058;
mesh.position.y = -3.4070158360382514;
mesh.position.z = 1.480690154985039;
structureRoot.add(mesh);
//             H46F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.212246938577632;
mesh.position.y = -3.050236731038251;
mesh.position.z = -0.062108830197265874;
structureRoot.add(mesh);
//             C47             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15544254311606562;
mesh.scale.y = 0.21817438859000018;
mesh.scale.z = 0.24217350155086853;
var m = new THREE.Matrix4();
m.set(-0.6148204154407797, -0.35187204052628673, 0.7058200364491607, 0, 
      -0.6645390155028451, -0.25081840040943115, -0.70390200091388, 0,
      0.4247160859112083, -0.9018182727755751, -0.07962442625439697, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.29783641132299365;
mesh.position.y = -1.0704774610382506;
mesh.position.z = 3.0355038963820373;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16344254311606563;
mesh.scale.y = 0.2261743885900002;
mesh.scale.z = 0.25017350155086854;
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.29783641132299365;
mesh.position.y = -1.0704774610382506;
mesh.position.z = 3.0355038963820373;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16344254311606563;
mesh.scale.y = 0.25017350155086854;
mesh.scale.z = 0.2261743885900002;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 0.29783641132299365;
mesh.position.y = -1.0704774610382506;
mesh.position.z = 3.0355038963820373;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2261743885900002;
mesh.scale.y = 0.16344254311606563;
mesh.scale.z = 0.25017350155086854;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 0.29783641132299365;
mesh.position.y = -1.0704774610382506;
mesh.position.z = 3.0355038963820373;
structureRoot.add(mesh);
//             H47A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.480925878073613;
mesh.position.y = -0.8163692060382508;
mesh.position.z = 3.9640294593976133;
structureRoot.add(mesh);
//             H47B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.18728012168228503;
mesh.position.y = -2.0425513010382508;
mesh.position.z = 2.9784500992395397;
structureRoot.add(mesh);
//             H47C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.523431312008654;
mesh.position.y = -0.6300086010382513;
mesh.position.z = 2.7321150070835483;
structureRoot.add(mesh);
//             H47D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.3844144550525712;
mesh.position.y = -1.5095863310382511;
mesh.position.z = 2.485714735418254;
structureRoot.add(mesh);
//             H47E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = -0.09076114544556191;
mesh.position.y = -0.2834042360382507;
mesh.position.z = 3.471272369073228;
structureRoot.add(mesh);
//             H47F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.6199502882453736;
mesh.position.y = -1.695946936038251;
mesh.position.z = 3.7176074612292194;
structureRoot.add(mesh);
//             C48             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.2308199348693744;
mesh.scale.y = 0.14238817664866366;
mesh.scale.z = 0.17168758445949472;
var m = new THREE.Matrix4();
m.set(0.7043797482900381, 0.6668220973747926, -0.24330528282703892, 0, 
      0.5723944606145552, -0.7363029604206248, -0.3608635918648437, 0,
      -0.419778217225042, 0.114918409876343, -0.9003221686790004, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.6277906864265397;
mesh.position.y = 1.792133588961748;
mesh.position.z = 3.0450635577463547;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23881993486937442;
mesh.scale.y = 0.15038817664866366;
mesh.scale.z = 0.17968758445949473;
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.6277906864265397;
mesh.position.y = 1.792133588961748;
mesh.position.z = 3.0450635577463547;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.23881993486937442;
mesh.scale.y = 0.17968758445949473;
mesh.scale.z = 0.15038817664866366;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 1.6277906864265397;
mesh.position.y = 1.792133588961748;
mesh.position.z = 3.0450635577463547;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15038817664866366;
mesh.scale.y = 0.23881993486937442;
mesh.scale.z = 0.17968758445949473;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 1.6277906864265397;
mesh.position.y = 1.792133588961748;
mesh.position.z = 3.0450635577463547;
structureRoot.add(mesh);
//             H48A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.3821286552301686;
mesh.position.y = 2.3943573089617485;
mesh.position.z = 3.2147258204598987;
structureRoot.add(mesh);
//             H48B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 1.2624728146240365;
mesh.position.y = 1.477849973961749;
mesh.position.z = 3.8983936935303323;
structureRoot.add(mesh);
//             H48C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 0.9321598467092045;
mesh.position.y = 2.2717735189617483;
mesh.position.z = 2.548699867907251;
structureRoot.add(mesh);
//             C49             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.24295458422238325;
mesh.scale.y = 0.1622528784481175;
mesh.scale.z = 0.2058031393232885;
var m = new THREE.Matrix4();
m.set(0.6365915525043975, -0.42059454952990705, 0.6464142790701455, 0, 
      -0.678943221791407, -0.7031908005075055, 0.21108955366175275, 0,
      0.365769458625984, -0.5732564199268496, -0.7332051419276234, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.0101309050001746;
mesh.position.y = 1.788691638961748;
mesh.position.z = 0.9095655679763457;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.25095458422238326;
mesh.scale.y = 0.1702528784481175;
mesh.scale.z = 0.2138031393232885;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.0101309050001746;
mesh.position.y = 1.788691638961748;
mesh.position.z = 0.9095655679763457;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.25095458422238326;
mesh.scale.y = 0.2138031393232885;
mesh.scale.z = 0.1702528784481175;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.0101309050001746;
mesh.position.y = 1.788691638961748;
mesh.position.z = 0.9095655679763457;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1702528784481175;
mesh.scale.y = 0.25095458422238326;
mesh.scale.z = 0.2138031393232885;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.0101309050001746;
mesh.position.y = 1.788691638961748;
mesh.position.z = 0.9095655679763457;
structureRoot.add(mesh);
//             H49A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.937207061093428;
mesh.position.y = 1.4805615589617482;
mesh.position.z = 0.8331969095773051;
structureRoot.add(mesh);
//             H49B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.948036816935957;
mesh.position.y = 2.4662269039617493;
mesh.position.z = 1.614938217644399;
structureRoot.add(mesh);
//             H49C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.7238309975481343;
mesh.position.y = 2.1777830989617484;
mesh.position.z = 0.05686550078229047;
structureRoot.add(mesh);
//             C50             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14782314795260706;
mesh.scale.y = 0.2157173079354259;
mesh.scale.z = 0.2601201830231022;
var m = new THREE.Matrix4();
m.set(-0.4688898920962513, 0.43871867618727317, 0.7665951945156272, 0, 
      0.8269812772357161, 0.5229068345477386, 0.20656817151934975, 0,
      -0.31023255179228026, 0.7308176007375231, -0.6079978604079955, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.050583976145479;
mesh.position.y = -1.0366456110382516;
mesh.position.z = -0.5059161090357254;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15582314795260707;
mesh.scale.y = 0.2237173079354259;
mesh.scale.z = 0.2681201830231022;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.050583976145479;
mesh.position.y = -1.0366456110382516;
mesh.position.z = -0.5059161090357254;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15582314795260707;
mesh.scale.y = 0.2681201830231022;
mesh.scale.z = 0.2237173079354259;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.050583976145479;
mesh.position.y = -1.0366456110382516;
mesh.position.z = -0.5059161090357254;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2237173079354259;
mesh.scale.y = 0.15582314795260707;
mesh.scale.z = 0.2681201830231022;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.050583976145479;
mesh.position.y = -1.0366456110382516;
mesh.position.z = -0.5059161090357254;
structureRoot.add(mesh);
//             H50A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.930577837145346;
mesh.position.y = -0.6400070460382516;
mesh.position.z = -0.33597140178187423;
structureRoot.add(mesh);
//             H50B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.717567803860039;
mesh.position.y = -0.7322261210382517;
mesh.position.z = -1.3757583871762478;
structureRoot.add(mesh);
//             H50C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.127947016221935;
mesh.position.y = -2.0136221310382516;
mesh.position.z = -0.5093488965256388;
structureRoot.add(mesh);
//             C51             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.2828328026974709;
mesh.scale.y = 0.15027109578517786;
mesh.scale.z = 0.13066298321511027;
var m = new THREE.Matrix4();
m.set(-0.7430516999301927, -0.2239628932587391, 0.6306463301043032, 0, 
      -0.6684894966241919, 0.20395203729740272, -0.7152100106859336, 0,
      0.03155889944193034, -0.953018462006593, -0.30126374979509596, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.929532322436561;
mesh.position.y = 0.21378963896174907;
mesh.position.z = 4.628056573664994;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2908328026974709;
mesh.scale.y = 0.15827109578517787;
mesh.scale.z = 0.13866298321511028;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.929532322436561;
mesh.position.y = 0.21378963896174907;
mesh.position.z = 4.628056573664994;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2908328026974709;
mesh.scale.y = 0.13866298321511028;
mesh.scale.z = 0.15827109578517787;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.929532322436561;
mesh.position.y = 0.21378963896174907;
mesh.position.z = 4.628056573664994;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15827109578517787;
mesh.scale.y = 0.2908328026974709;
mesh.scale.z = 0.13866298321511028;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.929532322436561;
mesh.position.y = 0.21378963896174907;
mesh.position.z = 4.628056573664994;
structureRoot.add(mesh);
//             C52             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.22981639919035798;
mesh.scale.y = 0.1609812751214646;
mesh.scale.z = 0.1558496242823921;
var m = new THREE.Matrix4();
m.set(-0.5326087459484836, 0.1653996322377083, 0.830042700946653, 0, 
      0.8269137798474666, 0.31072248962340254, 0.4686844729032641, 0,
      -0.1803926950781542, 0.9359991966331304, -0.302264750615376, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.914500628167023;
mesh.position.y = -0.621596811038251;
mesh.position.z = 4.024059787464909;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.237816399190358;
mesh.scale.y = 0.1689812751214646;
mesh.scale.z = 0.1638496242823921;
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.914500628167023;
mesh.position.y = -0.621596811038251;
mesh.position.z = 4.024059787464909;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.237816399190358;
mesh.scale.y = 0.1638496242823921;
mesh.scale.z = 0.1689812751214646;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 5.914500628167023;
mesh.position.y = -0.621596811038251;
mesh.position.z = 4.024059787464909;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1689812751214646;
mesh.scale.y = 0.237816399190358;
mesh.scale.z = 0.1638496242823921;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 5.914500628167023;
mesh.position.y = -0.621596811038251;
mesh.position.z = 4.024059787464909;
structureRoot.add(mesh);
//             C53             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.18789905273165441;
mesh.scale.y = 0.1324581383179685;
mesh.scale.z = 0.15730522273624395;
var m = new THREE.Matrix4();
m.set(0.4588219799183895, 0.21718158637595664, -0.8615767808402172, 0, 
      0.6177597840375558, -0.7749277454399893, 0.13364070702135258, 0,
      -0.638635451544652, -0.5935647798568555, -0.48971993235301403, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.59855717600108;
mesh.position.y = -1.9591721610382509;
mesh.position.z = 4.348653743789706;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19589905273165442;
mesh.scale.y = 0.1404581383179685;
mesh.scale.z = 0.16530522273624396;
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.59855717600108;
mesh.position.y = -1.9591721610382509;
mesh.position.z = 4.348653743789706;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19589905273165442;
mesh.scale.y = 0.16530522273624396;
mesh.scale.z = 0.1404581383179685;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 5.59855717600108;
mesh.position.y = -1.9591721610382509;
mesh.position.z = 4.348653743789706;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1404581383179685;
mesh.scale.y = 0.19589905273165442;
mesh.scale.z = 0.16530522273624396;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 5.59855717600108;
mesh.position.y = -1.9591721610382509;
mesh.position.z = 4.348653743789706;
structureRoot.add(mesh);
//             C54             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.197796519787886;
mesh.scale.y = 0.15234405307027707;
mesh.scale.z = 0.1637757901862456;
var m = new THREE.Matrix4();
m.set(0.4911324219372134, 0.6802723045290064, -0.5440758548335717, 0, 
      0.826834422751593, -0.5606073388295144, 0.04543400712605044, 0,
      -0.27410542036801616, -0.4721747593225256, -0.8378049983042524, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.422346626842977;
mesh.position.y = -1.9650486610382505;
mesh.position.z = 5.129287000198664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.20579651978788602;
mesh.scale.y = 0.16034405307027708;
mesh.scale.z = 0.1717757901862456;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.422346626842977;
mesh.position.y = -1.9650486610382505;
mesh.position.z = 5.129287000198664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.20579651978788602;
mesh.scale.y = 0.1717757901862456;
mesh.scale.z = 0.16034405307027708;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.422346626842977;
mesh.position.y = -1.9650486610382505;
mesh.position.z = 5.129287000198664;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.16034405307027708;
mesh.scale.y = 0.20579651978788602;
mesh.scale.z = 0.1717757901862456;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.422346626842977;
mesh.position.y = -1.9650486610382505;
mesh.position.z = 5.129287000198664;
structureRoot.add(mesh);
//             C55             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.26592391639154944;
mesh.scale.y = 0.15427313246408408;
mesh.scale.z = 0.13907506501411307;
var m = new THREE.Matrix4();
m.set(0.5934658967576446, 0.6509996829483727, -0.4732838917465531, 0, 
      0.7152177870449575, -0.15686251093327544, 0.6810709726293012, 0,
      0.36913648760337636, -0.7426934532260439, -0.558699103323978, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.0033035789075235;
mesh.position.y = -0.6237795110382507;
mesh.position.z = 5.30939971090365;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.27392391639154945;
mesh.scale.y = 0.1622731324640841;
mesh.scale.z = 0.14707506501411308;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.0033035789075235;
mesh.position.y = -0.6237795110382507;
mesh.position.z = 5.30939971090365;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.27392391639154945;
mesh.scale.y = 0.14707506501411308;
mesh.scale.z = 0.1622731324640841;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.0033035789075235;
mesh.position.y = -0.6237795110382507;
mesh.position.z = 5.30939971090365;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1622731324640841;
mesh.scale.y = 0.27392391639154945;
mesh.scale.z = 0.14707506501411308;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.0033035789075235;
mesh.position.y = -0.6237795110382507;
mesh.position.z = 5.30939971090365;
structureRoot.add(mesh);
//             C56             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.40412140711905914;
mesh.scale.y = 0.18215035766287396;
mesh.scale.z = 0.13742237336023586;
var m = new THREE.Matrix4();
m.set(-0.7614337006919438, -0.1357121462284951, 0.6338776954717897, 0, 
      -0.6481292146804497, 0.1776850772959294, -0.7405109954511435, 0,
      -0.012134270817596987, -0.9746846806390234, -0.22325441272084703, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.950704640111031;
mesh.position.y = 1.709190988961749;
mesh.position.z = 4.675637615455576;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.41212140711905915;
mesh.scale.y = 0.19015035766287397;
mesh.scale.z = 0.14542237336023586;
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.950704640111031;
mesh.position.y = 1.709190988961749;
mesh.position.z = 4.675637615455576;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.41212140711905915;
mesh.scale.y = 0.14542237336023586;
mesh.scale.z = 0.19015035766287397;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 4.950704640111031;
mesh.position.y = 1.709190988961749;
mesh.position.z = 4.675637615455576;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.19015035766287397;
mesh.scale.y = 0.41212140711905915;
mesh.scale.z = 0.14542237336023586;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 4.950704640111031;
mesh.position.y = 1.709190988961749;
mesh.position.z = 4.675637615455576;
structureRoot.add(mesh);
//             H56A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.047651043118563;
mesh.position.y = 2.0429845839617493;
mesh.position.z = 4.858878942607069;
structureRoot.add(mesh);
//             H56B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.2597176986538905;
mesh.position.y = 2.0591785389617487;
mesh.position.z = 3.8140731349964287;
structureRoot.add(mesh);
//             H56C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.558445083127744;
mesh.position.y = 2.004812518961749;
mesh.position.z = 5.385333839240674;
structureRoot.add(mesh);
//             C57             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.332338189702002;
mesh.scale.y = 0.21959281423320742;
mesh.scale.z = 0.17436822459732326;
var m = new THREE.Matrix4();
m.set(0.25007572730643035, -0.5784063635561904, -0.7764716409566187, 0, 
      -0.7547706652921063, 0.38584839831692064, -0.5305113159309408, 0,
      0.606451460074647, 0.7187260202010024, -0.3400728369913681, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.070775379650662;
mesh.position.y = -0.15777306103825062;
mesh.position.z = 3.1958454892653716;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.340338189702002;
mesh.scale.y = 0.22759281423320743;
mesh.scale.z = 0.18236822459732327;
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.070775379650662;
mesh.position.y = -0.15777306103825062;
mesh.position.z = 3.1958454892653716;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.340338189702002;
mesh.scale.y = 0.18236822459732327;
mesh.scale.z = 0.22759281423320743;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 7.070775379650662;
mesh.position.y = -0.15777306103825062;
mesh.position.z = 3.1958454892653716;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.22759281423320743;
mesh.scale.y = 0.340338189702002;
mesh.scale.z = 0.18236822459732327;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 7.070775379650662;
mesh.position.y = -0.15777306103825062;
mesh.position.z = 3.1958454892653716;
structureRoot.add(mesh);
//             H57A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.2092247988687035;
mesh.position.y = -0.7795319460382513;
mesh.position.z = 2.4511695954881088;
structureRoot.add(mesh);
//             H57B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.8781614112250224;
mesh.position.y = -0.12702217603825083;
mesh.position.z = 3.750349301402009;
structureRoot.add(mesh);
//             H57C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 6.881988474937945;
mesh.position.y = 0.7370248039617482;
mesh.position.z = 2.8436371474995585;
structureRoot.add(mesh);
//             H57D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.437027508890967;
mesh.position.y = 0.6665068039617492;
mesh.position.z = 3.578927191937309;
structureRoot.add(mesh);
//             H57E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 6.7680833433189775;
mesh.position.y = 0.013997033961748784;
mesh.position.z = 2.2797692125265083;
structureRoot.add(mesh);
//             H57F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.764263832821726;
mesh.position.y = -0.8500415510382511;
mesh.position.z = 3.186459639925859;
structureRoot.add(mesh);
//             C58             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.14029325442014964;
mesh.scale.y = 0.22045981331741138;
mesh.scale.z = 0.22439279431692125;
var m = new THREE.Matrix4();
m.set(-0.5976610400978299, 0.7903632438916137, 0.1346373791125828, 0, 
      0.6531620471034922, 0.57736920893166, -0.4899225824568654, 0,
      -0.4649522785972284, -0.2048676140407613, -0.8613063562661607, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.328400488071264;
mesh.position.y = -3.1709904110382507;
mesh.position.z = 3.857852038744385;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14829325442014965;
mesh.scale.y = 0.2284598133174114;
mesh.scale.z = 0.23239279431692125;
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.328400488071264;
mesh.position.y = -3.1709904110382507;
mesh.position.z = 3.857852038744385;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.14829325442014965;
mesh.scale.y = 0.23239279431692125;
mesh.scale.z = 0.2284598133174114;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 6.328400488071264;
mesh.position.y = -3.1709904110382507;
mesh.position.z = 3.857852038744385;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2284598133174114;
mesh.scale.y = 0.14829325442014965;
mesh.scale.z = 0.23239279431692125;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 6.328400488071264;
mesh.position.y = -3.1709904110382507;
mesh.position.z = 3.857852038744385;
structureRoot.add(mesh);
//             H58A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 6.280102303480739;
mesh.position.y = -3.878059286038251;
mesh.position.z = 4.534567430822586;
structureRoot.add(mesh);
//             H58B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.266743445504659;
mesh.position.y = -2.9419412310382507;
mesh.position.z = 3.691188033458742;
structureRoot.add(mesh);
//             H58C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.9165702026313625;
mesh.position.y = -3.485928836038251;
mesh.position.z = 3.0262049530549273;
structureRoot.add(mesh);
//             H58D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 6.6955083309304335;
mesh.position.y = -2.9925546860382513;
mesh.position.z = 2.9667395140682533;
structureRoot.add(mesh);
//             H58E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 5.708867188906513;
mesh.position.y = -3.928681136038251;
mesh.position.z = 3.810118911432097;
structureRoot.add(mesh);
//             H58F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 7.059040431779817;
mesh.position.y = -3.3846935310382507;
mesh.position.z = 4.475101991835908;
structureRoot.add(mesh);
//             C59             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.1830351699536876;
mesh.scale.y = 0.22819786478982218;
mesh.scale.z = 0.2480549894829254;
var m = new THREE.Matrix4();
m.set(0.7656443730213677, 0.49111235975649986, -0.41544836520934675, 0, 
      0.6356294366836927, -0.47839934298863923, 0.6058954430008607, 0,
      0.09881251581600692, -0.7279716469220762, -0.6784492375967942, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.686017103199031;
mesh.position.y = -3.1832471110382503;
mesh.position.z = 5.611180838972688;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1910351699536876;
mesh.scale.y = 0.2361978647898222;
mesh.scale.z = 0.2560549894829254;
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.686017103199031;
mesh.position.y = -3.1832471110382503;
mesh.position.z = 5.611180838972688;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.1910351699536876;
mesh.scale.y = 0.2560549894829254;
mesh.scale.z = 0.2361978647898222;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 3.686017103199031;
mesh.position.y = -3.1832471110382503;
mesh.position.z = 5.611180838972688;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.2361978647898222;
mesh.scale.y = 0.1910351699536876;
mesh.scale.z = 0.2560549894829254;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 3.686017103199031;
mesh.position.y = -3.1832471110382503;
mesh.position.z = 5.611180838972688;
structureRoot.add(mesh);
//             H59A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.7108616807827772;
mesh.position.y = -3.2138888610382503;
mesh.position.z = 6.590394333722246;
structureRoot.add(mesh);
//             H59B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.112374607597808;
mesh.position.y = -3.9875804560382506;
mesh.position.z = 5.248283057681318;
structureRoot.add(mesh);
//             H59C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.7546251162799393;
mesh.position.y = -3.1426740760382508;
mesh.position.z = 5.309160719369542;
structureRoot.add(mesh);
//             H59D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.3410253136575676;
mesh.position.y = -3.682203936038251;
mesh.position.z = 4.84149774012649;
structureRoot.add(mesh);
//             H59E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.9395432998425406;
mesh.position.y = -2.9085123410382505;
mesh.position.z = 6.183609016167422;
structureRoot.add(mesh);
//             H59F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 4.297292791160412;
mesh.position.y = -3.7534271160382504;
mesh.position.z = 6.122731354479194;
structureRoot.add(mesh);
//             C60             //
var mat = new THREE.MeshPhysicalMaterial({color:"#000000"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.37378385687400006;
mesh.scale.y = 0.14579136143419671;
mesh.scale.z = 0.2042930560886845;
var m = new THREE.Matrix4();
m.set(0.5478542375389651, 0.7930815569952709, -0.2662280570573956, 0, 
      0.5985630335859228, -0.593933308192991, -0.5375551322825848, 0,
      -0.5844467719433627, 0.1351475836738722, -0.8000981823452024, 0,
      0,            0,            0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.8469337740948113;
mesh.position.y = -0.1642372110382504;
mesh.position.z = 6.145001020157439;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.38178385687400007;
mesh.scale.y = 0.15379136143419672;
mesh.scale.z = 0.2122930560886845;
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.8469337740948113;
mesh.position.y = -0.1642372110382504;
mesh.position.z = 6.145001020157439;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.38178385687400007;
mesh.scale.y = 0.2122930560886845;
mesh.scale.z = 0.15379136143419672;
var m1 = m.clone();
m1.multiply(m_ring1);
mesh.setRotationFromMatrix(m1); 
mesh.position.x = 2.8469337740948113;
mesh.position.y = -0.1642372110382504;
mesh.position.z = 6.145001020157439;
structureRoot.add(mesh);

var mat = new THREE.MeshPhysicalMaterial({color: "#ffffff"});
var mesh = new THREE.Mesh(marker_geom, mat);
mesh.scale.x = 0.15379136143419672;
mesh.scale.y = 0.38178385687400007;
mesh.scale.z = 0.2122930560886845;
var m2 = m.clone()
m2.multiply(m_ring2);
mesh.setRotationFromMatrix(m2);      
mesh.position.x = 2.8469337740948113;
mesh.position.y = -0.1642372110382504;
mesh.position.z = 6.145001020157439;
structureRoot.add(mesh);
//             H60A             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.2329670615527597;
mesh.position.y = -0.9134825660382506;
mesh.position.z = 6.293240950813667;
structureRoot.add(mesh);
//             H60B             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.374825876650526;
mesh.position.y = 0.5579342689617488;
mesh.position.z = 5.68014075981438;
structureRoot.add(mesh);
//             H60C             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 3.1769853128466323;
mesh.position.y = 0.16339445396174979;
mesh.position.z = 7.0075431932561205;
structureRoot.add(mesh);
//             H60D             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.9568903746700705;
mesh.position.y = 0.7853800039617496;
mesh.position.z = 6.36072346944451;
structureRoot.add(mesh);
//             H60E             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.815008199787979;
mesh.position.y = -0.6860368310382507;
mesh.position.z = 6.973801933940697;
structureRoot.add(mesh);
//             H60F             //
var mat = new THREE.MeshPhysicalMaterial({color:"#ffffff"});
var mesh = new THREE.Mesh(sphere_geom, mat);
mesh.scale.x = 0.15;
mesh.scale.y = 0.15;
mesh.scale.z = 0.15;
mesh.position.x = 2.012879676591872;
mesh.position.y = -0.29149701603825084;
mesh.position.z = 5.646399500498957;
structureRoot.add(mesh);
    //C11 - C16
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4957020542084134, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9999893455839266, 0.00461163981175088, 0.00020370782218912548, 0,
      -0.00461163981175088, 0.9960945402247875, 0.08817255645957019, 0,
      0.00020370782218912548, -0.08817255645957019, 0.9961051946408609, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.244629583693987;
mesh.position.y = 0.731383363961748;
mesh.position.z = -2.269347733205862;
structureRoot.add(mesh);
    //C37 - H37C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799699095761514, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.3316589198457489, 0.8923199993343022, 0.30621459742275786, 0,
      -0.8923199993343022, -0.4020728811667478, 0.20518873511550503, 0,
      0.30621459742275786, -0.20518873511550503, 0.9295860386790011, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.36844396729682494;
mesh.position.y = -0.04886892353825245;
mesh.position.z = -5.2557099006579175;
structureRoot.add(mesh);
    //C58 - H58F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800516595729327, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.28922602155335697, 0.7455116641779238, -0.6004670407533453, 0,
      -0.7455116641779238, -0.2180529137546925, -0.6298136910053251, 0,
      -0.6004670407533453, 0.6298136910053251, 0.4927210646919503, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.69372045992554;
mesh.position.y = -3.2778419710382507;
mesh.position.z = 4.1664770152901465;
structureRoot.add(mesh);
    //C27 - H27C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799005727788592, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9569400013302357, 0.2811967537945701, 0.07207093387409641, 0,
      -0.2811967537945701, 0.8363125124786943, 0.4706482413936864, 0,
      0.07207093387409641, -0.4706482413936864, 0.8793725111484586, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.5280967295122174;
mesh.position.y = 5.481140043961748;
mesh.position.z = -3.494038123238936;
structureRoot.add(mesh);
    //C45 - C50
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.5013541959216912, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.43583998444437144, 0.636678161736706, 0.6361481166576687, 0,
      -0.636678161736706, -0.2814820787446233, 0.7179197432256439, 0,
      0.6361481166576687, -0.7179197432256439, 0.2826779368110053, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.5726442613579223;
mesh.position.y = -0.8253434610382515;
mesh.position.z = 0.03300980037769641;
structureRoot.add(mesh);
    //C50 - H50B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9798962117164245, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9118791295277783, -0.3398484128253907, -0.2301727816917635, 0,
      0.3398484128253907, 0.310665034072095, 0.8876881732371152, 0,
      -0.2301727816917635, -0.8876881732371152, 0.3987859045443167, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.8840758900027588;
mesh.position.y = -0.8844358660382516;
mesh.position.z = -0.9408372481059866;
structureRoot.add(mesh);
    //C26 - H26C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800938232394244, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7094784235717082, -0.5899259025957908, 0.38552275669893366, 0,
      0.5899259025957908, 0.1978888963496901, -0.7828329414045139, 0,
      0.38552275669893366, 0.7828329414045139, 0.4884104727779818, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.0025420412787458;
mesh.position.y = 5.457906881461748;
mesh.position.z = -5.1926052724018685;
structureRoot.add(mesh);
    //C49 - H49B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800307576759409, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9976264960178047, -0.06335932579449666, 0.0269623863577366, 0,
      0.06335932579449666, 0.691340817309365, -0.7197454203792379, 0,
      0.0269623863577366, 0.7197454203792379, 0.6937143212915604, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.979083860968066;
mesh.position.y = 2.1274592714617486;
mesh.position.z = 1.2622518928103723;
structureRoot.add(mesh);
    //C57 - H57A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799461921611933, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.945390291937433, 0.14128267483003537, 0.2937284489172369, 0,
      -0.14128267483003537, -0.6344826787160232, 0.7599150848629143, 0,
      0.2937284489172369, -0.7599150848629143, -0.5798729706534558, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.140000089259683;
mesh.position.y = -0.46865250353825094;
mesh.position.z = 2.82350754237674;
structureRoot.add(mesh);
    //C34 - C39
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4994229606437106, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9727560175344093, -0.22741276189849488, 0.045046265952843376, 0,
      0.22741276189849488, 0.8982747599261596, -0.37601315323442963, 0,
      0.045046265952843376, 0.37601315323442963, 0.9255187423917502, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.090954785947888;
mesh.position.y = 3.5190690389617476;
mesh.position.z = -2.2676096129578047;
structureRoot.add(mesh);
    //C46 - H46B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799110030708527, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8290880312685117, -0.4104969163558397, -0.3796120625976605, 0,
      0.4104969163558397, -0.014067185649310865, 0.9117534732318021, 0,
      -0.3796120625976605, -0.9117534732318021, 0.15684478308217753, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.5224088747299938;
mesh.position.y = -2.8121965060382514;
mesh.position.z = 0.304460730118123;
structureRoot.add(mesh);
    //C6 - H6E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800353327984098, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6082074590843694, -0.36855035747006004, -0.7030322330610639, 0,
      0.36855035747006004, -0.653313037369543, 0.6613264770230156, 0,
      -0.7030322330610639, -0.6613264770230156, -0.2615204964539124, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.6075104188802403;
mesh.position.y = -3.156164841038251;
mesh.position.z = 1.7467855017111358;
structureRoot.add(mesh);
    //C17 - H17A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800736685813608, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9635063370759167, -0.14020929735394855, 0.22802826875206092, 0,
      0.14020929735394855, -0.4613134037714097, -0.8760886350343488, 0,
      0.22802826875206092, 0.8760886350343488, -0.4248197408473262, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.652979599302757;
mesh.position.y = -0.5288152710382517;
mesh.position.z = -0.6543081252136593;
structureRoot.add(mesh);
    //C51 - C55
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4225506096562315, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.030924072304387762, -0.6511042470066261, 0.7583580693063451, 0,
      0.6511042470066261, -0.5887798608461485, -0.47895880302164223, 0,
      0.7583580693063451, 0.47895880302164223, 0.44214421145823934, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.466417950672042;
mesh.position.y = -0.2049949360382508;
mesh.position.z = 4.968728142284322;
structureRoot.add(mesh);
    //C42 - C47
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.5023989156634328, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.1861760050508472, -0.7637802641568741, 0.6180438521883076, 0,
      0.7637802641568741, -0.28318617350181174, -0.5800390497387717, 0,
      0.6180438521883076, 0.5800390497387717, 0.5306378214473408, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.8715877316602025;
mesh.position.y = -0.8577481610382511;
mesh.position.z = 2.599778876697048;
structureRoot.add(mesh);
    //C60 - H60B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800574345419097, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8663979752405622, -0.4817145208076036, -0.1315510126990863, 0,
      0.4817145208076036, 0.736866488174288, 0.47431940614821216, 0,
      -0.1315510126990863, -0.47431940614821216, 0.870468512933726, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.6108798253726686;
mesh.position.y = 0.1968485289617492;
mesh.position.z = 5.9125708899859095;
structureRoot.add(mesh);
    //C28 - H28A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800008727403023, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.10014887939696182, -0.3374358092378577, 0.9360060238051487, 0,
      0.3374358092378577, -0.8734647068287225, -0.35099356200449844, 0,
      0.9360060238051487, 0.35099356200449844, 0.02638641377431572, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.471748182266875;
mesh.position.y = 1.6771850514617475;
mesh.position.z = -3.239197105119013;
structureRoot.add(mesh);
    //C39 - H39A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799190418906307, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5720193244878711, 0.7516200644920936, -0.3284222450829738, 0,
      -0.7516200644920936, 0.3199958635307323, -0.5767754554210176, 0,
      -0.3284222450829738, 0.5767754554210176, 0.7479765390428612, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.8931853375834571;
mesh.position.y = 4.349300958961748;
mesh.position.z = -1.703111609394834;
structureRoot.add(mesh);
    //C57 - H57C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.979976750034912, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9806010199967178, -0.1926442690665793, -0.03619150697608709, 0,
      0.1926442690665793, 0.913080708259784, 0.35940479379053175, 0,
      -0.03619150697608709, -0.35940479379053175, 0.9324796882630663, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.9763819272943035;
mesh.position.y = 0.2896258714617488;
mesh.position.z = 3.019741318382465;
structureRoot.add(mesh);
    //C59 - H59F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800240480260842, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.06970885643971125, 0.6237353962819405, -0.7785209250616699, 0,
      -0.6237353962819405, -0.5818020549071508, -0.5219775132425027, 0,
      -0.7785209250616699, 0.5219775132425027, 0.34848908865313777, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.991654947179722;
mesh.position.y = -3.4683371135382504;
mesh.position.z = 5.866956096725941;
structureRoot.add(mesh);
    //C41 - C45
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4121397286759807, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6512832840960703, 0.7355375575394285, 0.18658666968990403, 0,
      -0.7355375575394285, 0.5514469879904351, 0.39356158461568475, 0,
      0.18658666968990403, -0.39356158461568475, 0.900163703894365, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.575363643103005;
mesh.position.y = -1.0034014110382514;
mesh.position.z = 0.8498176844493592;
structureRoot.add(mesh);
    //C36 - H36B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799812837854329, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.4016617592961155, 0.7128048604586233, 0.5749583132938526, 0,
      -0.7128048604586233, -0.15083019180636015, 0.6849521765395151, 0,
      0.5749583132938526, -0.6849521765395151, 0.44750804889752427, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.9606448794841711;
mesh.position.y = -0.649329693538252;
mesh.position.z = -2.7769331618964905;
structureRoot.add(mesh);
    //C56 - H56B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799355639499242, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9267294229805892, 0.31534018144753295, 0.20428692211372973, 0,
      -0.31534018144753295, 0.357153636295503, 0.8792052377264006, 0,
      0.20428692211372973, -0.8792052377264006, 0.43042421331491376, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.105211169382461;
mesh.position.y = 1.8841847639617488;
mesh.position.z = 4.2448553752260025;
structureRoot.add(mesh);
    //C46 - H46D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799439413946985, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.048479974826101335, -0.9831210349511815, -0.17641633336337784, 0,
      0.9831210349511815, -0.07816363443299146, 0.1654190946920687, 0,
      -0.17641633336337784, -0.1654190946920687, 0.9703163403931101, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.2418323463328171;
mesh.position.y = -2.8436022010382516;
mesh.position.z = 0.6701286405548332;
structureRoot.add(mesh);
    //C17 - H17C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800402694694618, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9970441059878613, 0.07661037943815953, -0.005822411631591239, 0,
      -0.07661037943815953, 0.985575333065533, -0.15090431609170357, 0,
      -0.005822411631591239, 0.15090431609170357, 0.9885312270776717, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.546731250634942;
mesh.position.y = 0.18019704646174817;
mesh.position.z = -1.0096776731806258;
structureRoot.add(mesh);
    //C10 - H10B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801214283135693, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9488101667478142, 0.2547743147293376, -0.18667971510097614, 0,
      -0.2547743147293376, 0.2680242798609195, -0.9291141124529494, 0,
      -0.18667971510097614, 0.9291141124529494, 0.31921411311310544, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.878840395800167;
mesh.position.y = -1.1870336410382507;
mesh.position.z = 3.587509160662094;
structureRoot.add(mesh);
    //C54 - C59
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.5028008194103726, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.2676649825561055, -0.4899714680305046, 0.8296284816888051, 0,
      0.4899714680305046, -0.810618702269515, -0.32066381156426044, 0,
      0.8296284816888051, 0.32066381156426044, 0.4570462802865902, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.054181865021004;
mesh.position.y = -2.5741478860382503;
mesh.position.z = 5.370233919585676;
structureRoot.add(mesh);
    //C58 - H58A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799096032308587, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9912749806226742, -0.04928840826876393, 0.12224796767982894, 0,
      0.04928840826876393, -0.7215654103896156, -0.6905896113753792, 0,
      0.12224796767982894, 0.6905896113753792, -0.71284039101229, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.304251395776001;
mesh.position.y = -3.5245248485382508;
mesh.position.z = 4.196209734783485;
structureRoot.add(mesh);
    //C48 - H48A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800430926742473, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6330498708654357, 0.7696987759438864, -0.08253275293929212, 0,
      -0.7696987759438864, 0.6144869797068927, -0.17311714554365762, 0,
      -0.08253275293929212, 0.17311714554365762, 0.981437108841457, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.004959670828354;
mesh.position.y = 2.0932454489617482;
mesh.position.z = 3.1298946891031267;
structureRoot.add(mesh);
    //C47 - H47B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800027445675056, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.572991686527565, -0.11281222451014593, -0.8117597730679742, 0,
      0.11281222451014593, -0.9919093037122009, 0.058217997305381575, 0,
      -0.8117597730679742, -0.058217997305381575, 0.5810823828153644, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.24255826650263934;
mesh.position.y = -1.5565143810382507;
mesh.position.z = 3.0069769978107885;
structureRoot.add(mesh);
    //C3 - C8
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4982806177882104, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9553883883376144, 0.2853351369493827, 0.07626851940173442, 0,
      -0.2853351369493827, 0.8249988589085024, 0.4878121999517293, 0,
      0.07626851940173442, -0.4878121999517293, 0.869610470570888, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.747199122539582;
mesh.position.y = 1.193654038961749;
mesh.position.z = 0.244951838125246;
structureRoot.add(mesh);
    //C28 - H28C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800827255048349, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.14532742084453454, 0.8528006409372976, 0.5016084205509412, 0,
      -0.8528006409372976, -0.14906719728658224, 0.5005097776368185, 0,
      0.5016084205509412, -0.5005097776368185, 0.7056053818688832, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.054999464281389;
mesh.position.y = 2.0321340464617474;
mesh.position.z = -3.656454597168387;
structureRoot.add(mesh);
    //C31 - C35
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4129886556448839, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9936965536746788, -0.10588195167567112, 0.03682623418728877, 0,
      0.10588195167567112, 0.7785489257859095, -0.618587570572637, 0,
      0.03682623418728877, 0.618587570572637, 0.7848523721112306, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.1649008081173946;
mesh.position.y = 1.2697127389617475;
mesh.position.z = -2.289553381089534;
structureRoot.add(mesh);
    //C39 - H39C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800300619890754, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9872190553968417, -0.14510782288563043, -0.06589579955323446, 0,
      0.14510782288563043, 0.6474744955395799, 0.7481447034920177, 0,
      -0.06589579955323446, -0.7481447034920177, 0.6602554401427381, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.3325537586437424;
mesh.position.y = 4.509788173961748;
mesh.position.z = -2.352310385295972;
structureRoot.add(mesh);
    //C30 - H30A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799971939503677, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.9474269520616987, -0.31721421790444815, 0.04192028704993717, 0,
      0.31721421790444815, -0.9483293276113893, -0.006828349097663348, 0,
      0.04192028704993717, 0.006828349097663348, 0.9990976244503094, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.092970713885931;
mesh.position.y = 2.163175798961747;
mesh.position.z = -7.235830803503111;
structureRoot.add(mesh);
    //C57 - H57E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799608049298039, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9188212675900115, -0.3088817785455889, -0.24568175574673495, 0,
      0.3088817785455889, 0.1752826175658153, 0.9348090986194936, 0,
      -0.24568175574673495, -0.9348090986194936, 0.25646134997580383, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.91942936148482;
mesh.position.y = -0.07188801353825092;
mesh.position.z = 2.73780735089594;
structureRoot.add(mesh);
    //C29 - H29A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799927366220385, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.12591743291630486, -0.7550070954382092, -0.6435130813944087, 0,
      0.7550070954382092, -0.3478468332071665, 0.555847880688327, 0,
      -0.6435130813944087, -0.555847880688327, 0.5262357338765286, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.906980514148408;
mesh.position.y = 0.44118500396174776;
mesh.position.z = -6.099534691335326;
structureRoot.add(mesh);
    //C10 - H10D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801409190969218, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.46602685434200186, 0.4570010909651911, -0.7576074008935787, 0,
      -0.4570010909651911, -0.6088754671622754, -0.6483985412881079, 0,
      -0.7576074008935787, 0.6483985412881079, -0.074902321504277, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.779732543761773;
mesh.position.y = -1.6167736910382509;
mesh.position.z = 3.4499478062798694;
structureRoot.add(mesh);
    //C58 - H58C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800139135148843, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7397843706233105, -0.4202290189563175, -0.5254775510033549, 0,
      0.4202290189563175, -0.321361177282119, 0.8486074271197851, 0,
      -0.5254775510033549, -0.8486074271197851, -0.061145547905429476, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.122485345351313;
mesh.position.y = -3.328459623538251;
mesh.position.z = 3.442028495899656;
structureRoot.add(mesh);
    //C44 - C45
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4179609414407124, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9961244150721538, -0.0217913378137217, -0.08521318732125725, 0,
      0.0217913378137217, -0.8774733588471155, 0.47913008892142195, 0,
      -0.08521318732125725, -0.47913008892142195, -0.8735977739192693, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.1101541795111647;
mesh.position.y = 0.008070163961748422;
mesh.position.z = 0.911629585770914;
structureRoot.add(mesh);
    //C52 - C57
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4960089223412965, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5439957317901212, 0.7729063204208948, 0.3266258771860609, 0,
      -0.7729063204208948, 0.3100407645123554, 0.5536158814503314, 0,
      0.3266258771860609, -0.5536158814503314, 0.7660450327222342, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.4926380039088425;
mesh.position.y = -0.38968493603825083;
mesh.position.z = 3.60995263836514;
structureRoot.add(mesh);
    //C48 - H48C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799661423778578, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6616930479658482, -0.7098519118521873, -0.24139712822123696, 0,
      0.7098519118521873, 0.48944540965075456, 0.5065110603053004, 0,
      -0.24139712822123696, -0.5065110603053004, 0.8277523616849064, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.279975266567872;
mesh.position.y = 2.031953553961748;
mesh.position.z = 2.796881712826803;
structureRoot.add(mesh);
    //C47 - H47D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800770203897993, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.12207727983082284, -0.6961196438461723, -0.7074705500588594, 0,
      0.6961196438461723, -0.4480350634334398, 0.5609652604089416, 0,
      -0.7074705500588594, -0.5609652604089416, 0.42988765673573737, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.04328902186478878;
mesh.position.y = -1.2900318960382509;
mesh.position.z = 2.7606093159001457;
structureRoot.add(mesh);
    //C5 - C10
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.501567475437986, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.29425235554334006, -0.6710750808161475, 0.6804952513903362, 0,
      0.6710750808161475, -0.3618940599665659, -0.6470633085475614, 0,
      0.6804952513903362, 0.6470633085475614, 0.3438535844900943, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.499863020960009;
mesh.position.y = -1.046677636038251;
mesh.position.z = 2.6463822258480985;
structureRoot.add(mesh);
    //C28 - H28E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800398957790788, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.24743133165913522, 0.28812712402843094, 0.9250732384587138, 0,
      -0.28812712402843094, -0.8896881532632539, 0.3541719220126387, 0,
      0.9250732384587138, -0.3541719220126387, -0.13711948492238912, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.778279914342315;
mesh.position.y = 1.6692181964617476;
mesh.position.z = -3.584735410432902;
structureRoot.add(mesh);
    //C59 - H59A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800077745497842, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9993365624816428, 0.025351408661180914, -0.02614844099114631, 0,
      -0.025351408661180914, -0.03126684379016975, -0.9991895168376692, 0,
      -0.02614844099114631, 0.9991895168376692, -0.030603406271812572, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.698439391990904;
mesh.position.y = -3.1985679860382503;
mesh.position.z = 6.100787586347467;
structureRoot.add(mesh);
    //C7 - H7A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800326703427134, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.99960132427957, 0.024720438170441845, 0.01364157011459048, 0,
      -0.024720438170441845, 0.5328248800291466, 0.8458643787029851, 0,
      0.01364157011459048, -0.8458643787029851, 0.5332235557495768, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.944958897220653;
mesh.position.y = -0.6947088660382519;
mesh.position.z = -0.4437239939099058;
structureRoot.add(mesh);
    //C56 - H56A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800517063299767, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.3666644995896783, -0.9214346459067495, 0.12851201524897957, 0,
      0.9214346459067495, 0.3405877392428257, -0.18697108118680855, 0,
      0.12851201524897957, 0.18697108118680855, 0.9739232396531473, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.499177841614797;
mesh.position.y = 1.8760877864617491;
mesh.position.z = 4.7672582790313225;
structureRoot.add(mesh);
    //C18 - H18A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800324483752595, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8770994187554069, 0.16862481475724567, 0.4497357907338618, 0,
      -0.16862481475724567, -0.7686395958101588, 0.6170565967566343, 0,
      0.4497357907338618, -0.6170565967566343, -0.6457390145655659, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.71299709742857;
mesh.position.y = -3.7270374335382517;
mesh.position.z = -1.7916253830271769;
structureRoot.add(mesh);
    //C40 - H40A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799282048242136, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.820364694778017, 0.5714352449771694, -0.021529708768431393, 0,
      -0.5714352449771694, 0.8177843091512569, -0.06848784201509035, 0,
      -0.021529708768431393, 0.06848784201509035, 0.9974196143732399, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.5712442177714028;
mesh.position.y = 2.3435087939617487;
mesh.position.z = -0.42347489302003094;
structureRoot.add(mesh);
    //C29 - H29C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800114944302699, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.29297144244100826, 0.8405761467639709, 0.45563085431681466, 0,
      -0.8405761467639709, -0.0006510331803517566, 0.5416930105209347, 0,
      0.45563085431681466, -0.5416930105209347, 0.7063775243786401, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.6888183918484803;
mesh.position.y = 0.611309678961748;
mesh.position.z = -6.092603936846196;
structureRoot.add(mesh);
    //C10 - H10F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799836492537726, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8967528273204015, -0.4258393249505643, 0.12039616280643592, 0,
      0.4258393249505643, 0.7563592877946643, -0.4965697303424723, 0,
      0.12039616280643592, 0.4965697303424723, 0.8596064604742628, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.21235306625564;
mesh.position.y = -0.947771943538251;
mesh.position.z = 3.3755019434052436;
structureRoot.add(mesh);
    //C37 - H37B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800020051346499, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5664629393720515, -0.6532405900833314, 0.5023907540804831, 0,
      0.6532405900833314, -0.7275880215184152, -0.20950513695491765, 0,
      0.5023907540804831, 0.20950513695491765, 0.8388749178536362, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.125755885885642;
mesh.position.y = -0.20837812103825204;
mesh.position.z = -5.05251278040841;
structureRoot.add(mesh);
    //C52 - C53
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.412193088205979, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.05271086515262968, -0.22372539194856902, 0.9732258287223579, 0,
      0.22372539194856902, -0.9471618018604155, -0.22985097366334992, 0,
      0.9732258287223579, 0.22985097366334992, 0.00012733298695477568, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.756528902084051;
mesh.position.y = -1.290384486038251;
mesh.position.z = 4.186356765627307;
structureRoot.add(mesh);
    //C58 - H58E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9798955020653974, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.7627720373978557, -0.6322442524319325, -0.13581614127455824, 0,
      0.6322442524319325, -0.7732362516237292, 0.04871246700457063, 0,
      -0.13581614127455824, -0.04871246700457063, 0.9895357857741265, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.018633838488888;
mesh.position.y = -3.549835773538251;
mesh.position.z = 3.833985475088241;
structureRoot.add(mesh);
    //C50 - H50A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800982349572469, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.42609665425129084, 0.8978629178311438, -0.11083240509706777, 0,
      -0.8978629178311438, 0.4046926632995128, -0.1733955854550277, 0,
      -0.11083240509706777, 0.1733955854550277, 0.978596009048222, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.4905809066454125;
mesh.position.y = -0.8383263285382516;
mesh.position.z = -0.4209437554087998;
structureRoot.add(mesh);
    //C26 - H26B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799573873720454, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7878957859374106, 0.6133458999546169, 0.05501851970864912, 0,
      -0.6133458999546169, 0.7736243226177908, 0.15909812840830387, 0,
      0.05501851970864912, -0.15909812840830387, 0.9857285366803803, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.5921598307677254;
mesh.position.y = 5.739991473961749;
mesh.position.z = -5.6541848307767175;
structureRoot.add(mesh);
    //C49 - H49A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799216894135562, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.30558417442175534, 0.9460716770623491, 0.10754856671945213, 0,
      -0.9460716770623491, -0.3144435757763493, 0.07793343001188614, 0,
      0.10754856671945213, -0.07793343001188614, 0.9911405986454062, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.473668983046801;
mesh.position.y = 1.6346265989617481;
mesh.position.z = 0.8713812387768254;
structureRoot.add(mesh);
    //C59 - H59C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799762023188642, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.13260781980488434, -0.950423066106289, -0.28126706444181493, 0,
      0.950423066106289, 0.04140206150312009, 0.30819127942953317, 0,
      -0.28126706444181493, -0.30819127942953317, 0.9087942416982357, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.2203211097394853;
mesh.position.y = -3.1629605935382505;
mesh.position.z = 5.460170779171115;
structureRoot.add(mesh);
    //C41 - C42
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4163628279825213, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.878331068467044, -0.43116331181050216, 0.2064769544383602, 0,
      0.43116331181050216, 0.5279315689646349, -0.7317010708200029, 0,
      0.2064769544383602, 0.7317010708200029, 0.6496005004975909, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.7506808958165276;
mesh.position.y = -1.0188901860382515;
mesh.position.z = 1.6458767580598295;
structureRoot.add(mesh);
    //C1 - C5
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4115433796145263, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5534622787862009, -0.8126687897041276, 0.18234293022109216, 0,
      0.8126687897041276, 0.4790028487715645, -0.3318519385351759, 0,
      0.18234293022109216, 0.3318519385351759, 0.9255405699853636, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.422472138531681;
mesh.position.y = -1.1130401110382513;
mesh.position.z = 1.9263659130901551;
structureRoot.add(mesh);
    //C7 - H7C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801050688997458, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.48018392340975646, 0.7980305962998085, -0.36410241288432177, 0,
      -0.7980305962998085, 0.22515032010570402, -0.5589762971054059, 0,
      -0.36410241288432177, 0.5589762971054059, 0.7449663966959476, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.5659953994514986;
mesh.position.y = -0.8454662760382516;
mesh.position.z = 0.24469112008803684;
structureRoot.add(mesh);
    //C2 - C7
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4991665564658945, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.1107391353919922, 0.8341766808481713, 0.5402648508109353, 0,
      -0.8341766808481713, -0.21749538007881708, 0.506798801077409, 0,
      0.5402648508109353, -0.506798801077409, 0.6717654845291908, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -2.5823572067924143;
mesh.position.y = -0.7927708610382516;
mesh.position.z = 0.3506512757102591;
structureRoot.add(mesh);
    //C18 - H18C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799813966707189, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9045051232893629, 0.26688740467136846, -0.33262831384456065, 0,
      -0.26688740467136846, -0.2541077676025243, -0.9296237710341979, 0,
      -0.33262831384456065, 0.9296237710341979, -0.15861289089188735, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.664853646668418;
mesh.position.y = -3.4749020035382516;
mesh.position.z = -1.0337506386162252;
structureRoot.add(mesh);
    //C56 - H56C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800047270970275, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7045495501184351, 0.6201403179114892, -0.34501582214232995, 0,
      -0.6201403179114892, 0.30165316740429504, -0.7241763270748317, 0,
      -0.34501582214232995, 0.7241763270748317, 0.5971036172858599, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.254574861619387;
mesh.position.y = 1.857001753961749;
mesh.position.z = 5.030485727348125;
structureRoot.add(mesh);
    //C40 - H40C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801809159563262, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.4564022286523599, -0.7634831317565108, 0.45693600558987385, 0,
      0.7634831317565108, 0.07231214548882148, -0.641766671881669, 0,
      0.45693600558987385, 0.641766671881669, 0.6159099168364615, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.08291433682162896;
mesh.position.y = 1.9782633314617484;
mesh.position.z = -0.14250775492148815;
structureRoot.add(mesh);
    //C20 - H20A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801256873063873, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.4294288867986231, 0.7298119412939341, -0.5319448857989658, 0,
      -0.7298119412939341, -0.6273858220060886, -0.2715907964024624, 0,
      -0.5319448857989658, 0.2715907964024624, 0.8020430647925343, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.603370775717522;
mesh.position.y = -0.8137919410382524;
mesh.position.z = -3.246149586111244;
structureRoot.add(mesh);
    //C32 - C37
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.49897400672272, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9824715885177692, -0.08259678412666104, -0.16711477794409774, 0,
      0.08259678412666104, -0.6107902444564264, 0.7874725700167545, 0,
      -0.16711477794409774, -0.7874725700167545, -0.5932618329741954, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.7437621256047624;
mesh.position.y = 0.6059200889617475;
mesh.position.z = -4.564970050828198;
structureRoot.add(mesh);
    //C42 - C43
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4237064915163193, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8890646903723906, 0.4575984158420061, -0.012948596523632774, 0,
      -0.4575984158420061, 0.8875533036687823, -0.05341182421071993, 0,
      -0.012948596523632774, 0.05341182421071993, 0.9984886132963917, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.7710819695683355;
mesh.position.y = -0.013211161038251484;
mesh.position.z = 2.202075237438324;
structureRoot.add(mesh);
    //C50 - H50C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800407872283341, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.9929493805791298, 0.07893859223476546, 0.08843204319428885, 0,
      -0.07893859223476546, -0.9968733268367331, 0.003502698596475449, 0,
      0.08843204319428885, -0.003502698596475449, 0.9960760537423966, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.089265496183707;
mesh.position.y = -1.5251338710382516;
mesh.position.z = -0.5076325027806821;
structureRoot.add(mesh);
    //C19 - H19A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799669375267788, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.4319244758869848, 0.83611081200734, 0.3381714907767655, 0,
      -0.83611081200734, 0.23061329045483647, 0.49773107227700747, 0,
      0.3381714907767655, -0.49773107227700747, 0.7986888145678518, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.569316008304677;
mesh.position.y = -3.3705395610382523;
mesh.position.z = -3.1251546903433196;
structureRoot.add(mesh);
    //C21 - C25
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4203007429910124, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.987052231438086, -0.041370772303286237, -0.15497209946349952, 0,
      0.041370772303286237, -0.8678119096131458, 0.4951675966100916, 0,
      -0.15497209946349952, -0.4951675966100916, -0.8548641410512319, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.0721350105377265;
mesh.position.y = 3.514367838961747;
mesh.position.z = -5.6449945199651115;
structureRoot.add(mesh);
    //C31 - C32
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4235547538082123, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8608320868533207, -0.41569254569209757, -0.29354356695349393, 0,
      0.41569254569209757, 0.24166762752165194, 0.8768103929950187, 0,
      -0.29354356695349393, -0.8768103929950187, 0.38083554066833136, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.38597635961107457;
mesh.position.y = 0.8916858889617472;
mesh.position.z = -3.3506757925288193;
structureRoot.add(mesh);
    //C60 - H60D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799997368167178, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9936063987875676, 0.11220064296387013, -0.012543524500529576, 0,
      -0.11220064296387013, 0.9689974183917561, -0.22012500736764593, 0,
      -0.012543524500529576, 0.22012500736764593, 0.9753910196041885, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.901912074382441;
mesh.position.y = 0.3105713964617496;
mesh.position.z = 6.2528622448009745;
structureRoot.add(mesh);
    //C49 - H49C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.980029186220862, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9389111870727251, -0.29213406241099327, -0.18194359666923154, 0,
      0.29213406241099327, 0.3970202780392642, 0.8700761968959243, 0,
      -0.18194359666923154, -0.8700761968959243, 0.4581090909665392, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.8669809512741544;
mesh.position.y = 1.9832373689617482;
mesh.position.z = 0.4832155343793181;
structureRoot.add(mesh);
    //C57 - H57B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799450487571945, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.3418267587529139, 0.8239094963521878, -0.4520261151981835, 0,
      -0.8239094963521878, 0.03138021365483623, -0.5658519453104859, 0,
      -0.4520261151981835, 0.5658519453104859, 0.6895534549019224, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.474468395437842;
mesh.position.y = -0.14239761853825073;
mesh.position.z = 3.4730973953336903;
structureRoot.add(mesh);
    //C59 - H59E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799879341047741, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5468305158247019, -0.761717340977672, 0.3475098263600548, 0,
      0.761717340977672, 0.2803450536878006, -0.5841175766287889, 0,
      0.3475098263600548, 0.5841175766287889, 0.7335145378630988, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.312780201520786;
mesh.position.y = -3.04587972603825;
mesh.position.z = 5.897394927570055;
structureRoot.add(mesh);
    //C54 - C55
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4167006025700188, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9550582786720482, -0.29578800713098624, 0.01931681074774046, 0,
      0.29578800713098624, 0.9467555442320136, -0.12713533853112335, 0,
      0.01931681074774046, 0.12713533853112335, 0.9916972655599654, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.21282510287525;
mesh.position.y = -1.2944140860382505;
mesh.position.z = 5.219343355551157;
structureRoot.add(mesh);
    //C18 - H18E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.980012589916649, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5697456500979705, 0.6144214359724546, -0.5457803525338635, 0,
      -0.6144214359724546, -0.7595064519153842, -0.21362642279561647, 0,
      -0.5457803525338635, 0.21362642279561647, 0.8102391981825863, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.494555621076418;
mesh.position.y = -3.7225545035382517;
mesh.position.z = -1.3845793474351415;
structureRoot.add(mesh);
    //C33 - C38
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4984561702934274, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8193441891797215, -0.5192596463083281, -0.24299078042834177, 0,
      0.5192596463083281, 0.49250986757622905, 0.6984292734814279, 0,
      -0.24299078042834177, -0.6984292734814279, 0.6731656783965074, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.5940345221671635;
mesh.position.y = 2.750464813961748;
mesh.position.z = -4.383988279999179;
structureRoot.add(mesh);
    //C10 - H10A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9798787605404092, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.40205713394906595, -0.9043135691507393, -0.14341209743433103, 0,
      0.9043135691507393, 0.36766082142785905, 0.21689280540590353, 0,
      -0.14341209743433103, -0.21689280540590353, 0.9656036874787931, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.446754108064882;
mesh.position.y = -1.1382502960382512;
mesh.position.z = 3.02592250851462;
structureRoot.add(mesh);
    //C20 - H20C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799129343706497, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9836374156776077, -0.12511024806852034, -0.12963356165480688, 0,
      0.12511024806852034, -0.04339229895695684, 0.9911934897987695, 0,
      -0.12963356165480688, -0.9911934897987695, -0.027029714634564606, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.022323066152417;
mesh.position.y = -0.5275937985382522;
mesh.position.z = -3.8648878046651687;
structureRoot.add(mesh);
    //C15 - C20
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.502540691262731, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.42593663273675275, 0.8510195291230452, 0.3071542705938938, 0,
      -0.8510195291230452, 0.2615928488896223, 0.4553404687275243, 0,
      0.3071542705938938, -0.4553404687275243, 0.8356562161528696, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.600370226783397;
mesh.position.y = -0.7028604110382524;
mesh.position.z = -3.037162352785395;
structureRoot.add(mesh);
    //C32 - C33
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4223850457215645, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9297843095777653, -0.3677862783082392, 0.01530983837839683, 0,
      0.3677862783082392, 0.9264461504033251, -0.08019216851434915, 0,
      0.01530983837839683, 0.08019216851434915, 0.9966618408255599, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.9434237605260005;
mesh.position.y = 1.7225810139617477;
mesh.position.z = -3.9177375234576752;
structureRoot.add(mesh);
    //C23 - C28
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4981541266590277, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.228005789801775, 0.6814847500414828, -0.6954077187361143, 0,
      -0.6814847500414828, -0.39841328030186585, -0.613877344051729, 0,
      -0.6954077187361143, 0.613877344051729, 0.3735809298963594, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.126607280775419;
mesh.position.y = 2.4036253889617476;
mesh.position.z = -3.8710255417911217;
structureRoot.add(mesh);
    //C46 - H46F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799336005771192, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6683936225073314, 0.4987203633266027, 0.5518405246037195, 0,
      -0.4987203633266027, -0.24994807796747653, 0.8299421410699336, 0,
      0.5518405246037195, -0.8299421410699336, 0.08165829952519199, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.9678905179197486;
mesh.position.y = -2.9277704710382513;
mesh.position.z = 0.34453526508740584;
structureRoot.add(mesh);
    //C9 - H9A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800352956053695, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.38446283107623613, -0.893358798440546, 0.23259060335643247, 0,
      0.893358798440546, -0.4235381948602208, -0.1500848251603385, 0,
      0.23259060335643247, 0.1500848251603385, 0.9609246362160153, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.539120399031335;
mesh.position.y = 1.3330781989617484;
mesh.position.z = 1.8078478386757162;
structureRoot.add(mesh);
    //C19 - H19C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800420534694418, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.89050137140648, 0.2359250284788257, -0.38903301718548733, 0,
      -0.2359250284788257, -0.4916774778124604, -0.8382079925348138, 0,
      -0.38903301718548733, 0.8382079925348138, -0.38217884921894063, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.863388259554995;
mesh.position.y = -3.7244685635382515;
mesh.position.z = -2.4705351519185514;
structureRoot.add(mesh);
    //C39 - H39B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800172229110051, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.2525727555452095, -0.8340675512927006, 0.4904470644594563, 0,
      0.8340675512927006, -0.06924896666449976, -0.5472987305818434, 0,
      0.4904470644594563, 0.5472987305818434, 0.6781782777902907, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.6701490269839177;
mesh.position.y = 4.158583348961748;
mesh.position.z = -1.7175271442021636;
structureRoot.add(mesh);
    //C60 - H60F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800228420479945, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.16761571043029255, -0.8510557731082896, -0.49760330050754265, 0,
      0.8510557731082896, -0.12985391721488893, 0.5087652024686833, 0,
      -0.49760330050754265, -0.5087652024686833, 0.7025303723548184, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.4299067253433417;
mesh.position.y = -0.22786711353825062;
mesh.position.z = 5.895700260328198;
structureRoot.add(mesh);
    //C8 - H8A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800194034745315, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5903999269758362, -0.8009876298617598, -0.09923075649901979, 0,
      0.8009876298617598, 0.5663600312730177, 0.19404930245910945, 0,
      -0.09923075649901979, -0.19404930245910945, 0.9759601042971815, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.92593477951078;
mesh.position.y = 2.0892158489617487;
mesh.position.z = -0.2155739848492182;
structureRoot.add(mesh);
    //C57 - H57D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799640345132599, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9241326466616304, 0.3737403785662597, -0.07935351790134457, 0,
      -0.3737403785662597, 0.8411327721934335, -0.39091404294465854, 0,
      -0.07935351790134457, 0.39091404294465854, 0.9170001255318031, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.253901444270815;
mesh.position.y = 0.2543668714617493;
mesh.position.z = 3.3873863406013403;
structureRoot.add(mesh);
    //C41 - C46
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4991974893224493, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.14905358628981236, -0.2217777475895083, -0.9636377219101949, 0,
      0.2217777475895083, -0.9421992166211457, 0.25114789840375745, 0,
      -0.9636377219101949, -0.25114789840375745, -0.09125280291095805, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.8897784184487545;
mesh.position.y = -2.0990328610382516;
mesh.position.z = 0.9394395097398389;
structureRoot.add(mesh);
    //C16 - H16B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800163603412567, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8716326178814982, -0.42516244729489416, 0.2439128386437715, 0,
      0.42516244729489416, 0.4081700787736948, -0.8078577103698968, 0,
      0.2439128386437715, 0.8078577103698968, 0.5365374608921967, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.449513841199996;
mesh.position.y = 1.676320366461748;
mesh.position.z = -1.9394307836213915;
structureRoot.add(mesh);
    //C30 - H30C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800880336913514, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6153828439284967, -0.7880739591211875, -0.015600972839295122, 0,
      0.7880739591211875, 0.614750031923909, 0.0319661258930419, 0,
      -0.015600972839295122, -0.0319661258930419, 0.9993671879954124, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.8622143071004693;
mesh.position.y = 2.9291104139617468;
mesh.position.z = -7.254841493716244;
structureRoot.add(mesh);
    //C25 - C30
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4993071206137458, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6575823199846025, -0.5298116007697151, -0.5356166167451305, 0,
      0.5298116007697151, -0.1802399563668975, 0.8287419536977061, 0,
      -0.5356166167451305, -0.8287419536977061, 0.16217772364850003, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.6455803884085913;
mesh.position.y = 2.762973363961747;
mesh.position.z = -6.617907328815464;
structureRoot.add(mesh);
    //C24 - C25
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4218052291180563, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7388828662655424, -0.6513806164586052, -0.172497543290402, 0,
      0.6513806164586052, 0.6249286342484133, 0.4303109278166434, 0,
      -0.172497543290402, -0.4303109278166434, 0.8860457679828708, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.505823724530986;
mesh.position.y = 2.4538274889617475;
mesh.position.z = -5.690728808992132;
structureRoot.add(mesh);
    //C38 - H38B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799627615899307, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.23883944821473357, -0.9670515445894352, 0.08813074425913477, 0,
      0.9670515445894352, -0.24510904844005865, -0.06879581731469049, 0,
      0.08813074425913477, 0.06879581731469049, 0.9937303997746747, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -2.4569156837825474;
mesh.position.y = 2.9993681689617473;
mesh.position.z = -4.873562437619309;
structureRoot.add(mesh);
    //C10 - H10C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800213021859981, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8061694053131665, -0.021278368603536976, -0.5913020556082885, 0,
      0.021278368603536976, -0.9976640995650894, 0.0649120595001556, 0,
      -0.5913020556082885, -0.0649120595001556, -0.8038335048782559, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.014121905678848;
mesh.position.y = -1.8072478460382508;
mesh.position.z = 3.100379234640796;
structureRoot.add(mesh);
    //C6 - H6B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799542021441674, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7008591785783822, 0.5567891684503257, -0.44585001255896617, 0,
      -0.5567891684503257, 0.03634862213158807, -0.8298581803932102, 0,
      -0.44585001255896617, 0.8298581803932102, 0.335489443553206, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.154100290096542;
mesh.position.y = -2.818219918538251;
mesh.position.z = 2.4774586642399807;
structureRoot.add(mesh);
    //C35 - C40
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4981569244105764, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8839262015990426, 0.35441365228375366, -0.30506627673602243, 0,
      -0.35441365228375366, 0.08214807006844116, -0.931473380005527, 0,
      -0.30506627673602243, 0.931473380005527, 0.1982218684693986, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.025777827242247753;
mesh.position.y = 1.881288488961748;
mesh.position.z = -1.154778124138799;
structureRoot.add(mesh);
    //C58 - H58B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801672935174769, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.2571195390186122, 0.9573293902370597, 0.13194688796328624, 0,
      -0.9573293902370597, 0.23368376145058134, 0.1700362850177792, 0,
      0.13194688796328624, -0.1700362850177792, 0.9765642224319692, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.797571966787961;
mesh.position.y = -3.056465821038251;
mesh.position.z = 3.7745200361015634;
structureRoot.add(mesh);
    //C51 - C52
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.425778805382227, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.15252838996214102, 0.6908282701441957, 0.7067470491096054, 0,
      -0.6908282701441957, -0.5859158846003794, 0.4236258695388334, 0,
      0.7067470491096054, -0.4236258695388334, 0.5666125053617614, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.422016475301792;
mesh.position.y = -0.20390358603825098;
mesh.position.z = 4.326058180564951;
structureRoot.add(mesh);
    //C11 - C15
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4294223194714184, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.3086025421959615, 0.7054335356047956, 0.6380658255966292, 0,
      -0.7054335356047956, -0.619719160623974, 0.3439646621378939, 0,
      0.6380658255966292, -0.3439646621378939, 0.6888833815719877, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.7438971829152745;
mesh.position.y = -0.45646716103825224;
mesh.position.z = -2.4492431788798443;
structureRoot.add(mesh);
    //C48 - H48B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800018667088749, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7954382308646479, -0.37277262851482573, 0.47782694389189345, 0,
      0.37277262851482573, -0.32069695546137345, -0.8707433779179451, 0,
      0.47782694389189345, 0.8707433779179451, -0.11613518632602138, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.445131750525288;
mesh.position.y = 1.6349917814617485;
mesh.position.z = 3.4717286256383435;
structureRoot.add(mesh);
    //C9 - H9C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799487478421236, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9573360998550784, 0.2557686561962562, -0.13449902015192808, 0,
      -0.2557686561962562, 0.5333245500347314, -0.8063171329184395, 0,
      -0.13449902015192808, 0.8063171329184395, 0.575988450179653, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.976038734787274;
mesh.position.y = 1.8019347514617485;
mesh.position.z = 2.129378358063308;
structureRoot.add(mesh);
    //C27 - H27B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800995401140545, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.43888949422715606, -0.8152487660960213, 0.37781670322518285, 0,
      0.8152487660960213, 0.18449136806957178, -0.5489375050829854, 0,
      0.37781670322518285, 0.5489375050829854, 0.7456018738424156, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.9908118290941594;
mesh.position.y = 5.161798441461748;
mesh.position.z = -2.994437184437823;
structureRoot.add(mesh);
    //C47 - H47F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799156530232468, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7012692858297902, 0.32871592154752355, -0.6325877264640362, 0,
      -0.32871592154752355, -0.6382890946483966, -0.6960839565555959, 0,
      -0.6325877264640362, 0.6960839565555959, -0.33955838047818676, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.4588933497841836;
mesh.position.y = -1.3832121985382508;
mesh.position.z = 3.3765556788056283;
structureRoot.add(mesh);
    //C31 - C36
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.5002393363061877, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5988411057024243, 0.46757404717216383, -0.6502029225804359, 0,
      -0.46757404717216383, -0.8632600270225677, -0.19014898410467013, 0,
      -0.6502029225804359, 0.19014898410467013, 0.7355810786798567, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.2606406792620195;
mesh.position.y = 0.07212401396174761;
mesh.position.z = -2.5839474981043233;
structureRoot.add(mesh);
    //C1 - C2
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4179477809046155, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8704884745731573, 0.45225319603194053, 0.194208296203311, 0,
      -0.45225319603194053, 0.5792644913030496, 0.6781737946826862, 0,
      0.194208296203311, -0.6781737946826862, 0.7087760167298924, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.5282778057083206;
mesh.position.y = -1.0404233610382512;
mesh.position.z = 1.2113466960453794;
structureRoot.add(mesh);
    //C8 - H8C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799632177522798, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7265219659806861, 0.6438075997899247, -0.24016162765998805, 0,
      -0.6438075997899247, 0.5156179801921187, -0.565375868741615, 0,
      -0.24016162765998805, 0.565375868741615, 0.7890960142114325, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.2179891863552266;
mesh.position.y = 2.0643372664617488;
mesh.position.z = 0.1565358337568563;
structureRoot.add(mesh);
    //C13 - C18
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.496996061561074, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.37076408355769574, -0.5368325817038618, 0.7578553777369325, 0,
      0.5368325817038618, -0.7897601606026443, -0.29679903629569293, 0,
      0.7578553777369325, 0.29679903629569293, 0.5810039229550515, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.393807862196081;
mesh.position.y = -2.7592576360382517;
mesh.position.z = -1.7114111335793094;
structureRoot.add(mesh);
    //C53 - C54
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4116990012799153, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.30289605155938426, -0.8331879161858818, 0.46265740918260767, 0,
      0.8331879161858818, -0.004162714569233339, -0.5529742924668769, 0,
      0.46265740918260767, 0.5529742924668769, 0.6929412338713825, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.010451901422028;
mesh.position.y = -1.9621104110382506;
mesh.position.z = 4.738970371994185;
structureRoot.add(mesh);
    //C22 - C27
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.499228106768635, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9751799259919497, 0.20595599905663797, -0.08127876964446332, 0,
      -0.20595599905663797, 0.7090147891444524, -0.6744480374550955, 0,
      -0.08127876964446332, 0.6744480374550955, 0.7338348631525027, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.235936788187127;
mesh.position.y = 4.539901038961748;
mesh.position.z = -3.7690196097332302;
structureRoot.add(mesh);
    //C46 - H46A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800046819381084, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5498878669310248, 0.835231340423628, 0.0034556875144057565, 0,
      -0.835231340423628, -0.5498955718601697, 0.0018622627974096953, 0,
      0.0034556875144057565, -0.0018622627974096953, 0.9999922950708551, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.132799409320164;
mesh.position.y = -3.0747543285382513;
mesh.position.z = 0.7502668472418472;
structureRoot.add(mesh);
    //C6 - H6D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800600579660182, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.055288128679405135, 0.9984682641142427, -0.00208527787605172, 0,
      -0.9984682641142427, -0.05529224924487175, -0.0019730002873269595, 0,
      -0.00208527787605172, 0.0019730002873269595, 0.9999958794345334, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -2.9376348003596515;
mesh.position.y = -2.8631247735382512;
mesh.position.z = 2.0718139880979436;
structureRoot.add(mesh);
    //C43 - C48
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4983838171388313, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9450506755862688, -0.31302673944272985, 0.09430525418973362, 0,
      0.31302673944272985, 0.7832018983232695, -0.537223460821175, 0,
      0.09430525418973362, 0.537223460821175, 0.8381512227370007, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.8623077867828997;
mesh.position.y = 1.2053650639617484;
mesh.position.z = 2.642580087805472;
structureRoot.add(mesh);
    //C58 - H58D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801474419084394, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8813224148960627, 0.3745434892370645, 0.28807633653581693, 0,
      -0.3745434892370645, 0.18204988083483475, 0.909161710345386, 0,
      0.28807633653581693, -0.909161710345386, 0.3007274659387721, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 6.511954409500849;
mesh.position.y = -3.081772548538251;
mesh.position.z = 3.412295776406319;
structureRoot.add(mesh);
    //C21 - C22
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4188981316166787, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.4779605303146206, 0.6907013091495585, -0.5426651204937099, 0,
      -0.6907013091495585, -0.08614515536836409, -0.7179907476741232, 0,
      -0.5426651204937099, 0.7179907476741232, 0.4358943143170154, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.5915318783867125;
mesh.position.y = 4.069529188961748;
mesh.position.z = -4.78397320208348;
structureRoot.add(mesh);
    //C14 - C19
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.5011804118944008, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5015670465066038, 0.4914151933387938, 0.7119983185474796, 0,
      -0.4914151933387938, -0.8391754182365498, 0.23301443127692334, 0,
      0.7119983185474796, -0.23301443127692334, 0.6623916282700542, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.347847915416356;
mesh.position.y = -2.853659411038252;
mesh.position.z = -2.7063763430768946;
structureRoot.add(mesh);
    //C60 - H60A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799483675886878, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.6673746397945559, -0.6265296548764199, 0.4025812734337265, 0,
      0.6265296548764199, -0.7645763591031152, -0.15127320536386504, 0,
      0.4025812734337265, 0.15127320536386504, 0.9027982806914405, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.5399504178237855;
mesh.position.y = -0.5388598885382505;
mesh.position.z = 6.219120985485553;
structureRoot.add(mesh);
    //C59 - H59B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800141076036819, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.05582341093607002, 0.4350524151548189, 0.898672989946522, 0,
      -0.4350524151548189, -0.820736496300799, 0.3702985278229542, 0,
      0.898672989946522, -0.3702985278229542, 0.23508691463527076, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.8991958553984194;
mesh.position.y = -3.5854137835382502;
mesh.position.z = 5.429731948327003;
structureRoot.add(mesh);
    //C2 - C3
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4264622446963713, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8488406024340549, -0.528098854438636, -0.024108745301048763, 0,
      0.528098854438636, 0.8449954455377576, 0.08422764962318867, 0,
      -0.024108745301048763, -0.08422764962318867, 0.9961548431037027, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.584298636510125;
mesh.position.y = -0.02706291103825098;
mesh.position.z = 0.6704654013528941;
structureRoot.add(mesh);
    //C55 - C60
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4988661711435505, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5444591280032441, -0.7714963664370831, 0.3291771779882758, 0,
      0.7714963664370831, 0.30659328287421106, -0.5574889375322097, 0,
      0.3291771779882758, 0.5574889375322097, 0.7621341548709669, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.4251186765011674;
mesh.position.y = -0.39400836103825054;
mesh.position.z = 5.727200365530544;
structureRoot.add(mesh);
    //C18 - H18B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799566305927435, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.23321705768667422, -0.9723447971858306, -0.012465929151749827, 0,
      0.9723447971858306, 0.23301439356748077, 0.015807839068801444, 0,
      -0.012465929151749827, -0.015807839068801444, 0.9997973358808067, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.27205385807256;
mesh.position.y = -3.2362195610382516;
mesh.position.z = -1.4970031377298296;
structureRoot.add(mesh);
    //C22 - C23
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4126128160496454, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.9036788660153872, 0.3784288253096566, 0.20038994808097657, 0,
      -0.3784288253096566, -0.9247728288726562, 0.03983514972505561, 0,
      0.20038994808097657, -0.03983514972505561, 0.9789060371427311, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.3488359812129804;
mesh.position.y = 3.3552406139617474;
mesh.position.z = -4.302731158402477;
structureRoot.add(mesh);
    //C43 - C44
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4269522227324127, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.4843992365175147, 0.7209624183090986, 0.4955507754480315, 0,
      -0.7209624183090986, 0.008118772174317002, 0.6929266028406458, 0,
      0.4955507754480315, -0.6929266028406458, 0.5237195356568023, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.6112143497956115;
mesh.position.y = 0.6243890889617485;
mesh.position.z = 1.7457100398076495;
structureRoot.add(mesh);
    //C40 - H40B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799363164683521, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.5525083250546032, 0.5460620546727611, -0.6297227828115474, 0,
      -0.5460620546727611, -0.8079341909210371, -0.22149170545943983, 0,
      -0.6297227828115474, 0.22149170545943983, 0.744574134133566, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.5588144800891044;
mesh.position.y = 1.5469618114617485;
mesh.position.z = -0.3485075940709885;
structureRoot.add(mesh);
    //C36 - H36A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799029189953151, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8348231404305609, 0.414164302681064, -0.36268202958840384, 0,
      -0.414164302681064, 0.03847518388725235, -0.9093885806461118, 0,
      -0.36268202958840384, 0.9093885806461118, 0.2036520434566914, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.814297572934219;
mesh.position.y = -0.5565733385382519;
mesh.position.z = -1.9957567429100145;
structureRoot.add(mesh);
    //C46 - H46C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800289553807974, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.32790099708387255, -0.6465046453925969, 0.688848807502194, 0,
      0.6465046453925969, -0.378115047484505, -0.6626165967975621, 0,
      0.688848807502194, 0.6626165967975621, 0.2939839554316225, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.4067374611253953;
mesh.position.y = -2.990586058538251;
mesh.position.z = 1.0758710859608245;
structureRoot.add(mesh);
    //C6 - H6F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9798895316841527, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8456093461507593, -0.3477176679628152, 0.40501513192594, 0,
      0.3477176679628152, -0.21687243625794572, -0.9121725548261385, 0,
      0.40501513192594, 0.9121725548261385, -0.06248178240870517, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.597276684171363;
mesh.position.y = -2.942285426038251;
mesh.position.z = 2.5177613274918222;
structureRoot.add(mesh);
    //C17 - H17B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9798822198632956, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.2601739676784244, -0.776163353546789, -0.5743517695223619, 0,
      0.776163353546789, -0.18571458009044006, 0.6025616510804795, 0,
      -0.5743517695223619, -0.6025616510804795, 0.5541114522311356, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.964546214014291;
mesh.position.y = -0.39374391853825164;
mesh.position.z = -1.3788435506165513;
structureRoot.add(mesh);
    //C3 - C4
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4283175881336494, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.3424771545643238, -0.781783892930444, 0.5210790183417908, 0,
      0.781783892930444, -0.07047175700715536, -0.6195544174798889, 0,
      0.5210790183417908, 0.6195544174798889, 0.5870510884285209, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -4.519273017368258;
mesh.position.y = 0.5252861139617488;
mesh.position.z = 1.052851855925609;
structureRoot.add(mesh);
    //C51 - C56
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4963079295904997, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9998998625708962, 0.014149706257497492, -0.00022504117273541195, 0,
      -0.014149706257497492, 0.9993941223109417, -0.03179896386942514, 0,
      -0.00022504117273541195, 0.03179896386942514, 0.9994942597400455, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.940118481273796;
mesh.position.y = 0.961490313961749;
mesh.position.z = 4.651847094560285;
structureRoot.add(mesh);
    //C14 - C15
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4171453490667008, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.941440490377968, 0.33658042510425995, 0.02008533080452243, 0,
      -0.33658042510425995, 0.9345514211878236, 0.1154437464415238, 0,
      0.02008533080452243, -0.1154437464415238, 0.9931109308098558, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.478207654578407;
mesh.position.y = -1.5615849610382524;
mesh.position.z = -2.6132782772902994;
structureRoot.add(mesh);
    //C24 - C29
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4982611785138453, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.36873413432292734, 0.20559789276743612, 0.9065123521909181, 0,
      -0.20559789276743612, -0.9330385249564024, 0.2952433190383318, 0,
      0.9065123521909181, -0.2952433190383318, -0.30177265927932995, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.122911578403331;
mesh.position.y = 1.310596388961748;
mesh.position.z = -5.605995446899314;
structureRoot.add(mesh);
    //C4 - C9
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4969474942538288, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7267789288973601, -0.6839037216343005, 0.06378156509179911, 0,
      0.6839037216343005, 0.7118895646578386, -0.15965258302334615, 0,
      0.06378156509179911, 0.15965258302334615, 0.9851106357604785, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.589474840769999;
mesh.position.y = 1.0077887389617488;
mesh.position.z = 1.6148078586257952;
structureRoot.add(mesh);
    //C47 - H47A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799247314296968, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.972279105997851, 0.1868403366894254, -0.14058459597623738, 0,
      -0.1868403366894254, 0.2593140542838014, -0.9475478403947105, 0,
      -0.14058459597623738, 0.9475478403947105, 0.28703494828595033, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.3893811446983033;
mesh.position.y = -0.9434233335382507;
mesh.position.z = 3.4997666778898253;
structureRoot.add(mesh);
    //C60 - H60C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.979926286266938, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9149823355723234, 0.33681261884418207, -0.22218142446644795, 0,
      -0.33681261884418207, 0.33434317416682835, -0.8802112824063173, 0,
      -0.22218142446644795, 0.8802112824063173, 0.419360838594505, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.011959543470722;
mesh.position.y = -0.00042137853825030547;
mesh.position.z = 6.57627210670678;
structureRoot.add(mesh);
    //C59 - H59D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799945513698473, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7475271284434115, -0.3520343955578429, -0.5632716720955987, 0,
      0.3520343955578429, -0.5091424480907094, 0.7853952838516561, 0,
      -0.5632716720955987, -0.7853952838516561, -0.2566695765341209, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.5135212084282994;
mesh.position.y = -3.4327255235382506;
mesh.position.z = 5.226339289549589;
structureRoot.add(mesh);
    //C1 - C6
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4964972014888283, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.06655758617180485, 0.28199135981448564, -0.9571055117973982, 0,
      -0.28199135981448564, -0.9254431940281433, -0.25305289489939636, 0,
      -0.9571055117973982, 0.25305289489939636, 0.14111439214366128, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.637913873165372;
mesh.position.y = -2.143568336038251;
mesh.position.z = 1.8815006841871647;
structureRoot.add(mesh);
    //C28 - H28B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800307267009021, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9829353276780327, 0.1664750945024257, -0.07825716908301056, 0,
      -0.1664750945024257, 0.624054453944333, -0.7634409482223551, 0,
      -0.07825716908301056, 0.7634409482223551, 0.6411191262663003, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.718667229961747;
mesh.position.y = 2.4109794089617473;
mesh.position.z = -3.0370863100245407;
structureRoot.add(mesh);
    //C33 - C34
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4197296233461112, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9697312508512662, 0.20041124690920428, -0.13948703608126659, 0,
      -0.20041124690920428, 0.32693517298458363, -0.9235522317540239, 0,
      -0.13948703608126659, 0.9235522317540239, 0.35720392213331753, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.0627257196252504;
mesh.position.y = 2.6135423639617477;
mesh.position.z = -3.205108221753978;
structureRoot.add(mesh);
    //C18 - H18D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799548655321059, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7768178412104786, -0.526527084734803, 0.3454320057808211, 0,
      0.526527084734803, 0.24217263809506007, -0.8149365879617559, 0,
      0.3454320057808211, 0.8149365879617559, 0.4653547968845815, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.053612381720406;
mesh.position.y = -3.2317324335382516;
mesh.position.z = -1.0899571021377943;
structureRoot.add(mesh);
    //C23 - C24
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4174925281137634, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5923699993225575, -0.4566026027151465, -0.6637859949534543, 0,
      0.4566026027151465, -0.48854123479684497, 0.7435331365157359, 0,
      -0.6637859949534543, -0.7435331365157359, -0.08091123411940249, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.2925072966774884;
mesh.position.y = 2.3558158639617477;
mesh.position.z = -4.857843312625936;
structureRoot.add(mesh);
    //C36 - H36C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800664225833273, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.7461095253090149, -0.6595472081771286, -0.09120337948185889, 0,
      0.6595472081771286, -0.7508732908737437, 0.03444969140921087, 0,
      -0.09120337948185889, -0.03444969140921087, 0.9952362344352712, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.2881771319423123;
mesh.position.y = -0.943377161038252;
mesh.position.z = -2.4581944981573427;
structureRoot.add(mesh);
    //C20 - H20B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800197934393304, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9685339726608531, 0.24658278112901177, -0.03374723473809187, 0,
      -0.24658278112901177, 0.9323401487569694, -0.2644594091094398, 0,
      -0.03374723473809187, 0.2644594091094398, 0.9638061760961163, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.8401964878862103;
mesh.position.y = -0.04947756103825229;
mesh.position.z = -3.24965841636201;
structureRoot.add(mesh);
    //C53 - C58
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4973513431663366, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.24588827543037395, 0.48742288535090156, 0.8378292707002296, 0,
      -0.48742288535090156, -0.809307885908366, 0.327779921048763, 0,
      0.8378292707002296, -0.327779921048763, 0.43658038952200784, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.963478832036172;
mesh.position.y = -2.565081286038251;
mesh.position.z = 4.103252891267045;
structureRoot.add(mesh);
    //C46 - H46E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800439231369632, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8213420177520091, 0.26261840030436234, -0.5063880584064321, 0,
      -0.26261840030436234, -0.6139639365080876, -0.7443654079073463, 0,
      -0.5063880584064321, 0.7443654079073463, -0.4353059542600968, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.8522228809229855;
mesh.position.y = -3.1061600235382514;
mesh.position.z = 1.1159347576785583;
structureRoot.add(mesh);
    //C11 - C12
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.42433345328101, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.29744130355469345, -0.7561798893184384, 0.5828555961214058, 0,
      0.7561798893184384, -0.5592802360746325, -0.3397022115421945, 0,
      0.5828555961214058, 0.3397022115421945, 0.7381610674800608, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.786604559791131;
mesh.position.y = -0.41184773603825175;
mesh.position.z = -1.9614831842686238;
structureRoot.add(mesh);
    //C4 - C5
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4182944502589911, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9721424668877687, 0.057505757041248634, -0.2272270053943335, 0,
      -0.057505757041248634, -0.8812919981261669, -0.4690602327483121, 0,
      -0.2272270053943335, 0.4690602327483121, -0.8534344650139358, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.036810811529559;
mesh.position.y = -0.15000768603825132;
mesh.position.z = 1.8279448540438814;
structureRoot.add(mesh);
    //C12 - C17
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4990990417330436, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.47291470243205513, -0.839931937595828, 0.2662067325033665, 0,
      0.839931937595828, 0.33846582905784794, -0.4242112949541794, 0,
      0.2662067325033665, 0.4242112949541794, 0.8655511266257928, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.954701297703865;
mesh.position.y = -0.5564516110382516;
mesh.position.z = -1.4015911993630068;
structureRoot.add(mesh);
    //C19 - H19B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799843304033434, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.20093139653615433, -0.5806269582474954, -0.7889860006630611, 0,
      0.5806269582474954, -0.5780992230425028, 0.573300639868748, 0,
      -0.7889860006630611, -0.573300639868748, 0.22096938042134306, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.263499144688758;
mesh.position.y = -3.7668003510382517;
mesh.position.z = -3.162187514878502;
structureRoot.add(mesh);
    //C21 - C26
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4998448708561434, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8398184502414269, -0.5399765586859524, -0.055948965171522036, 0,
      0.5399765586859524, 0.8202763325101265, 0.18860555239285134, 0,
      -0.055948965171522036, -0.18860555239285134, 0.9804578822686996, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.6965739438941227;
mesh.position.y = 4.7457884139617486;
mesh.position.z = -5.434790602465622;
structureRoot.add(mesh);
    //C47 - H47C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800705628503581, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.51553894112195, -0.8379679529840575, -0.17896734327403663, 0,
      0.8379679529840575, 0.44942566045344245, 0.3095582101926797, 0,
      -0.17896734327403663, -0.3095582101926797, 0.9338867193314925, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.11279745034283017;
mesh.position.y = -0.8502430310382509;
mesh.position.z = 2.883809451732793;
structureRoot.add(mesh);
    //C60 - H60E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799005257754124, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9977294331348225, -0.032580423693077676, 0.05894484072796573, 0,
      0.032580423693077676, -0.5325026431505295, -0.8458010706009301, 0,
      0.05894484072796573, 0.8458010706009301, -0.5302320762853521, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 2.830970986941395;
mesh.position.y = -0.4251370210382506;
mesh.position.z = 6.559401477049068;
structureRoot.add(mesh);
    //C28 - H28D
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800675848087126, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6098858508137834, 0.7919691162372071, -0.02870832463945851, 0,
      -0.7919691162372071, 0.6077732181258285, -0.05828065078077947, 0,
      -0.02870832463945851, 0.05828065078077947, 0.9978873673120451, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 5.025183505537186;
mesh.position.y = 2.4030125539617475;
mesh.position.z = -3.3826246153384316;
structureRoot.add(mesh);
    //C16 - H16A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.979983058973039, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.32798023781356633, 0.9429782997152409, 0.056752884243091835, 0,
      -0.9429782997152409, 0.32318738788392953, 0.0796356614772288, 0,
      0.056752884243091835, -0.0796356614772288, 0.9952071500703632, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -5.779129384774066;
mesh.position.y = 1.6346727714617475;
mesh.position.z = -2.3743084696854533;
structureRoot.add(mesh);
    //C34 - C35
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4147877558713469, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.15776841080134119, 0.48117112857440075, -0.8623128629329709, 0,
      -0.48117112857440075, -0.725104522386951, -0.4926436609157058, 0,
      -0.8623128629329709, 0.4926436609157058, 0.11712706681170781, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.580083316987956;
mesh.position.y = 2.3326876389617475;
mesh.position.z = -2.2010178809540895;
structureRoot.add(mesh);
    //C18 - H18F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800162955416661, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.46356783123470946, -0.6247443872371606, -0.6283305789630269, 0,
      0.6247443872371606, -0.27240465410062153, 0.7317719282945919, 0,
      -0.6283305789630269, -0.7317719282945919, 0.2640275146646689, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -8.10175583248056;
mesh.position.y = -3.4838720610382516;
mesh.position.z = -1.847831846548746;
structureRoot.add(mesh);
    //C30 - H30B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.979898489474108, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7130675414894934, 0.5752882520074267, 0.40072198389453134, 0,
      -0.5752882520074267, 0.153430234473253, 0.8034317583041648, 0,
      0.40072198389453134, -0.8034317583041648, 0.44036269298375963, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.5302672801768296;
mesh.position.y = 2.7030288664617466;
mesh.position.z = -7.632817468159512;
structureRoot.add(mesh);
    //C38 - H38A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799960506653235, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9944381879546891, 0.10506471255946719, -0.007355033119646928, 0,
      -0.10506471255946719, 0.9847117693432024, -0.13893933025524635, 0,
      -0.007355033119646928, 0.13893933025524635, 0.9902735813885133, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.9315969309784293;
mesh.position.y = 3.6019738614617482;
mesh.position.z = -4.839191109713966;
structureRoot.add(mesh);
    //C57 - H57F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799234618562306, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.7061390685256859, 0.707696549950356, 0.02309132066469772, 0,
      -0.707696549950356, -0.706451592340348, 0.009578145339772996, 0,
      0.02309132066469772, -0.009578145339772996, 0.9996874761853378, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 7.417519606236194;
mesh.position.y = -0.5039073060382508;
mesh.position.z = 3.1911525645956154;
structureRoot.add(mesh);
    //C6 - H6A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799292987349183, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.4984740268407888, -0.8103884155062291, 0.30788676583840335, 0,
      0.8103884155062291, -0.5617345564732479, -0.16650797001076814, 0,
      0.30788676583840335, 0.16650797001076814, 0.936739470367541, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.823975908617129;
mesh.position.y = -3.111259986038251;
mesh.position.z = 2.1524301778531747;
structureRoot.add(mesh);
    //C12 - C13
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.414524001599744, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.38746617021429053, 0.23551455048465128, 0.8912928045538585, 0,
      -0.23551455048465128, -0.9600227344776116, 0.1512919224418176, 0,
      0.8912928045538585, -0.1512919224418176, 0.42744343573667876, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -7.158560224125166;
mesh.position.y = -1.4891361110382517;
mesh.position.z = -1.8265616000131377;
structureRoot.add(mesh);
    //C29 - H29B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800383742000685, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9652653063897002, 0.12011201238058605, -0.23202584503085863, 0,
      -0.12011201238058605, -0.5846545911711707, -0.8023416438801843, 0,
      -0.23202584503085863, 0.8023416438801843, -0.549919897560871, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.335788439629866;
mesh.position.y = 0.325136721461748;
mesh.position.z = -5.434008448353996;
structureRoot.add(mesh);
    //C10 - H10E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.97988760725393, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(-0.004575775114911584, -0.7019897354659096, -0.7121723622709605, 0,
      0.7019897354659096, -0.50945503474526, 0.49766050563934466, 0,
      -0.7121723622709605, -0.49766050563934466, 0.49512074036965137, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.3476307995264865;
mesh.position.y = -1.5679861485382511;
mesh.position.z = 2.8883611541323955;
structureRoot.add(mesh);
    //C37 - H37A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.980083806218338, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9318170996764218, -0.32180792176977857, -0.16779914849854732, 0,
      0.32180792176977857, 0.5188608584016463, 0.7919741606295769, 0,
      -0.16779914849854732, -0.7919741606295769, 0.5870437587252245, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -0.9633667082468076;
mesh.position.y = 0.40240430146174777;
mesh.position.z = -5.543271032447529;
structureRoot.add(mesh);
    //C9 - H9B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800774714410394, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9986531189115359, -0.04645447491594691, -0.023106922091561007, 0,
      0.04645447491594691, 0.6022336776419905, 0.79696711304425, 0,
      -0.023106922091561007, -0.79696711304425, 0.6035805587304548, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.124123314132037;
mesh.position.y = 1.8357372189617491;
mesh.position.z = 1.3437588691927331;
structureRoot.add(mesh);
    //C27 - H27A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799830946606137, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.20491934693094793, 0.7396788595198205, -0.6410017519733089, 0,
      -0.7396788595198205, -0.3118624970830164, -0.5963362874189391, 0,
      -0.6410017519733089, 0.5963362874189391, 0.4832181559860359, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.7527606883624234;
mesh.position.y = 4.918578501461748;
mesh.position.z = -2.9712441423778015;
structureRoot.add(mesh);
    //C47 - H47E
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799931042767618, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9127984388628073, -0.39653090932240986, 0.09778674737184238, 0,
      0.39653090932240986, 0.8031415951450623, -0.44466483569064413, 0,
      0.09778674737184238, 0.44466483569064413, 0.890343156282255, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 0.10353763293871587;
mesh.position.y = -0.6769408485382507;
mesh.position.z = 3.2533881327276326;
structureRoot.add(mesh);
    //C8 - H8B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800134554082108, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7364372844376809, 0.4425174415839886, 0.5117015145414517, 0,
      -0.4425174415839886, -0.257020532330428, 0.8591383822496494, 0,
      0.5117015145414517, -0.8591383822496494, 0.006542183231891263, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.316606546404417;
mesh.position.y = 1.6857521489617486;
mesh.position.z = -0.5414715313600551;
structureRoot.add(mesh);
    //C13 - C14
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4095970583720259, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.1478337266337617, 0.9047198117841315, 0.39953379260690797, 0,
      -0.9047198117841315, -0.039485645681101245, 0.4241732499232265, 0,
      0.39953379260690797, -0.4241732499232265, 0.812680627685137, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.354344539261007;
mesh.position.y = -2.195953136038252;
mesh.position.z = -2.232521310450138;
structureRoot.add(mesh);
    //C44 - C49
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.4971078970832, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8032097437647396, 0.5908238773381173, 0.07603455456918556, 0,
      -0.5908238773381173, 0.7738320011918399, 0.22827873290910267, 0,
      0.07603455456918556, -0.22827873290910267, 0.9706222574271003, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 3.567867358726069;
mesh.position.y = 1.2094366389617481;
mesh.position.z = 1.0804445148635278;
structureRoot.add(mesh);
    //C26 - H26A
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799396735982029, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.6258381593682336, -0.5634999722408132, -0.5392535392217507, 0,
      0.5634999722408132, -0.1513506075893547, 0.8121334710913817, 0,
      -0.5392535392217507, -0.8121334710913817, 0.22281123304241146, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 1.0155354184951548;
mesh.position.y = 5.286774806461748;
mesh.position.z = -5.974151041941058;
structureRoot.add(mesh);
    //C28 - H28F
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799932319147658, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8204631297439537, -0.39825621170135034, 0.41016123972414226, 0,
      0.39825621170135034, -0.11657137649491034, -0.9098368557183046, 0,
      0.41016123972414226, 0.9098368557183046, 0.06296549376113592, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = 4.441947680022672;
mesh.position.y = 2.0480635589617475;
mesh.position.z = -2.965367123289056;
structureRoot.add(mesh);
    //C16 - H16C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.979989690707354, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.7917541106010793, -0.5131932053644316, -0.3312976943989715, 0,
      0.5131932053644316, 0.2646937079641801, 0.8164373674275043, 0,
      -0.3312976943989715, -0.8164373674275043, 0.472939597363101, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -6.492642789423237;
mesh.position.y = 1.6060122414617477;
mesh.position.z = -2.7353377717101583;
structureRoot.add(mesh);
    //C38 - H38C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9800802229286257, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.8439110382175699, 0.3428068322835359, 0.4126713405535585, 0,
      -0.3428068322835359, -0.2471182912724048, 0.9063200460424201, 0,
      0.4126713405535585, -0.9063200460424201, -0.09102932948997466, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.81508933436176;
mesh.position.y = 2.9983691639617476;
mesh.position.z = -5.351404283565048;
structureRoot.add(mesh);
    //C7 - H7B
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9799896310407741, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.9943599794278541, 0.011775372322523472, 0.1054019540563812, 0,
      -0.011775372322523472, -0.9754150908564336, 0.2200607669172342, 0,
      0.1054019540563812, -0.2200607669172342, -0.9697750702842876, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -1.9513024443479043;
mesh.position.y = -1.4337500985382519;
mesh.position.z = -0.13706526589475754;
structureRoot.add(mesh);
    //C6 - H6C
var bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 0.9801282400616222, 36, 1);
var mesh = new THREE.Mesh(bond_geom, bond_mat);
var m = new THREE.Matrix4();
m.set(0.5214315500372944, 0.5358155674569245, 0.6640864524265787, 0,
      -0.5358155674569245, -0.40008932400044483, 0.7435255278009498, 0,
      0.6640864524265787, -0.7435255278009498, 0.0784791259622607, 0,
      0,           0,           0,            1);
mesh.setRotationFromMatrix(m);
mesh.position.x = -3.1643302481975812;
mesh.position.y = -3.032099333538251;
mesh.position.z = 1.7064719752077444;
structureRoot.add(mesh);
//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// render the scene
onRenderFcts.push(function(){{
    renderer.render( scene, camera );
}})

// run the rendering loop
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){{
    // keep looping
    requestAnimationFrame( animate );
    // measure time
    lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
    var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec	= nowMsec
    controls.update();
    onRenderFcts.forEach(function(onRenderFct){{
        onRenderFct(deltaMsec/1000, nowMsec/1000)
    }})
}})