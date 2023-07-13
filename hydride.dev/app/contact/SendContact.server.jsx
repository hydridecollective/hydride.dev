"use server";
export const ContactAction = async (s = {}) => {
    const { name, email, subject, service, message } = s;
    if (name === "" || !name || email === "" || !email || subject === "" || !subject || message === "" || !message) {
        return {
            status: 400,
            message: "Please fill out all required fields."
        }
    };

    const contactResponse = await fetch(`${process.env.API_URL}/api/v1/contact/send`, {
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            service,
            message
        }),
    }).then((r) => {
        if (r.status === 429) {
            return {
                status: 429,
                response: "Too Many Requests: You are being rate-limited. Please try again later."
            };
        } else {
            return r.json();
        };
    }).catch((e) => {
        return {
            status: 500,
            response: "An error occurred while sending your message."
        };
    });

    return contactResponse;
};