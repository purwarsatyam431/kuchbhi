export class user{
constructor(
    public email:string,
    public id:string,
    private _token:string,
    private _tokenEpirationDate:Date

){}

get token(){
    if(!this._tokenEpirationDate||new Date() >this._tokenEpirationDate){
        return null
    }
    return this._token
}
}