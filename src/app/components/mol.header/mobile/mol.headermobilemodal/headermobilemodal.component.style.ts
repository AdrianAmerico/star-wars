export const style = {
  position: 'absolute' as 'absolute',
  top: '0',
  left: '0',
  right: '0',
  background: ' linear-gradient(0deg, transparent, black 30%) no-repeat;',
  color: '#000',
  border: 'none',
  p: 4,
  '& div > div': {
    color: '#fff',
    ':first-child': {
      border: '1px solid white',
      color: '#fff'
    }
  }
}
