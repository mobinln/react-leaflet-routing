import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, start, end, color }: any) => {
  const instance = (L as any).Routing.control({
    position,
    waypoints: [start, end],
    // addWaypoints: false,
    // draggableWaypoints: false,
    // show: false,
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
