import pffft from './vendor/pffft.simd'

export async function createRunner(blockSize = 1024, stepSize = 128) {
  const Module = await pffft()
  const nDataBytes = blockSize * Float32Array.BYTES_PER_ELEMENT
  const dataPtr = Module._malloc(nDataBytes)
  const dataHeap = new Uint8Array(Module.HEAPU8.buffer, dataPtr, nDataBytes)
  const runner = Module._pffft_runner_new(blockSize, Float32Array.BYTES_PER_ELEMENT)
  return {
    processAudio(
      samples: Float32Array,
    ) {
      const stft_magnitudes: number[][] = []

      let prevValidNumber = 0
      for (let ai = 0; ai < samples.length - blockSize; ai += stepSize) {
        const audio_block = samples.slice(ai, ai + blockSize)

        dataHeap.set(new Uint8Array(audio_block.buffer))

        // Window + forward FFT for each block
        Module._pffft_runner_transform(runner, dataHeap.byteOffset)

        const fft_result = new Float32Array(dataHeap.buffer, dataHeap.byteOffset, audio_block.length)

        //calculate magnitudes and accumulate results
        const magnitudes = new Array(blockSize * 0.5)

        for (let i = 0; i < blockSize; i += 2) {
          let result = fft_result[i] * fft_result[i] + fft_result[i + 1] * fft_result[i + 1]
          if (!Number.isFinite(result)) result = prevValidNumber
          prevValidNumber = magnitudes[(i * 0.5) | 0] = result
        }

        stft_magnitudes.push(magnitudes)
      }

      return stft_magnitudes
    },
    destroy() {
      Module._free(dataPtr)
      Module._pffft_runner_destroy(runner)
    },
  }
}
