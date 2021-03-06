import {MessageResponse} from  './sockerResp'
import {SqlInterface, SqlSchema} from  './sql'
import {LeveledLogMethod, WinstonInter, Wso} from  './winston'
import {LoginSchema, UsuarioSchema} from  './usuario'
import WinstonLog from '../setting/winston'
import {Idominios} from './bcostos.interface'
const {_console} = new WinstonLog()


export {
    MessageResponse,
    SqlInterface,
    SqlSchema,
    LeveledLogMethod,
    WinstonInter,
    Wso,
    LoginSchema,
    UsuarioSchema,
    Idominios,
    _console
}