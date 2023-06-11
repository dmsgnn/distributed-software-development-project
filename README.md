# DSEC: a data analyzer tool for ensuring secure software development life-cycle

This project has been developed for the "Distributed Software Development" course, attended during my Master of Science (A.Y. 2022/23) at the Polytechnic University of Milan. The highest possible final grade has been achieved: 30 cum Laude.

This project has also participated in the prestigious [SCORE 2023](https://conf.researchr.org/track/icse-2023/icse-2023-score-2023?#About) competition. The proposed project "DSEC: a data analyzer tool for ensuring secure software development life-cycle" has been awarded as first classified, receiving the [SCORE Award for Winner](/docs/SCORE_winner_certificate.pdf), during the 45th International Conference of Software Engineering (ICSE) held in Melbourne, Australia.

## Description

The aim of this project was to design and implement a web service to help developers to find security hotspots and inconsistencies in different SDLC artifacts. Project proposed and supervised by "Accenture Lab" Engineers, realized using Java Spring Boot, NodeJS and Python. More information can be found in the original [project proposal](/docs/project_proposal.pdf).

### Team and organization

The team was made of six students, half from Polytechnic University of Milan (Italy) and half from University of Zagreb (Croatia). The scrum agile framework has been followed for the software development process. This repository is a mirror of the original [organization's](/https://github.com/DSD-DSec) multiple repositories used during the project. More information about the team and the project organization, including key technical details, can be found in the [final report](/docs/final_report.pdf).

## How to run
### Prerequisites for running the application localy
1. [ngrok](https://ngrok.com/), or a similar tool which is able to make the application accessible from external network. This is necessary for GitHub to access the webhook on the backend.
2.  [docker](https://www.docker.com/), and docker-compose.

### How to run
- Clone frontend, tool-script, backend and .github repositories in the same folder.
- Copy `docker-compose.yml` and `.env` files from the .github repository in the directory that contains the above mentioned repositories. The filesystem tree structure should look like:
    * .
        * .github
        * backend
        * frontend
        * tool-script
        * .env
        * docker-compose.yml
    
- Start the ngrok tunnel with the `ngrok http https://localhost:9000` command. The url specifies the backend url on the host machine.
- Modify the `DSEC_BACKEND_URL_PUBLIC` variable in `.env` file. The value should be the `url` obtained in the third step, in the `Forwarding url -> ...` line.
- Modify other necessary values. The default ones should work for some time. The plan is to discontinue the GitHub oauth2 app secrets in the near future. It might be necessary to set up your own GitHub oauth2 app and replace `DSEC_GITHUB_CLIENT_SECRET` and `DSEC_GITHUB_CLIENT_ID` variables. The settings for the GitHub oauth2 app should be as follows:
    * **Homepage URL:** `https://localhost:9000`
    * Application description: `...`
    * **Authorization callback URL:** `https://localhost:9000/api/login/oauth2/code/github`

    Note that if the application is to be deployed, it would be unsecure to use the default variables.
  
- `cd` into the folder that contains the repositories and the `docker-compose.yml` file. Run the `docker-compose up` command. The application should be now accessible on the `http://localhost` url.
- Type the following address in the browser: `https://localhost:9000/api` - or similar if you changed the backend service config.
- In the tab that has been opened in the eight step, go to `advanced` and click `accept risk`. This is necessary because the app backend uses self-signed certificate.
- Go to `http://localhost` and try the application.

#### note

After modifying the `DSEC_NEXT_PUBLIC_API_BASE_PATH` or `DSEC_NEXT_PUBLIC_GITHUB_REDIRECT_URL` variables, the frontend Docker image must be rebuilt. 

To achieve the wanted result it is necessary to first run `docker-compose rm`, and then remove the frontend image using the `docker image rm *-frontend:latest` command. 
After that you must repeat the step number seven.

If modifications are done only to the variables used by the backend, it is only necessary to repeat the seventh step. If you have created some repositories, but restarted ngrok, and the ngrok url changed, you will not be able to run the analysis on the already existing containers because previously created webhooks point to the wrong url. For this reason, the repos will need to be recreated in the app.
