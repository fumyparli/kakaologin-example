module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "user",
        {
            email: {
                type: DataTypes.STRING(40),
                allowNull: false,
                //unique: false,
            },
            nick: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            provider: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: "local",
            }, // local vs kakao
            snsId: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
        },
        {
            timestamps: true, // creating data, modifying date
            paranoid: true, // to recover, it wil be save deleting date
            charset: "utf8",
            collate: "utf8_general_ci",
        }
    );
};
