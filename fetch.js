/*TOPIC COVERED - FETCH API
-Promises
-Async/await
- API used(fakeatoreapi)
*/
// ===============================
// FETCH API - Promise Based
// ===============================

fetch('https://fakestoreapi.com/users/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data not found");
    }
    return response.json(); // convert JSON to JS object
  })
  .then((data) => {
    console.log("Promise Data:", data);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });


// ===============================
// FETCH API - Async / Await
// ===============================

async function fetchUser() {
  try {
    const response = await fetch('https://fakestoreapi.com/users/1');

    if (!response.ok) {
      throw new Error("Data not found");
    }

    const data = await response.json();
    console.log("Async/Await Data:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
//============================
//AbortController
//============================
async function fetchUserData() {
  const controller = new AbortController();
  const signal = controller.signal;

  // cancel request after 3 seconds
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 3000);
try {
    const response = await fetch(
      "https://fakestoreapi.com/users/1",
      { signal }
    );
if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch request was aborted (timeout)");
    } else {
      console.log("Error:", error.message);
    }
  } finally {
    clearTimeout(timeoutId); // cleanup
  }
}
// function call
fetchUserData();


// function call
fetchUser();


