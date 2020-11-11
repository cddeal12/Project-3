module.exports = function (sequelize, DataTypes) {
    const UserMeetup = sequelize.define(
      "UserMeetup",
      {
        meetup_id: DataTypes.INTEGER,
        attendee_id: DataTypes.INTEGER,
        owner_id: DataTypes.INTEGER,
        games_id: DataTypes.INTEGER
      },
      {
        timestamps: false,
      }
    );
    return UserMeetup;
  };
  