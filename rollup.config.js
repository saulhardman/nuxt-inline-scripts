import path from 'path'

const CRITICAL_DIR = path.join(process.cwd(), 'critical')

export default [
  {
    input: path.join(CRITICAL_DIR, 'critical.js'),

    output: {
      file: path.join(CRITICAL_DIR, 'critical.min.js'),
      format: 'iife'
    }
  }
]
