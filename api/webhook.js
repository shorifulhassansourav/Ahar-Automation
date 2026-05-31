export default function handler(req, res) {

  if (req.method === "GET") {

    const VERIFY_TOKEN = "AHAR_VERIFY_TOKEN";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (
      mode === "subscribe" &&
      token === VERIFY_TOKEN
    ) {
      return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
  }

  if (req.method === "POST") {

    console.log("Webhook Event:", req.body);

    return res.status(200).send("EVENT_RECEIVED");
  }

  res.status(405).end();
}