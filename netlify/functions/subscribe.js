// Netlify serverless function that adds a subscriber to Brevo (formerly Sendinblue).
// Requires a BREVO_API_KEY environment variable set in Netlify dashboard.
// Optionally set BREVO_LIST_ID to a specific contact list (defaults to 2).

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY environment variable is not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Newsletter service is not configured yet." }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  const { email, firstName, companyName } = data;

  if (!email || !firstName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name and email are required." }),
    };
  }

  // Simple email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please enter a valid email address." }),
    };
  }

  const listId = parseInt(process.env.BREVO_LIST_ID || "2", 10);

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        attributes: {
          FIRSTNAME: firstName.trim(),
          COMPANY: companyName ? companyName.trim() : "",
        },
        listIds: [listId],
        updateEnabled: true, // Update existing contact instead of erroring
      }),
    });

    if (response.ok || response.status === 204) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "You're subscribed! We'll be in touch." }),
      };
    }

    const errorData = await response.json().catch(() => ({}));

    // Brevo returns "duplicate_parameter" if contact exists — we already handle
    // this with updateEnabled, but just in case:
    if (errorData.code === "duplicate_parameter") {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "You're already subscribed! We'll keep you updated." }),
      };
    }

    console.error("Brevo API error:", response.status, errorData);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again later." }),
    };
  } catch (err) {
    console.error("Network error calling Brevo:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again later." }),
    };
  }
};
