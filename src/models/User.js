const {Model, DataTypes} = require("sequelize");

//class User = Tabela de usuários no banco de dados
//extends model = Faz referência ao modelo da tabela no banco de dados
class User extends Model{
    //static = Siginifica que a função é estática, ou seja, não vai poder ter alguma alteração em sua função.
    static init(connection){
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        )
    }
}

module.exports = User;