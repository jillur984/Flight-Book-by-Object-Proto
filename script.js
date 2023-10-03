// const flightBook={
//     flightName:"Biman Bangladesh Airlines",
//     address:"Dhaka",
//     destination:"Saudi Arabia",
//     upTime:"10AM",
//     downTime:"11PM",
//    __proto__:{
//       time(){
//         return `${this.upTime} ${this.downTime} `
//       }
//    }
     
// }
// console.log(flightBook.time())


const Flight={
    userName:"",
    flightName:"",
    address:"",
    arrival:"",
    departure:"",
    upTime:"",
    downTime:"",
    __proto__:{
        isTime:true,
        buyTicket(userName,flightName,address,arrival,departure,upTime,downTime){
            this.userName=userName, 
            this.flightName=flightName,
             this.address=address,
             this.arrival=arrival,
             this.departure=departure,
             this.upTime=upTime,
             this.downTime=downTime
        },
        signIn(userName,flightName){
            if(this.userName===userName&& this.flightName===flightName){
               this.isTime=true
               console.log("You are Authorized & Buy ticket")
            }
            else{
                console.log("You are Unauthorized & cannot buy ticket")
            this.isTime=false
            }
        }
        
        
    }
}
Flight.buyTicket("jillur.rah","Biman Bangladesh Airlines","Bangladesh","Dhaka","India","10AM","11PM")
Flight.signIn("jillur.rah","Biman Bangladesh Airlines")
if(Flight.isTime){
    console.log("flight now Avaible")
}
else{
    console.log("flight now Not avaiable")
}
console.log(Flight)