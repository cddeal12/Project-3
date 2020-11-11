// Require models for linking with other models
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
      "User",
      {
        user_name: {
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
  
    // User.associate = function (models) {
      
    // };
  
    return User;
  };
  