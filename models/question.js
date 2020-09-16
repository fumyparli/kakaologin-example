module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "question",
        {
            content: {
                type: DataTypes.STRING(140),
                allowNull: false,
            },
        },
        {
            timestamps: true,
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        }
    );
};
