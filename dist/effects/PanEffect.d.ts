export = PanEffect;
/**
 * A pan effect, which moves the sound to the left or right between the speakers
 * Effect value of -100 puts the audio entirely on the left channel,
 * 0 centers it, 100 puts it on the right.
 */
declare class PanEffect extends Effect {
    leftGain: any;
    rightGain: any;
    channelMerger: any;
    /**
     * Set the effect value
     * @param {number} value - the new value to set the effect to
     */
    _set(value: number): void;
}
import Effect = require("./Effect");
