/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import { routes } from '../../atomic'

export const useNavigator = () => {
  const navigate = useNavigate()

  const goToPeopleMovies = (name: string) => {
    navigate(`/people/info/${name}`)
  }
  return { goToPeopleMovies }
}
