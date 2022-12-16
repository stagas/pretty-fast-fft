import { createRunner } from '../src'

const blockSize = 4096
const stepSize = 1024

const main = async () => {
  const runner = await createRunner(blockSize, stepSize)

  const buffer = await (await fetch('./test/fixtures/sound.ogg')).arrayBuffer()
  const ctx = new OfflineAudioContext(1, 1, 44100)
  const audioBuffer = await ctx.decodeAudioData(buffer)
  const floats = audioBuffer.getChannelData(0)

  const stft_magnitudes = runner.processAudio(floats)

  console.log(stft_magnitudes)
}

main()
