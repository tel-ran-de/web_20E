module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
        name: {
            type: Sequelize.STRING
        }
    },{
        tableName: "author",
        timestamps: false
    });


    return Author;
}