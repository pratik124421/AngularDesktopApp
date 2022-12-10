export class ServerModel{
    public name:string;
    public ip:string;
    public location:string
    constructor(name:string,ip:string,location:string){
        this.name=name
        this.ip=ip
        this.location=location
    }
}