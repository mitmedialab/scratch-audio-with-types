export = Effect;
/**
 * An effect on an AudioPlayer and all its SoundPlayers.
 */
declare class Effect {
    /**
     * @param {AudioEngine} audioEngine - audio engine this runs with
     * @param {AudioPlayer} audioPlayer - audio player this affects
     * @param {Effect} lastEffect - effect in the chain before this one
     * @constructor
     */
    constructor(audioEngine: AudioEngine, audioPlayer: AudioPlayer, lastEffect: Effect);
    audioEngine: AudioEngine;
    audioPlayer: AudioPlayer;
    lastEffect: Effect;
    value: number;
    initialized: boolean;
    inputNode: any;
    outputNode: any;
    target: any;
    /**
     * Return the name of the effect.
     * @type {string}
     */
    get name(): string;
    /**
     * Default value to set the Effect to when constructed and when clear'ed.
     * @const {number}
     */
    get DEFAULT_VALUE(): number;
    /**
     * Should the effect be connected to the audio graph?
     * The pitch effect is an example that does not need to be patched in.
     * Instead of affecting the graph it affects the player directly.
     * @return {boolean} is the effect affecting the graph?
     */
    get _isPatch(): boolean;
    /**
     * Get the input node.
     * @return {AudioNode} - audio node that is the input for this effect
     */
    getInputNode(): AudioNode;
    /**
     * Initialize the Effect.
     * Effects start out uninitialized. Then initialize when they are first set
     * with some value.
     * @throws {Error} throws when left unimplemented
     */
    initialize(): void;
    /**
     * Set the effects value.
     * @private
     * @param {number} value - new value to set effect to
     */
    private _set;
    /**
     * Set the effects value.
     * @param {number} value - new value to set effect to
     */
    set(value: number): void;
    _lastPatch: any;
    /**
     * Update the effect for changes in the audioPlayer.
     */
    update(): void;
    /**
     * Clear the value back to the default.
     */
    clear(): void;
    /**
     * Connnect this effect's output to another audio node
     * @param {object} target - target whose node to should be connected
     */
    connect(target: object): void;
    /**
     * Clean up and disconnect audio nodes.
     */
    dispose(): void;
}
