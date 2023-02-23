/*Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  show_magicians(magicianNames);