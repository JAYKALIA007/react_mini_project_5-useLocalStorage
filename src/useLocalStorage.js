import { useState, useEffect } from "react";
const useLocalStorage = (valuesToSet) => {
  const [valuesToGet, setValuesToGet] = useState([]);

  useEffect(() => {
    //set to local storage by looping over values
    if (valuesToSet && valuesToSet.length > 0) {
      for (let entry of valuesToSet) {
        const myKey = Object.keys(entry);
        // console.log(myKey, entry[myKey]);
        localStorage.setItem(myKey, entry[myKey]);
      }
    }

    //get all data from local storage in an array of objects
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      const myObj = {};
      myObj[keys[i]] = localStorage.getItem(keys[i]);

      if (valuesToGet.some((obj) => obj.hasOwnProperty(keys[i]))) {
        setValuesToGet(updateObject(keys[i], localStorage.getItem(keys[i])));
      } else {
        setValuesToGet((prev) => [...prev, myObj]);
      }
    }
  }, []);

  const updateObject = (id, updatedName) => {
    setValuesToGet((prevState) => {
      const updatedArray =
        prevState !== undefined &&
        prevState.map((obj) => {
          if (obj.id === id) {
            return { ...obj, name: updatedName };
          }
          return obj;
        });
      return updatedArray;
    });
  };

  return valuesToGet;
};

export default useLocalStorage;
