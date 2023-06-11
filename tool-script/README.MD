## how to run the tools

run the command `docker-compose up`

## how to deploy each tool to Heroku

1. `heroku container:login`
2. `heroku container:push web --app=dsec-gitleaks`
3. `heroku container:release web --app=dsec-gitleaks`
