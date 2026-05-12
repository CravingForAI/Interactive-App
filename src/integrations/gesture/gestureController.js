export function createGestureController(onGesture) {
  return {
    start() {
      return 'Gesture integration stub started.'
    },
    stop() {
      return 'Gesture integration stub stopped.'
    },
    simulateGesture(gestureName = 'open_palm') {
      onGesture?.(gestureName)
      return gestureName
    },
  }
}
