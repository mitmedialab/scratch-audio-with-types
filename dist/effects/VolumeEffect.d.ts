export = VolumeEffect;
/**
 * Affect the volume of an effect chain.
 */
declare class VolumeEffect extends Effect {
    /**
     * Set the effects value.
     * @private
     * @param {number} value - new value to set effect to
     */
    private _set;
}
import Effect = require("./Effect");
