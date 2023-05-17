export = ADPCMSoundDecoder;
/**
 * Decode wav audio files that have been compressed with the ADPCM format.
 * This is necessary because, while web browsers have native decoders for many audio
 * formats, ADPCM is a non-standard format used by Scratch since its early days.
 * This decoder is based on code from Scratch-Flash:
 * https://github.com/LLK/scratch-flash/blob/master/src/sound/WAVFile.as
 */
declare class ADPCMSoundDecoder {
    /**
     * Data used by the decompression algorithm
     * @type {Array}
     */
    static get STEP_TABLE(): any[];
    /**
     * Data used by the decompression algorithm
     * @type {Array}
     */
    static get INDEX_TABLE(): any[];
    /**
     * @param {AudioContext} audioContext - a webAudio context
     * @constructor
     */
    constructor(audioContext: AudioContext);
    audioContext: AudioContext;
    /**
     * Decode an ADPCM sound stored in an ArrayBuffer and return a promise
     * with the decoded audio buffer.
     * @param  {ArrayBuffer} audioData - containing ADPCM encoded wav audio
     * @return {AudioBuffer} the decoded audio buffer
     */
    decode(audioData: ArrayBuffer): AudioBuffer;
    encoding: number;
    channels: number;
    samplesPerSecond: number;
    bytesPerSecond: number;
    blockAlignment: number;
    bitsPerSample: number;
    samplesPerBlock: number;
    adpcmBlockSize: number;
    /**
     * Extract a chunk of audio data from the stream, consisting of a set of audio data bytes
     * @param  {string} chunkType - the type of chunk to extract. 'data' or 'fmt' (format)
     * @param  {ArrayBufferStream} stream - an stream containing the audio data
     * @return {ArrayBufferStream} a stream containing the desired chunk
     */
    extractChunk(chunkType: string, stream: ArrayBufferStream): ArrayBufferStream;
    /**
     * Count the exact number of samples in the compressed data.
     * @param {ArrayBufferStream} compressedData - the compressed data
     * @param {number} blockSize - size of each block in the data in bytes
     * @return {number} number of samples in the compressed data
     */
    numberOfSamples(compressedData: ArrayBufferStream, blockSize: number): number;
    /**
     * Decompress sample data using the IMA ADPCM algorithm.
     * Note: Handles only one channel, 4-bits per sample.
     * @param  {ArrayBufferStream} compressedData - a stream of compressed audio samples
     * @param  {number} blockSize - the number of bytes in the stream
     * @param  {Float32Array} out - the uncompressed audio samples
     */
    imaDecompress(compressedData: ArrayBufferStream, blockSize: number, out: Float32Array): void;
}
import ArrayBufferStream = require("./ArrayBufferStream");
