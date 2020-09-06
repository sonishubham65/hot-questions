/**
 * What is an Event loop?
 * The event loop is the secret of Javascript async programming.
 * It executes all the program in single thread but using illusion of multi threading under the hood.
 *
 * Call Stack
 * Event Queue
 * Event loop
 * C++ timer API (worker pool)
 *
 * Call stack keeps the track of all operation in line to be executed.
 * Event Queue is responsibe to send the tracks for the processing. It maintains the correct sequence in which all the operations should be sent for execution.
 * Event loop monitors the call stack if stack is Empty the callback sent for processing.
 * C++ timer API (Broswer API)
 * It starts the execution of async code by maintaining a seprate thread.
 */
/**
 * @description: How does an Event loop works?
 * An Event loop works in Single thread, the same thread which is used by Javascript code.
 * It registers the callback and call when task is completed.
 *
 * Worker pool: It executes the task in separate thread that executes the task in sync mode and return to event lopp. It is implemented in Libuv.
 *
 * Event loop drains the event from Queue in a phased manner.
 * 1. Process.nexttick
 * 2. Microtask added with Promise
 * 3. Timers
 * 4. Setimmidiate
 * 5. Closed handlers
 */

/**
* Call Stack (always need to wait to be empty for next execution, non blocking)
* Callback Queue (when work is done by timer the push in queue)
* Event loop (Monitor stack and push the callback to call stack)
* C++ timers API that handles timers (workers)
*/


