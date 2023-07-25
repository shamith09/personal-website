const fs = require("fs");
const path = require("path");
const sendMail = require("./gmail");

const main = async () => {
  const options = {
    to: "shamith09@berkeley.edu",
    subject: "Hello Shamith 🚀",
    text: "This email is sent from the command line",
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Shamith Pasula" },
      { key: "X-Application-Version", value: "v0.0.1" },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log("Message sent successfully:", messageId))
  .catch((err) => console.error(err));
