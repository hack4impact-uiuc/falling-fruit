import { createContext } from 'react'

/**
 * Default latitude of the map's center.
 * @constant {number}
 */
const DEFAULT_CENTER_LAT = 40.1125785

/**
 * Default longitude of the map's center.
 * @constant {number}
 */
const DEFAULT_CENTER_LNG = -88.2287926

/**
 * Default zoom level.
 * @constant {number}
 */
const DEFAULT_ZOOM = 1

/**
 * Default view state of the map.
 * @constant {Object}
 * @property {number[]} center - The latitude and longitude of the map's center
 * @property {number} zoom - The map's zoom level
 * @property {Object} bounds - The latitude and longitude of the map's NE, NW, SE, and SW corners
 */
const DEFAULT_VIEW_STATE = {
  center: { lat: DEFAULT_CENTER_LAT, lng: DEFAULT_CENTER_LNG },
  zoom: DEFAULT_ZOOM,
}

const MapContext = createContext()

export default MapContext
export { DEFAULT_VIEW_STATE }
