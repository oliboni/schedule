'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    data: DataTypes.DATE,
    amount: DataTypes.INTEGER
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};

