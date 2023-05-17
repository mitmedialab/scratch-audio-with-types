export = SoundBank;
declare class SoundBank {
    /**
     * A bank of sounds that can be played.
     * @constructor
     * @param {AudioEngine} audioEngine - related AudioEngine
     * @param {EffectChain} effectChainPrime - original EffectChain cloned for
     *     playing sounds
     */
    constructor(audioEngine: AudioEngine, effectChainPrime: EffectChain);
    /**
     * AudioEngine this SoundBank is related to.
     * @type {AudioEngine}
     */
    audioEngine: AudioEngine;
    /**
     * Map of ids to soundPlayers.
     * @type {object<SoundPlayer>}
     */
    soundPlayers: object;
    /**
     * Map of targets by sound id.
     * @type {Map<string, Target>}
     */
    playerTargets: Map<string, Target>;
    /**
     * Map of effect chains by sound id.
     * @type {Map<string, EffectChain}
     */
    soundEffects: Map<string, EffectChain>;
    /**
     * Original EffectChain cloned for every playing sound.
     * @type {EffectChain}
     */
    effectChainPrime: EffectChain;
    /**
     * Add a sound player instance likely from AudioEngine.decodeSoundPlayer
     * @param {SoundPlayer} soundPlayer - SoundPlayer to add
     */
    addSoundPlayer(soundPlayer: SoundPlayer): void;
    /**
     * Get a sound player by id.
     * @param {string} soundId - sound to look for
     * @returns {SoundPlayer} instance of sound player for the id
     */
    getSoundPlayer(soundId: string): SoundPlayer;
    /**
     * Get a sound EffectChain by id.
     * @param {string} sound - sound to look for an EffectChain
     * @returns {EffectChain} available EffectChain for this id
     */
    getSoundEffects(sound: string): EffectChain;
    /**
     * Play a sound.
     * @param {Target} target - Target to play for
     * @param {string} soundId - id of sound to play
     * @returns {Promise} promise that resolves when the sound finishes playback
     */
    playSound(target: Target, soundId: string): Promise<any>;
    /**
     * Set the effects (pan, pitch, and volume) from values on the given target.
     * @param {Target} target - target to set values from
     */
    setEffects(target: Target): void;
    /**
     * Stop playback of sound by id if was lasted played by the target.
     * @param {Target} target - target to check if it last played the sound
     * @param {string} soundId - id of the sound to stop
     */
    stop(target: Target, soundId: string): void;
    /**
     * Stop all sounds for all targets or a specific target.
     * @param {Target|string} target - a symbol for all targets or the target
     *     to stop sounds for
     */
    stopAllSounds(target?: Target | string): void;
    /**
     * Dispose of all EffectChains and SoundPlayers.
     */
    dispose(): void;
}
