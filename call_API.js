async function sendData(data) {
    // Construct a FormData instance
    const formData = new FormData();
  
    // Add a text field
    formData.append("dname", "LLL");
    formData.append("demail", "LLL@gmail.com");
    formData.append("daddress", "Leipzig");
  
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        // Set the FormData instance as the request body
        body: formData,
      });
      console.log(await response.text());
    } catch (e) {
      console.error(e);
    }
  }
  
sendData();