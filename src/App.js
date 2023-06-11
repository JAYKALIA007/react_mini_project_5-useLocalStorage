import "./styles.css";
import useLocalStorage from "./useLocalStorage";
export default function App() {
  // const myObj = [
  //   { name: "Jane Doe" },
  //   { email: "jane@doe.com" },
  //   { dob: "26-10-1991" }
  // ];
  // useLocalStorage(myObj);
  const localStorageValues = useLocalStorage();
  console.log(localStorageValues);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        {localStorageValues &&
          localStorageValues.map((value) => {
            const key = Object.keys(value)[0];
            return (
              <div key={key}>
                <p>{JSON.stringify(value)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
