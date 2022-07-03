export const notesModel = (sequelize, Sequelize) => {
    const Note = sequelize.define('note', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      }
    });
    return Note;
  };
  