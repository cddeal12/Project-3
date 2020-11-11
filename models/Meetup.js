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
        }
      },
      {
        timestamps: false,
        underscored: true,
      }
    );
  
    // User.associate = function (models) {
      
    // };
  
    return User;
  };
  