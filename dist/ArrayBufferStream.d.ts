export = ArrayBufferStream;
declare class ArrayBufferStream {
    /**
     * ArrayBufferStream wraps the built-in javascript ArrayBuffer, adding the ability to access
     * data in it like a stream, tracking its position.
     * You can request to read a value from the front of the array, and it will keep track of the position
     * within the byte array, so that successive reads are consecutive.
     * The available types to read include:
     * Uint8, Uint8String, Int16, Uint16, Int32, Uint32
     * @param {ArrayBuffer} arrayBuffer - array to use as a stream
     * @param {number} start - the start position in the raw buffer. position
     * will be relative to the start value.
     * @param {number} end - the end position in the raw buffer. length and
     * bytes available will be relative to the end value.
     * @param {ArrayBufferStream} parent - if passed reuses the parent's
     * internal objects
     * @constructor
     */
    constructor(arrayBuffer: ArrayBuffer, start?: number, end?: number, { _uint8View }?: ArrayBufferStream);
    /**
     * Raw data buffer for stream to read.
     * @type {ArrayBufferStream}
     */
    arrayBuffer: ArrayBufferStream;
    /**
     * Start position in arrayBuffer. Read values are relative to the start
     * in the arrayBuffer.
     * @type {number}
     */
    start: number;
    /**
     * End position in arrayBuffer. Length and bytes available are relative
     * to the start, end, and _position in the arrayBuffer;
     * @type {number};
     */
    end: number;
    /**
     * Cached Uint8Array view of the arrayBuffer. Heavily used for reading
     * Uint8 values and Strings from the stream.
     * @type {Uint8Array}
     */
    _uint8View: Uint8Array;
    /**
     * Raw position in the arrayBuffer relative to the beginning of the
     * arrayBuffer.
     * @type {number}
     */
    _position: number;
    /**
     * Return a new ArrayBufferStream that is a slice of the existing one
     * @param  {number} length - the number of bytes of extract
     * @return {ArrayBufferStream} the extracted stream
     */
    extract(length: number): ArrayBufferStream;
    /**
     * @return {number} the length of the stream in bytes
     */
    getLength(): number;
    /**
     * @return {number} the number of bytes available after the current position in the stream
     */
    getBytesAvailable(): number;
    /**
     * Set the position to read from in the arrayBuffer.
     * @type {number}
     * @param {number} value - new value to set position to
     */
    set position(arg: number);
    /**
     * Position relative to the start value in the arrayBuffer of this
     * ArrayBufferStream.
     * @type {number}
     */
    get position(): number;
    /**
     * Read an unsigned 8 bit integer from the stream
     * @return {number} the next 8 bit integer in the stream
     */
    readUint8(): number;
    /**
     * Read a sequence of bytes of the given length and convert to a string.
     * This is a convenience method for use with short strings.
     * @param {number} length - the number of bytes to convert
     * @return {string} a String made by concatenating the chars in the input
     */
    readUint8String(length: number): string;
    /**
     * Read a 16 bit integer from the stream
     * @return {number} the next 16 bit integer in the stream
     */
    readInt16(): number;
    /**
     * Read an unsigned 16 bit integer from the stream
     * @return {number} the next unsigned 16 bit integer in the stream
     */
    readUint16(): number;
    /**
     * Read a 32 bit integer from the stream
     * @return {number} the next 32 bit integer in the stream
     */
    readInt32(): number;
    /**
     * Read an unsigned 32 bit integer from the stream
     * @return {number} the next unsigned 32 bit integer in the stream
     */
    readUint32(): number;
}
