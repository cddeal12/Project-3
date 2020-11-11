module.exports = function (sequelize, DataTypes) {
    const UserGame = sequelize.define(
      "UserGame",
      {
        user_id: DataTypes.INTEGER,
        game_id: DataTypes.INTEGER,
      },
      {
        timestamps: false,
      }
    );
    return UserGame;
  };
  