git add .
git commit -m "Deployment changes."
git push heroku main
heroku logs --tail