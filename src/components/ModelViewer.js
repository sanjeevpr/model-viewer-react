import React from 'react';
import '@google/model-viewer/dist/model-viewer';

function ModelViewer() {
    return (
        <model-viewer src="https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/Avocado/glTF-Binary/Avocado.glb"
                      camera-controls
                      alt="A 3D model of an astronaut">
      </model-viewer>
    );
}

export default ModelViewer;