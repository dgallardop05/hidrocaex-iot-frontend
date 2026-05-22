import AppRouter from '@/router/AppRouter'

import ServerOffline
from '@/components/system/ServerOffline'

import {
  useServerStatus,
} from '@/hooks/useServerStatus'

function App() {
    const {
      serverOffline,
    } = useServerStatus()

    if (serverOffline) {
      return <ServerOffline />
    }
  return <AppRouter />
}

export default App