export = SoundPlayer;
declare class SoundPlayer extends EventEmitter {
    /**
     * Play sounds that stop without audible clipping.
     *
     * @param {AudioEngine} audioEngine - engine to play sounds on
     * @param {object} data - required data for sound playback
     * @param {string} data.id - a unique id for this sound
     * @param {ArrayBuffer} data.buffer - buffer of the sound's waveform to play
     * @constructor
     */
    constructor(audioEngine: AudioEngine, { id, buffer }: {
        id: string;
        buffer: ArrayBuffer;
    });
    /**
     * Unique sound identifier set by AudioEngine.
     * @type {string}
     */
    id: string;
    /**
     * AudioEngine creating this sound player.
     * @type {AudioEngine}
     */
    audioEngine: AudioEngine;
    /**
     * Decoded audio buffer from audio engine for playback.
     * @type {AudioBuffer}
     */
    buffer: AudioBuffer;
    /**
     * Output audio node.
     * @type {AudioNode}
     */
    outputNode: AudioNode;
    /**
     * VolumeEffect used to fade out playing sounds when stopping them.
     * @type {VolumeEffect}
     */
    volumeEffect: VolumeEffect;
    /**
     * Target engine, effect, or chain this player directly connects to.
     * @type {AudioEngine|Effect|EffectChain}
     */
    target: AudioEngine | Effect | EffectChain;
    /**
     * Internally is the SoundPlayer initialized with at least its buffer
     * source node and output node.
     * @type {boolean}
     */
    initialized: boolean;
    /**
     * Is the sound playing or starting to play?
     * @type {boolean}
     */
    isPlaying: boolean;
    /**
     * Timestamp sound is expected to be starting playback until. Once the
     * future timestamp is reached the sound is considered to be playing
     * through the audio hardware and stopping should fade out instead of
     * cutting off playback.
     * @type {number}
     */
    startingUntil: number;
    /**
     * Rate to play back the audio at.
     * @type {number}
     */
    playbackRate: number;
    /**
     * Handle any event we have told the output node to listen for.
     * @param {Event} event - dom event to handle
     */
    handleEvent(event: Event): void;
    /**
     * Is plaback currently starting?
     * @type {boolean}
     */
    get isStarting(): boolean;
    /**
     * Event listener for when playback ends.
     */
    onEnded(): void;
    /**
     * Create the buffer source node during initialization or secondary
     * playback.
     */
    _createSource(): void;
    /**
     * Initialize the player for first playback.
     */
    initialize(): void;
    /**
     * Connect the player to the engine or an effect chain.
     * @param {object} target - object to connect to
     * @returns {object} - return this sound player
     */
    connect(target: object): object;
    /**
     * Teardown the player.
     */
    dispose(): void;
    /**
     * Take the internal state of this player and create a new player from
     * that. Restore the state of this player to that before its first playback.
     *
     * The returned player can be used to stop the original playback or
     * continue it without manipulation from the original player.
     *
     * @returns {SoundPlayer} - new SoundPlayer with old state
     */
    take(): SoundPlayer;
    /**
     * Start playback for this sound.
     *
     * If the sound is already playing it will stop playback with a quick fade
     * out.
     */
    play(): void;
    /**
     * Stop playback after quickly fading out.
     */
    stop(): void;
    /**
     * Stop immediately without fading out. May cause audible clipping.
     */
    stopImmediately(): void;
    /**
     * Return a promise that resolves when the sound next finishes.
     * @returns {Promise} - resolves when the sound finishes
     */
    finished(): Promise<any>;
    /**
     * Set the sound's playback rate.
     * @param {number} value - playback rate. Default is 1.
     */
    setPlaybackRate(value: number): void;
}
import { EventEmitter } from "events";
import VolumeEffect = require("./effects/VolumeEffect");
