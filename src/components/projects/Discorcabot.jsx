import React from 'react';

export default function Discorcabot() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        Discorcabot is a flexible, general purpose <a href="https://discordapp.com/">Discord</a> chat bot, written in Node.js. The bot is designed to be easily extensible with features encapsulated in an organized module system.
      </p>
      <br />
      <h4 className="label">The Process</h4>
      <p>
        Writing modules for Discorcabot proved to be a helpful experience in working with public APIs. While Discorcabot is based on <a href="https://github.com/emyarod/orcabot">Orcabot (a Node.js IRC bot that I had previously written)</a>, Discorcabot favors ES6 Promises for handling asynchronous work instead of callbacks. Discorcabot also features new modules not found in the original Orcabot, such as music playback and Twitch.tv emote support.
      </p>
      <p>
        Music playback was a fun module to write, as I did not want to limit playback support to just YouTube or SoundCloud. In addition to providing YouTube and SoundCloud links for Discorcabot to play, users can make YouTube and SoundCloud searches via Discorcabot to find the exact song they want. If their song cannot be found, Discorcabot can also play audio files attached via Discord's built in file uploader.
      </p>
      <p>
        To implement Twitch.tv emote support, Discorcabot queries a database of all Twitch.tv emotes to get the emotes and their respective codes for displaying them. The list is then cached and refreshed every 30 minutes, to keep it up to date with how often Twitch.tv updates the emotes list on their end. When Discord users are chatting in a room with Discorcabot present, Discorcabot will automatically attach the correct emotes after they have been used.
      </p>
      <p>
        Discorcabot ships with a few core modules such as Google search, language translation, music playback, and integration with services like Twitter, YouTube, Instagram, Last.fm, SoundCloud, and Twitch.tv. The best part of Discorcabot is its extensibility, which allows for customization and tailoring to specific users' needs.
      </p>
    </div>
  );
}
