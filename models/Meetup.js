// Require models for linking with other models
module.exports = function (sequelize, DataTypes) {
    const Meetup = sequelize.define(
      "Meetup",
      {
        meetup_name: {
          type: DataTypes.STRING,
        },
        time_info: {
            type: DataTypes.STRING,
        },
        location_info: {
            type: DataTypes.STRING,
        },
        extra_info: {
            type: DataTypes.STRING,
        },
        // owner_id:  {
        //   type: DataTypes.INTEGER,
        // }
      },
      {
        timestamps: false,
        underscored: true,
      }
    );
  
    Meetup.associate = function (models) {
      Meetup.belongsTo(models.User, {
        // through: "UserMeetup",
        foreignKey: "owner_id",
      });

      Meetup.belongsToMany(models.User, {
        through: {model: "UserMeetup", unique: false},
        foreignKey: "meetup_id",
      });
      
    };
  
    return Meetup;
  };
  