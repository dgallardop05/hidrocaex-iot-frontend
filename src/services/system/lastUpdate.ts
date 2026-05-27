let lastUpdate = new Date()

export const setLastUpdate = () => {
  lastUpdate = new Date()

  window.dispatchEvent(
    new Event('dashboard-update'),
  )
}

export const getLastUpdate = () =>
  lastUpdate