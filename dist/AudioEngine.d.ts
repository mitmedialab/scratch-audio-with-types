export = AudioEngine;
/**
 * There is a single instance of the AudioEngine. It handles global audio
 * properties and effects, loads all the audio buffers for sounds belonging to
 * sprites.
 */
declare class AudioEngine {
    constructor(audioContext?: any);
    /**
     * AudioContext to play and manipulate sounds with a graph of source
     * and effect nodes.
     * @type {AudioContext}
     */
    audioContext: AudioContext;
    /**
     * Master GainNode that all sounds plays through. Changing this node
     * will change the volume for all sounds.
     * @type {GainNode}
     */
    inputNode: GainNode;
    /**
     * a map of soundIds to audio buffers, holding sounds for all sprites
     * @type {Object<String, ArrayBuffer>}
     */
    audioBuffers: any;
    /**
     * A Loudness detector.
     * @type {Loudness}
     */
    loudness: Loudness;
    /**
     * Array of effects applied in order, left to right,
     * Left is closest to input, Right is closest to output
     */
    effects: (typeof VolumeEffect | typeof PanEffect | typeof PitchEffect)[];
    /**
     * Current time in the AudioEngine.
     * @type {number}
     */
    get currentTime(): number;
    /**
     * Names of the audio effects.
     * @enum {string}
     */
    get EFFECT_NAMES(): {
        pitch: string;
        pan: string;
    };
    /**
     * A short duration to transition audio prarameters.
     *
     * Used as a time constant for exponential transitions. A general value
     * must be large enough that it does not cute off lower frequency, or bass,
     * sounds. Human hearing lower limit is ~20Hz making a safe value 25
     * milliseconds or 0.025 seconds, where half of a 20Hz wave will play along
     * with the DECAY. Higher frequencies will play multiple waves during the
     * same amount of time and avoid clipping.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setTargetAtTime}
     * @const {number}
     */
    get DECAY_DURATION(): number;
    /**
     * Some environments cannot smoothly change parameters immediately, provide
     * a small delay before decaying.
     *
     * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=1228207}
     * @const {number}
     */
    get DECAY_WAIT(): number;
    /**
     * Get the input node.
     * @return {AudioNode} - audio node that is the input for this effect
     */
    getInputNode(): AudioNode;
    /**
     * Decode a sound, decompressing it into audio samples.
     * @param {object} sound - an object containing audio data and metadata for
     *     a sound
     * @param {Buffer} sound.data - sound data loaded from scratch-storage
     * @returns {?Promise} - a promise which will resolve to the sound id and
     *     buffer if decoded
     */
    _decodeSound(sound: {
        data: Buffer;
    }): Promise<any> | null;
    /**
     * An empty sound buffer, for use when we are unable to decode a sound file.
     * @returns {AudioBuffer} - an empty audio buffer.
     */
    _emptySound(): AudioBuffer;
    /**
     * Decode a sound, decompressing it into audio samples.
     *
     * Store a reference to it the sound in the audioBuffers dictionary,
     * indexed by soundId.
     *
     * @param {object} sound - an object containing audio data and metadata for
     *     a sound
     * @param {Buffer} sound.data - sound data loaded from scratch-storage
     * @returns {?Promise} - a promise which will resolve to the sound id
     */
    decodeSound(sound: {
        data: Buffer;
    }): Promise<any> | null;
    /**
     * Decode a sound, decompressing it into audio samples.
     *
     * Create a SoundPlayer instance that can be used to play the sound and
     * stop and fade out playback.
     *
     * @param {object} sound - an object containing audio data and metadata for
     *     a sound
     * @param {Buffer} sound.data - sound data loaded from scratch-storage
     * @returns {?Promise} - a promise which will resolve to the buffer
     */
    decodeSoundPlayer(sound: {
        data: Buffer;
    }): Promise<any> | null;
    /**
     * Get the current loudness of sound received by the microphone.
     * Sound is measured in RMS and smoothed.
     * @return {number} loudness scaled 0 to 100
     */
    getLoudness(): number;
    /**
     * Create an effect chain.
     * @returns {EffectChain} chain of effects defined by this AudioEngine
     */
    createEffectChain(): EffectChain;
    /**
     * Create a sound bank and effect chain.
     * @returns {SoundBank} a sound bank configured with an effect chain
     *     defined by this AudioEngine
     */
    createBank(): SoundBank;
}
import Loudness = require("./Loudness");
import VolumeEffect = require("./effects/VolumeEffect");
import PanEffect = require("./effects/PanEffect");
import PitchEffect = require("./effects/PitchEffect");
import EffectChain = require("./effects/EffectChain");
import SoundBank = require("./SoundBank");
