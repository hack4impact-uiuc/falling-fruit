import '@reach/tabs/styles.css'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs'
import { StyledIconBase } from '@styled-icons/styled-icon'
import styled from 'styled-components/macro'

const PageTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  height: 100%;

  [data-reach-tab-panels] {
    flex: 1;
    display: flex;

    [data-reach-tab-panel] {
      flex: 1;
    }
  }

  [data-reach-tab-list] {
    display: flex;
    height: 80px;
    background: ${({ theme }) => theme.background};
    // Moves tab buttons above home bar on iOS mobile
    padding-bottom: env(safe-area-inset-bottom, 0);

    [data-reach-tab] {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      border-top: 8px solid ${({ theme }) => theme.secondaryBackground};
      border-bottom: none;

      ${StyledIconBase} {
        display: block;
        margin: 0 auto 2px;
        height: 36px;
      }

      &:not([data-selected]) {
        ${StyledIconBase} {
          color: ${({ theme }) => theme.secondaryBackground};
        }
      }

      &[data-selected] {
        color: ${({ theme }) => theme.orange};
        border-top-color: ${({ theme }) => theme.orange};

        ${StyledIconBase} {
          color: ${({ theme }) => theme.orange};
        }
      }
    }
  }
`

export { PageTabs, Tab, TabList, TabPanel, TabPanels }
