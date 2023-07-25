import { google } from "googleapis";
import * as path from "path";
import * as fs from "fs";
import credentials from "./credentials.json";

// Replace with the code you received from Google
const code: string =
  "4/0AZEOvhUtg-3PklsdeIs6altUWHUsKvvRo5ysknx4WvkAHmpJM6vTF7fHHbyulonKWERU5w";
const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

oAuth2Client.getToken(code).then(({ tokens }: { tokens: unknown }) => {
  const tokenPath: string = path.join(__dirname, "token.json");
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  console.log("Access token and refresh token stored to token.json");
});
