class stopWatch {
  constructor(obj = {}){
    this.start = obj.start,
    this.end = obj.end,
    this.duration = parseInt (obj.end)- parseInt(obj.start)
  }
  getTimeStart(){
    console.log(`stopwatch start at ${this.start}`);
    
  }
  getStop(){
    console.log(`stopwatch stop at ${this.end}`);
    
  }
  getDurasi(){
    console.log(`duration time is ${this.duration}`);
    
  }
}
const getStart = new stopWatch ({
  start : new Date().toLocaleString('en-US', {timeZone:'Asia/Jakarta',hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
  end : new Date().toLocaleString('en-US', {timeZone:'Asia/Tokyo', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}),
  
  duration : {}

})
//console.log(getStart);

getStart.getTimeStart()
getStart.getStop()
getStart.getDurasi()

