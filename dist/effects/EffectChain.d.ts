export = EffectChain;
declare class EffectChain {
    /**
     * Chain of effects that can be applied to a group of SoundPlayers.
     * @param {AudioEngine} audioEngine - engine whose effects these belong to
     * @param {Array<Effect>} effects - array of Effect classes to construct
     */
    constructor(audioEngine: AudioEngine, effects: Array<Effect>);
    /**
     * AudioEngine whose effects these belong to.
     * @type {AudioEngine}
     */
    audioEngine: AudioEngine;
    /**
     * Node incoming connections will attach to. This node than connects to
     * the items in the chain which finally connect to some output.
     * @type {AudioNode}
     */
    inputNode: AudioNode;
    /**
     * List of Effect types to create.
     * @type {Array<Effect>}
     */
    effects: Array<Effect>;
    /**
     * List of instantiated Effects.
     * @type {Array<Effect>}
     */
    _effects: Array<Effect>;
    /**
     * First effect of this chain.
     * @type {Effect}
     */
    firstEffect: Effect;
    /**
     * Last effect of this chain.
     * @type {Effect}
     */
    lastEffect: Effect;
    /**
     * A set of players this chain is managing.
     */
    _soundPlayers: Set<any>;
    /**
     * Create a clone of the EffectChain.
     * @returns {EffectChain} a clone of this EffectChain
     */
    clone(): EffectChain;
    /**
     * Add a sound player.
     * @param {SoundPlayer} soundPlayer - a sound player to manage
     */
    addSoundPlayer(soundPlayer: SoundPlayer): void;
    /**
     * Remove a sound player.
     * @param {SoundPlayer} soundPlayer - a sound player to stop managing
     */
    removeSoundPlayer(soundPlayer: SoundPlayer): void;
    /**
     * Get the audio input node.
     * @returns {AudioNode} audio node the upstream can connect to
     */
    getInputNode(): AudioNode;
    /**
     * Connnect this player's output to another audio node.
     * @param {object} target - target whose node to should be connected
     */
    connect(target: object): void;
    target: any;
    /**
     * Array of SoundPlayers managed by this EffectChain.
     * @returns {Array<SoundPlayer>} sound players managed by this chain
     */
    getSoundPlayers(): Array<SoundPlayer>;
    /**
     * Set Effect values with named values on target.soundEffects if it exist
     * and then from target itself.
     * @param {Target} target - target to set values from
     */
    setEffectsFromTarget(target: Target): void;
    /**
     * Set an effect value by its name.
     * @param {string} effect - effect name to change
     * @param {number} value - value to set effect to
     */
    set(effect: string, value: number): void;
    /**
     * Update managed sound players with the effects on this chain.
     */
    update(): void;
    /**
     * Clear all effects to their default values.
     */
    clear(): void;
    /**
     * Dispose of all effects in this chain. Nothing is done to managed
     * SoundPlayers.
     */
    dispose(): void;
}
