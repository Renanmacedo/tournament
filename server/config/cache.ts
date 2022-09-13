import NodeCache from 'node-cache'

class ApplicationCache<T> {
    public static TTL: number = 60 * 60;
    private cache: NodeCache;
    constructor(ttl: number = ApplicationCache.TTL ) {
        this.cache = new NodeCache({ stdTTL: ttl});
    }
    public updateCache(key: string, data: T, newTTL?: number) {
        if(!this.exist(key)) return false;

        if(newTTL){
            this.cache.ttl(newTTL)
        }
        this.cache.set('key', data)
    }
    public save<T>(key: string, data: T, ttl?: number) {
        this.cache.set(key, data);
    }
    public exist(key: string): boolean {
        return typeof this.cache.get(key) !== 'undefined'
    }
    public getCache(key: string): T {
        return this.cache.get(key) as T
    }
}

export default ApplicationCache