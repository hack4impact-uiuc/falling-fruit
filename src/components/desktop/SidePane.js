import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import EntryDetails from './EntryDetailsWrapper'
import SidePaneSwitch from './SidePaneSwitch'

const PaneContainer = styled.div`
  padding: 20px 10px;
  padding-right: 0px;
`

const SidePane = () => (
  <PaneContainer>
    <SidePaneSwitch />
    <Switch>
      <Route path="/entry/:id">
        <EntryDetails />
      </Route>
      <Route>Side Pane Details</Route>
    </Switch>
  </PaneContainer>
)

export default SidePane
