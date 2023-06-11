* A custom hook to add and get values into and form the local storage respectively.

** How to use ? 

A hook named as 'useLocalStorage()' has been created which will set and get values to and from the localstorage.

*** usecases

1. ** set data to local storage **

Just pass your key value pairs as an object of arrays, the hook will parse over the array and one by one set key value pairs to the local storage.

** Syntax **

``` 
 const userInfo = [
    { name: "Jane Doe" },
    { email: "jane@doe.com" },
    { dob: "01-01-1990" }
  ];

  useLocalStorage(userInfo);

```

2. ** get data from local storage **

  Returns the key value pairs from the local storage as an array of objets.

  ** Syntax **

  ```
  const localStorageValues = useLocalStorage();

  ```



