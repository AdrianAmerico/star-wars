import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Teste } from './drawerheader.component.style'

interface Props {
  open: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const DrawerHeader = ({ open, toggleDrawer }: Props) => {
  return (
    <Teste>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{
            background: '#000',
            color: '#fff',
            border: 'none',
            height: '100%'
          }}
        >
          <List>
            <ListItem button>
              <ListItemText/>
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Pessoas'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Naves'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Planetas'} />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Teste>
  )
}
