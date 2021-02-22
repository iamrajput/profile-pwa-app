import profileConfig from './profile'

export default function (data) {
  let config
  switch (data) {
    case 'profile':
      config = profileConfig
      break
    default:
      throw new Error('No matching config')
  }
  return config
}

