/**
 * books.json maps names of books of the bible
 * to the number of verses (KJV) and the status
 * of our reading.
 * Statuses:
 *  - Complete
 *  - In Progress
 *  - Incomplete
 */

const books = require('./books')
export const state = books