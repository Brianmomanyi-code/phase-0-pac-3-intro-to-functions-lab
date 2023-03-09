function shout(string){
    "Hello!".toUpperCase(); // 'HELLO!'
    'HELLO'.toLowerCase(); // 'Hello'
    return string.toUpperCase();
    
}
function whisper(string){
    'HELLO'.toLowerCase(); // 'hello'
    return string.toLowerCase();
}
function logShout(string){
    "Hello!".toUpperCase(); // 'HELLO!'
    console.log (string.toUpperCase()); 

}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  