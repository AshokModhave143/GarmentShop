import React, { useState, useEffect } from 'react'
import { DevSettings } from 'react-native'
import { EnvConfig } from '../app/config'

/**
 * Toggle Storybook mode, in __DEV__ mode only.
 *
 * In non-__DEV__ mode, or when Storybook isn't toggled on,
 * renders its children.
 *
 * The mode flag is persisted in async storage, which means it
 * persists across reloads/restarts - this is handy when developing
 * new components in Storybook.
 */
export function ToggleStorybook(props) {
  const [showStorybook, setShowStorybook] = useState(EnvConfig.useStorybook)
  const [StorybookUIRoot, setStorybookUIRoot] = useState(null)

  useEffect(() => {
    if (EnvConfig.useStorybookToggle && DevSettings) {
      // Add our toggle command to the menu
      DevSettings.addMenuItem('Toggle Storybook', () => {
        setShowStorybook((show) => !show)
      })
    }

    // Load the storybook UI once
    setStorybookUIRoot(() => require('./storybook').StorybookUIRoot)
  }, [])

  if (showStorybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : null
  }
  return props.children
}
