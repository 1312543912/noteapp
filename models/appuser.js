module.exports = function (sequelize,DataType) {
    return sequelize.define("appuser",{
        id: { type: DataType.INTEGER, allowNull: false,primaryKey:true,autoIncrement:true},
        username:{type:DataType.String,allowNull:false},
        userpassword:{type:DataType.String,allowNull:false},
    },{underscored:true,timestamps:true,freezeTableName:true,createAt:"created_at",updatadAt:"updated_at",classMethods:classMethods});
}