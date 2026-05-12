export function createVoiceController(onVoiceCommand) {
  return {
    start() {
      return 'Voice integration stub started.'
    },
    stop() {
      return 'Voice integration stub stopped.'
    },
    simulateCommand(command = 'show weather') {
      onVoiceCommand?.(command)
      return command
    },
  }
}
