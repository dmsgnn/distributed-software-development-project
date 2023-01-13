# DSD-DSec

### Prerequisites
- 1. [ngrok](https://ngrok.com/) or similar tool that is able to make your application accesible from external network. This is neccessary for github to be able to access the webhook on the backend.
- 2. [docker](https://www.docker.com/) and docker-compose.
- 3. Cloned frontend, tool-script and .github repositories in the same folder.
- 4. "docker-compose.yml" file from the .github repository placed in the directory that contains the above mentioned repositories. The filesystem tree structure should look like:
  * .../some_folder
    * .github
    * frontend
    * tool-script
    * docker-compose.yml

### How to run
- 1. Pull the latest backend Docker image from [here](https://github.com/DSD-DSec/backend/pkgs/container/backend).
- 2. Modify the docker-compose.yml dsec-backend service so that the image version matches if neccessary.
- 3. Start the ngrok tunel with the `ngrok http https://localhost:9000` command. The url specifies the backend url on the host machine.
- 4. Modify the `DSEC_BACKEND_URL_PUBLIC` variable in .github/.env.sh file. The value should be the url obtained in the 3rd step.
- 5. Modify other neccessary values. The default ones should work for some time. The plan is to discontinue the github oauth2 app secrets in the near future. It might be neccessary to setup your own github oauth2 app and replace `DSEC_GITHUB_CLIENT_SECRET` and `DSEC_GITHUB_CLIENT_ID` variables. The settings for the github oauth2 app should be as follows:
  ![image](https://user-images.githubusercontent.com/59147446/212435411-0a1a12b6-8b81-43e0-9218-a1ae7e7d91c1.png)

- 6. If the application is to be deployed, it would be unsecure to use the default variables.
- 7. Load the environment variables specified in the ./.github/env.sh file using the `. ./.github/env.sh command`
- 8. cd into the folder that contains the repositories and the `docker-compose.yml` file. Run the `docker-compose up` command. The application should be accesible on the `http://localhost` url.
