'use strict';
module.exports = function(sequelize, DataTypes){
    let code = sequelize.define("code", {
        COM_CD : {
            filed: "comCd",
            type: DataTypes.STRING(32),
            unique: true,
            allowNull: false
        },
        COM_CD_NM : {
            filed: "comCdNm",
            type: DataTypes.STRING(512),
            allowNull: false
        },
        UPPER_COM_CD : {
            filed: "upperComCd",
            type: DataTypes.STRING(32),
            allowNull: true
        },
        COM_CD_LVL : {
            filed: "comCdLvl",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        COM_CD_ORD : {
            filed: "comCdOrd",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        USE_YN : {
            filed: "useYn",
            type: DataTypes.STRING(1),
            allowNull: true
        },
        creater_id : {
            filed: "creater_id",
            type: DataTypes.STRING(20),
            allowNull: true
        },
        creater_nm : {
            filed: "creater_nm",
            type: DataTypes.STRING(20),
            allowNull: true
        },
        created_at : {
            filed: "created_at",
            type: DataTypes.DATE,
            allowNull: true
        },
        updater_id : {
            filed: "updater_id",
            type: DataTypes.STRING(20),
            allowNull: true
        },
        updater_nm : {
            filed: "updater_nm",
            type: DataTypes.STRING(20),
            allowNull: true
        },
        updated_at : {
            filed: "updated_at",
            type: DataTypes.DATE,
            allowNull: true
        },
    },{
        underscored: true,
        freezeTableName: true,
        tableName: "COM_CODE"
    });
    
    return code;
}