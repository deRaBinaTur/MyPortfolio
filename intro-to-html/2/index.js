const input = document.getElementById("input")



function check(){
  const value = input.value.toUpperCase().trim().split(" ").join("");
  // "anA voli milovana "
  // TOUPPER() => "ANA VOLI MILOVANA "
  // TRIM() => "ANA VOLI MILOVANA"
  // SPLIT(" ") => ["ANA", "VOLI", "MILOVANA"]
  // JOIN("") => "ANAVOLIMILOVANA"
  if (value === ""){
    alert("Please enter a string");
    return;
  }
  
  if(value === reverseString(value)){
    alert("The string is a palindrome")
  }
  else
  {

      alert("The string is not a palindrome")
    }
input.value = ""
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
input.addEventListener("keypress",  keyData => {
  if (keyData.key === "Enter") {
    check()
    
  }
})

// function check (){
//   const value = input.value
//   const reverse = reverseString(value)

  
//     if (value === reverse) {
//       alert("The string is a palindrome")
//     } else {
//       alert("The string is not a palindrome")
//     }
//   }