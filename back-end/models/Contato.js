const Contato = (sequelize, DataTypes) => {
    return sequelize.define('Contato', {
        nome: DataTypes.STRING(40),
        email: DataTypes.STRING(40),
        telefone: DataTypes.STRING(20)
    }, {
        tableName: 'contatos'
    })
}

module.exports = Contato