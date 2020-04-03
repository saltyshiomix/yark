import ky from 'ky-universal';

export class Http {
  private readonly http: typeof ky;

  constructor() {
    this.http = ky.create({
      prefixUrl: process.env.PREFIX_URL,
      throwHttpErrors: false,
    });
  }

  public async get(url: string): Promise<Response> {
    return this.http.get(url);
  }

  public async post(url: string, data?: any): Promise<Response> {
    return this.http.post(url, { json: data });
  }

  public async put(url: string, data?: any): Promise<Response> {
    return this.http.put(url, { json: data });
  }

  public async delete(url: string): Promise<Response> {
    return this.http.delete(url);
  }
}
