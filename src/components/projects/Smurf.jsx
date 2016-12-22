import React from 'react';

export default function Smurf() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        The Steam profile checker is a tool to grab game and account statistics for each player in a <em>Counter-Strike: Global Offensive</em> server. It accepts the output of the <code>status</code> command, which contains the unique Steam IDs of each player on the server; and with those Steam IDs, the app makes use of Steam's public API to pull relevant stats on each player, such as account age, play time, win ratio, and ban history.
      </p>
      <br />
      <h4 className="label">The Process</h4>
      <p>
        The output of the <code>status</code> console command made the most sense to use, since it contains unique identifiers for each player, and the information is easily obtained and already formatted for copying and pasting into the profile checker application. Once the application runs, it uses regular expressions to extract the Steam IDs from the output text.
      </p>
      <p>
        Since the in-game console outputs Steam IDs in legacy format, they must first be converted to 64-bit Steam IDs before the profile checker makes requests to the Steam API. The legacy Steam ID format is <code>V = STEAM_X:Y:Z</code>, and the formula <code>W = V + (Z × 2) + Y</code> is used to convert to 64-bit. With the 64-bit Steam ID, the app can retrieve profile and game statistics from Steam's databases with a few API requests. With a bit of recursion, the application also checks which players on the server are friends with each other on Steam by comparing the friends lists of every player.
      </p>
      <p>
        Once all of the information has been retrieved, the profile checker application outputs the data in a formatted table for easy viewing.
      </p>
      <p>
        The app originally began as a simple Node.js script that output results in the command line after reading the Steam IDs from a text file. Since it became bothersome to use the script while still being in game, I learned Express.js to be able to deploy the application on the web via Heroku.
      </p>
    </div>
  );
}
