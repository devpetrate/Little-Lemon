// api.js

export async function fetchAPI(date) {
    const apiUrl = `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.json`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching API:", error);
        throw error;
    }
}

export async function submitAPI(formData) {
    const apiUrl = `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.json`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.success; // Assuming the API returns { success: true } on success
    } catch (error) {
        console.error("Error submitting API:", error);
        throw error;
    }
}
