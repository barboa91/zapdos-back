sequelize model:generate --name User --attributes userName:string,password:string,gamesPlayed:integer

sequelize model:generate --name Comments --attributes userName:string,message:string,likes:integer

sequelize model:generate --name HighScore --attributes userName:string,score:integer
