fetch("http://localhost:3000/",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Ali", age: 20 }),
    }).then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));