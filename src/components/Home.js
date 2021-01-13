import React, { Component } from "react"
import ReactDOM from "react-dom";
import * as THREE from "three";

class Home extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body

    this.mount.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );

    scene.add( cube );
    camera.position.z = 5;

    // --
    // const geo = new THREE.BoxBufferGeometry( 100, 100, 100 );
    // const edges = new THREE.EdgesGeometry( geo );
    // const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    // scene.add( line );

    var geo = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var edges = new THREE.EdgesGeometry( geo );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x0000ff } ) );
    scene.add( line );

    // var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
    // var wireframe = new THREE.LineSegments( geo, mat );

    // wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
    // scene.add( wireframe );
    // --

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;

      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}


// const rootElement = document.getElementById("root");

export default Home;
