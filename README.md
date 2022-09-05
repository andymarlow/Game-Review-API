# Games API

## Developer Notes

## Environment Variables Creation

The npm package dotenv has been used to handle the configuration of environment variables. The variables are stored in the .env files.

- add PGDATABASE=nc_games to .env.dev
- add PGDATABASE=nc_games_test to .env.test

To set all of the environment variables from the .env file to the process.env. In the /db file require dotenv and invoke its config method. These variables should then be added to .gitignore.

## npm Install

Run "npm install" in the terminal
