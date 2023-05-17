export = Loudness;
declare class Loudness {
    /**
     * Instrument and detect a loudness value from a local microphone.
     * @param {AudioContext} audioContext - context to create nodes from for
     *     detecting loudness
     * @constructor
     */
    constructor(audioContext: AudioContext);
    /**
     * AudioContext the mic will connect to and provide analysis of
     * @type {AudioContext}
     */
    audioContext: AudioContext;
    /**
     * Are we connecting to the mic yet?
     * @type {Boolean}
     */
    connectingToMic: boolean;
    /**
     * microphone, for measuring loudness, with a level meter analyzer
     * @type {MediaStreamSourceNode}
     */
    mic: MediaStreamSourceNode;
    /**
     * Get the current loudness of sound received by the microphone.
     * Sound is measured in RMS and smoothed.
     * Some code adapted from Tone.js: https://github.com/Tonejs/Tone.js
     * @return {number} loudness scaled 0 to 100
     */
    getLoudness(): number;
    audioStream: MediaStream;
    analyser: AnalyserNode;
    micDataArray: Float32Array;
    _lastValue: number;
}
