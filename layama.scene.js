// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "10000", a: "360", p: new BABYLON.Vector3(630.056, 122.611, -428.819), l: new BABYLON.Vector3(630.054, 122.611, -427.819)});
   layamaCameras.push({n: "10001", a: "361", p: new BABYLON.Vector3(630.056, 122.611, -69.4959), l: new BABYLON.Vector3(630.054, 122.611, -68.4959)});
   layamaCameras.push({n: "10002", a: "362", p: new BABYLON.Vector3(489.618, 122.611, 85.4689), l: new BABYLON.Vector3(489.616, 122.611, 86.4689)});
   layamaCameras.push({n: "10003", a: "363", p: new BABYLON.Vector3(704.142, 122.611, 86.6542), l: new BABYLON.Vector3(704.14, 122.611, 87.6542)});
   layamaCameras.push({n: "10004", a: "364", p: new BABYLON.Vector3(488.508, 120.302, 445.233), l: new BABYLON.Vector3(488.509, 120.302, 444.233)});
   layamaCameras.push({n: "10005", a: "365", p: new BABYLON.Vector3(608.857, 121.842, 445.233), l: new BABYLON.Vector3(608.859, 121.842, 444.233)});
   layamaCameras.push({n: "10006", a: "366", p: new BABYLON.Vector3(674.414, 117.993, 445.16), l: new BABYLON.Vector3(674.416, 117.993, 444.16)});
   layamaCameras.push({n: "10007", a: "367", p: new BABYLON.Vector3(803.317, 117.993, 282.841), l: new BABYLON.Vector3(802.317, 117.993, 282.839)});
   layamaCameras.push({n: "10008", a: "368", p: new BABYLON.Vector3(474.106, 122.611, -44.1036), l: new BABYLON.Vector3(473.106, 122.611, -44.1054)});
   layamaCameras.push({n: "10009", a: "369", p: new BABYLON.Vector3(220.643, 122.611, -139.964), l: new BABYLON.Vector3(220.641, 122.611, -138.964)});
   layamaCameras.push({n: "10010", a: "370", p: new BABYLON.Vector3(228.831, 122.611, 488.032), l: new BABYLON.Vector3(228.833, 122.611, 487.032)});
   layamaCameras.push({n: "10011", a: "371", p: new BABYLON.Vector3(99.9802, 119.533, 474.809), l: new BABYLON.Vector3(99.9819, 119.533, 473.809)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

