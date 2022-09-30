import { useState } from "react";
import { TileLayer, MapContainer, LayersControl } from "react-leaflet";

import RoutingControl from "./RoutingControl";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Map = () => {
  const [start] = useState([38.9072, -77.0369]);
  const [end] = useState([37.7749, -122.4194]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <MapContainer center={[37.0902, -95.7129]} zoom={3} zoomControl={false} style={{ width: "100%", height: "100%" }}>
        <RoutingControl position={"topleft"} start={start} end={end} color={"#757de8"} />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Map;
