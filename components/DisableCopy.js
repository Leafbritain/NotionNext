import { useEffect } from 'react'

export default function DisableCopy() {
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    const handleCopy = event => {
      event.preventDefault()
      alert('嘘，请勿惊扰沉眠此处的灵魂。')
    }

    html.classList.add('forbid-copy')
    document.addEventListener('copy', handleCopy)

    return () => {
      html.classList.remove('forbid-copy')
      document.removeEventListener('copy', handleCopy)
    }
  }, [])

  return null
}
