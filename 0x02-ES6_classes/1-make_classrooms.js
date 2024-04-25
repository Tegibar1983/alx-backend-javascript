/**
 * import ClassRoom class
 */
import ClassRoom from './0-classroom.js';

/**
 * A function that creates array of classrooms with specified sizes
 * It should return object of class arrays
 */
export default function initializeRooms(){
	return [19, 20, 34].map((size) => new ClassRoom(size));
}
