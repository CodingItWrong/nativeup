import Reactotron from 'reactotron-react-native'
import env from '../../env'
import fake from './fake'
import remote from './remote'

let api

setTimeout(() => {
  Reactotron.log(`apiDriver: ${env.apiDriver}`)
}, 0)

switch (env.apiDriver) {
  case 'fake':
    api = fake
    break
  case 'remote':
    api = remote
    break
}

export default api
