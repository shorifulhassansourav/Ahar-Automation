export default function handler(req, res) {

  console.log("WhatsApp Event");

  res.status(200).json({
    success: true
  });

}