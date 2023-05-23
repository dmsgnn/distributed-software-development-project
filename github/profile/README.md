# DSD-DSec

### Prerequisites for running the application localy
- 1. [ngrok](https://ngrok.com/) or similar tool that is able to make your application accesible from external network. This is neccessary for github to be able to access the webhook on the backend.
- 2. [docker](https://www.docker.com/) and docker-compose.

### How to run
- 1. Clone frontend, tool-script, backend and .github repositories in the same folder.
- 2. Copy `docker-compose.yml` and `.env` files from the .github repository in the directory that contains the above mentioned repositories. The filesystem tree structure should look like:
    * .
        * .github/
        * backend/
        * frontend/
        * tool-script/
        * .env
        * docker-compose.yml
    
- 3. Start the ngrok tunel with the `ngrok http https://localhost:9000` command. The url specifies the backend url on the host machine.
- 4. Modify the `DSEC_BACKEND_URL_PUBLIC` variable in `.env` file. The value should be the `url` obtained in the 3rd step in the `Forrwarding url -> something` line.
- 5. Modify other neccessary values. The default ones should work for some time. The plan is to discontinue the github oauth2 app secrets in the near future. It might be neccessary to setup your own github oauth2 app and replace `DSEC_GITHUB_CLIENT_SECRET` and `DSEC_GITHUB_CLIENT_ID` variables. The settings for the github oauth2 app should be as follows:

  ![image](https://user-images.githubusercontent.com/59147446/212435411-0a1a12b6-8b81-43e0-9218-a1ae7e7d91c1.png)

- 6. If the application is to be deployed, it would be unsecure to use the default variables.
- 7. cd into the folder that contains the repositories and the `docker-compose.yml` file. Run the `docker-compose up` command. The application should be accesible on the `http://localhost` url.
- 8. Type the following address in the browser: `https://localhost:9000/api` - or similar if you changed the backend service config.
- 9. In the tab that was opened in 8th step, go to `advanced` and click `accept risk`. This is neccessary because our backend app uses self-signed certificate.
- 10. Go to http://localhost and try the application.

### NOTE:
After modifing the `DSEC_NEXT_PUBLIC_API_BASE_PATH` or `DSEC_NEXT_PUBLIC_GITHUB_REDIRECT_URL` variables. The frontend Docker image must be rebuilt. To achieve the wanted result you must first run `docker-compose rm` and then remove the frontend image using the `docker image rm *-frontend:latest` command. After that you must repeat the 7th step.

If modifications are done only to the variables used by the backend (any other variable) it is only necessary to repeat the 7th step.

If you have created some repositories but restarted ngrok and the ngrok url changed, you will not be able to run the analysis on the already existing containers because previously created webhooks point to the wrong url. The repos will need to be recreated in the app.
