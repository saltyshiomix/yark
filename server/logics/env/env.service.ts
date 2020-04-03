import fs from 'fs';
import dotenv from 'dotenv';

export class EnvService {
  private readonly config: { [key: string]: string };

  constructor(path: string) {
    this.config = dotenv.parse(fs.readFileSync(path));
  }

  public get(key: string): string {
    return this.config[key];
  }
}
