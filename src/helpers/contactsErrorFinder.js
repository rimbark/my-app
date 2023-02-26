export function contactsErrorFinder (errors) {
  const res = {}
  const errorList = [
    'Github', 'Vk', 'Facebook',
    'Website', 'Twitter', 'Instagram',
    'Youtube', 'MainLink'
  ]

  const lowitalize = (error) => error[0].toLowerCase() + error.slice(1)

  Object.keys(errors).forEach((key) => {
    const currentError = errors[key]
    errorList.forEach((error) => {
      if (currentError.includes(error)) {
        error = lowitalize(error)
        res[error] = currentError.replace('Contact->' + error, '').trim()
      }
    })
  })
  return res
}