// @env browser
import { createRunner } from '../src/pretty-fast-fft'

jest.setTimeout(100_000)

describe('createRunner', () => {
  it('works', async () => {
    const runner = await createRunner(4096, 1024)
    expect(runner).toBeTruthy()

    const buffer = await (await fetch('./test/fixtures/sound.ogg')).arrayBuffer()
    const ctx = new OfflineAudioContext(1, 1, 44100)
    const audioBuffer = await ctx.decodeAudioData(buffer)
    const floats = audioBuffer.getChannelData(0)
    console.log(floats.length)
    const result = runner.processAudio(floats)
    console.log(result)
  })
})
