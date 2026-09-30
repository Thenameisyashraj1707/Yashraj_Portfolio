import { existsSync } from 'node:fs'
import path from 'node:path'

export function publicAssetExists(publicPath: string): boolean {
  try {
    return existsSync(path.join(process.cwd(), 'public', publicPath.replace(/^\/+/, '')))
  } catch {
    return false
  }
}
