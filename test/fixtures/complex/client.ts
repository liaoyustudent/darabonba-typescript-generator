// This file is auto-generated, don't edit it
import Source, * as $Source from '@scope/name';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ComplexRequest extends $tea.Model {
  accessKey: string;
  body: Readable;
  strs: string[];
  header: ComplexRequestHeader;
  Num: number;
  part?: ComplexRequestPart[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      body: 'Body',
      strs: 'Strs',
      header: 'header',
      Num: 'Num',
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      body: 'Readable',
      strs: { 'type': 'array', 'itemType': 'string' },
      header: ComplexRequestHeader,
      Num: 'number',
      part: { 'type': 'array', 'itemType': ComplexRequestPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestHeader extends $tea.Model {
  content: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestPart extends $tea.Model {
  partNumber?: string;
  static names(): { [key: string]: string } {
    return {
      partNumber: 'PartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends Source {

  constructor(config: $Source.Config) {
    super(config);
  }

  async complex1(request: ComplexRequest, client: Source): Promise<$Source.RuntimeObject> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        let name = "complex";
        let mapVal = {
          test: "ok",
        };
        let version = `/${"2019-01-08"}${this._pathname}`;
        let mapAccess = this._API[version];
        request_.protocol = this._protocol;
        request_.port = 80;
        request_.method = "GET";
        request_.pathname = `/${this._pathname}`;
        request_.query = Source.query({
          date: "2019",
          access: mapAccess,
          test: mapVal["test"],
          ...request.header,
        });
        request_.body = Source.body();
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        if (true && true) {
          return null;
        } else if (true || false) {
          return new $Source.RuntimeObject({ });
        }

        client.print($tea.toMap(request), "1");
        await client.printAsync($tea.toMap(request), "1");
        await this.hello($tea.toMap(request), [
          "1",
          "2"
        ]);
        await this.hello(null, null);
        return $tea.cast<Source.RuntimeObject>({ }, new Source.RuntimeObject({}));
        await this.Complex3(null);
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async Complex2(request: ComplexRequest, str: string[], val: {[key: string ]: string}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    let name = "complex";
    let config = new $Source.Config({ });
    let client = new Source(config);
    request_.protocol = "HTTP";
    request_.port = 80;
    request_.method = "GET";
    request_.pathname = "/";
    request_.query = Source.query({
      date: "2019",
      version: "2019-01-08",
      protocol: request_.protocol,
    });
    request_.body = Source.body();
    let response_ = await $tea.doAction(request_);

    return {}
  }

  async Complex3(request: ComplexRequest): Promise<ComplexRequest> {
    let request_ = new $tea.Request();
    let name = "complex";
    request_.protocol = await this.TemplateString();
    request_.port = 80;
    request_.method = "GET";
    request_.pathname = "/";
    request_.query = Source.query({
      date: "2019",
    });
    request_.body = Source.body();
    request_.headers["host"] = "hello";
    let response_ = await $tea.doAction(request_);

    let resp = response_;
    let req = new $Source.Request({
      accesskey: request.accessKey,
      region: resp.statusMessage,
    });
    Client.array0($tea.toMap(request));
    req.accesskey = "accesskey";
    req.accesskey = request.accessKey;
    Source.parse(ComplexRequest);
    Source.array($tea.toMap(request), "1");
    await Source.asyncFunc();
    return $tea.cast<ComplexRequest>({
      ...request_.query,
    }, new ComplexRequest({}));
  }

  async hello(request: {[key: string]: any}, strs: string[]): Promise<string[]> {
    return Client.array1();
  }

  static async print(reqeust: $tea.Request, reqs: ComplexRequest[], response: $tea.Response, val: {[key: string ]: string}): Promise<$Source.Request> {
  }

  static array0(req: {[key: string]: any}): any[] {
    return [ ];
  }

  static array1(): string[] {
    return [
      "1"
    ];
  }

  async TemplateString(): Promise<string> {
    return `/${this._protocol}`;
  }

  async emptyModel(): Promise<void> {
    new ComplexRequest({ });
    new ComplexRequestHeader({ });
  }

  async tryCatch(): Promise<void> {
    try {
      let str = await this.TemplateString();
    } catch (err) {
      let error = err;
    } finally {
      let final = "ok";
    }    
    try {
      let strNoFinal = await this.TemplateString();
    } catch (e) {
      let errorNoFinal = e;
    }    
    try {
      let strNoCatch = await this.TemplateString();
    } finally {
      let finalNoCatch = "ok";
    }    
  }

}
