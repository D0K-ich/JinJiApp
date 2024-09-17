export namespace http {
	
	export class Response {
	
	
	    static createFrom(source: any = {}) {
	        return new Response(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}

}

export namespace querier {
	
	export class SimpleQuery {
	    method: string;
	    headers: {[key: string]: string};
	    url: string;
	    timeout: number;
	    body: any;
	    // Go type: url
	    proxy_url?: any;
	
	    static createFrom(source: any = {}) {
	        return new SimpleQuery(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.method = source["method"];
	        this.headers = source["headers"];
	        this.url = source["url"];
	        this.timeout = source["timeout"];
	        this.body = source["body"];
	        this.proxy_url = this.convertValues(source["proxy_url"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

