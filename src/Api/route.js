export async function POST(request) {
  const { name, email, message } = await request.json();

  // Simulate sending email (replace with real service like SendGrid)
  console.log(`Received message from ${name} (${email}): ${message}`);

  return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}