module.exports = function (sequelize, DataTypes) {
    const UserMeetup = sequelize.define(
      "UserMeetup",
      {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        meetup_id: DataTypes.INTEGER,
        attendee_id: DataTypes.INTEGER,
        game_id: DataTypes.INTEGER
      },
      {
        timestamps: false,
      }
    );
    return UserMeetup;
  };
  