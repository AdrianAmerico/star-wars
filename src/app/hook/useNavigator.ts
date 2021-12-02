import { useNavigate } from 'react-router-dom'
import { routes } from '../../atomic'

export const useNavigator = () => {
  const navigate = useNavigate()

  const goToPeopleMovies = (url: string) => {
    localStorage.setItem('userUrl', url)
    navigate(routes.peopleInfo)
  }
  return { goToPeopleMovies }
}
