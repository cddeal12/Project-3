module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define(
      "Game",
      {
        title: {
          type: DataTypes.STRING,
        },
        bgg_id: {
            type: DataTypes.INTEGER,
        },
        thumbnail: {
          type: DataTypes.STRING,
        }
      },
      {
        timestamps: false,
        underscored: true,
      }
    );
  
    Game.associate = function (models) {
        Game.belongsToMany(models.User, {
          through: "UserGame",
          foreignKey: "game_id",
        });
    };
  
    return Game;
  };
  