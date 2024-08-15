// DO NOT TOUCH !!!
const isDevelop : boolean = process.env.NODE_ENV !== 'production';
enum TargetServers {Prod = "PROD", Dev = "DEV"}

class Config {
    private readonly targetBuild	: TargetServers
    private readonly targetHost		: string

    private readonly _adminToken	: string = 'abf2779c3689d365ec46e7d23e5f2acc'

    private hosts : Record<TargetServers, string> = {
        [TargetServers.Prod]	: 'djinji.net',//todo
        [TargetServers.Dev]		: '192.168.2.129:8084',
    }

    constructor() {
        this.targetBuild	= (isDevelop && import.meta.env.VITE_TARGET_SERVER === TargetServers.Dev) ? TargetServers.Dev : TargetServers.Prod
        this.targetHost		= this.hosts[this.targetBuild]
    }

    adminHttpUrl()	: string {return `http://${this.targetHost}/`}
    adminToken()	: string {return this._adminToken}
}

const config : Config = new Config()
export {config}