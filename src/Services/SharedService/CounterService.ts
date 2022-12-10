export class CounterService{
    
    private atoi : number = 0
    private itoa : number = 0

    setatoi(){
        this.atoi++
        console.log("active to inactive : ",this.atoi)

    }

    setitoa(){
        this.itoa++
        console.log("inactive to active : ",this.itoa)

    }

}