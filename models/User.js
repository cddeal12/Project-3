module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
      "User",
      {
        user_name: {
          type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        }
      },
      {
        timestamps: false,
        underscored: true,
      }
    );
  
    User.associate = function (models) {
        User.belongsToMany(models.Game, {
          through: "UserGame",
          foreignKey: "user_id",
        });

        User.belongsToMany(models.Meetup, {
            through: "UserMeetup",
            foreignKey: "attendee_id",
            unique: false,
        });

        User.hasMany(models.Meetup, {
            // through: "UserMeetup",
            foreignKey: "owner_id",
        });
    };
  
    return User;
  };
  