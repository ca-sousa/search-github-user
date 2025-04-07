# Search GithubUser

Project for searching Github user and their repositories, consuming the Github API. 

------
### Desktop Version
https://github.com/user-attachments/assets/161cc6e9-d610-4962-abd2-e2bc4423dd31

### Mobile Version
https://github.com/user-attachments/assets/6585db2f-68ea-463b-bdbb-bd5167284b76

------
## Features
- Search for a username on Github
- Search the repositories of the user selected
- Error Handling (General or Not Found)
- Loading Handling
- Unit Tests
- Lint and Prettier Configured

------
## How to Run 
1. Make Git clone
```bash
git clone https://github.com/ca-sousa/search-github-user.git
```

2. Install all dependecies 
```bash
npm i
```

3. Set Github Token on Environment File \
Copy the file: "src\environments\environment.default.ts" and remove ".default" from the name. \
Replace "YOUR_GITHUB_TOKEN" with your GitHub Token - you can learn more about it in the following links: \
[fine-grained](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) |
[generating an installation access token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app) |
[generating a user access token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app) \
> I used the first option, but you can select the best option for you and adapt the code for the option selected.

4. Run the application 
```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. 

------
## Technologies 
- TypeScript
- Angular 19
- Sass
- Karma and Jasmine (For testing)
