// Write a javascript function that takes an object as an arguments and remove all the key values of N/A, - , or "". if one of these values appears is in an array remove that single item from the array. For all keys removed create a key value pair at the end of output object with the key items_removed and the value is the count. then return the modified object.

const formatObject = (object) => {
  let items_removed = 0;
  (function recursive (object) {
    for (let key in object) {
      if (object[key] === "" || object[key] === "N/A" || object[key] === "-") {
        delete object[key];
        items_removed +=1
      } else if (Array.isArray(object[key])) {
        const newArr = object[key].filter(
          (itm) => {
            if(itm !== "" && itm !== "-" && itm !== "N/A"){
              return true
            }else{
              items_removed +=1
            }
          }
        );
        object[key] = newArr;
      } else if (typeof object[key] === "object") {
        recursive(object[key]);
      }
    }
  })(object)
  object.items_removed = items_removed
  return object;
};

const sample_obj = {
  name: { first_name: "John", middle_name: "", last_name: "Smith" },
  age: 25,
  dob: "-",
  hobbies: ["reading", "coding", "-"],
  education: { hign_school: "N/A", collage: "Yale" },
};

console.log(formatObject(sample_obj));
