# experiments

Experimenting with local storage and a CI/CD pipeline


Tentative Development Process Procedure
1. Pull latest changes
2. Make local branch/create local branch from GitHub Issue
3. Do changes and whatever, create unit tests locally and run unit tests with npm test or vscode jest extension, whatever floats your boat.
4. Document your changes (Including unit tests), ex. new method headers, inline comments explaining your code if you decide to use weird syntax and your code ends up looking like it's running on black magic and people unfamiliar with that syntax have no idea what is going on.
5. Create pull request to merge into branch
   1. GitHub actions will rerun your unit tests and generate documentation, please pull the generated documentation after GitHub actions is done running. 
   2. Documentation will be the .html files in the ./docs folder in of the project root directory
6. Someone else review pull request (If it's something small like a typo you can just review yourself)
7. Resolve merge conflicts -> merge
   1. GitHub actions will rerun unit tests on merged main branch (Hasn't been implemented but it takes 5 minutes to add but I'm too tired right now)
8. Prune PR branch a few days after merge just to be safe.
9. Push to production branch manually when we got something stable going?
Throw integration testing somewhere in there and I don't know where I'm supposed to write down the actual procedure so it'll just be this slack message for now (edited) 