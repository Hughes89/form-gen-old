import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  ISettings,
  IAlert,
  setSetting,
  closeSettingAlert,
} from '../store/settings'
import { ApplicationState } from '../store'

export const useSettings = () => {
  const dispatch = useDispatch()
  const loading = useSelector(
    (state: ApplicationState): boolean => state.settings.loading
  )
  const settings = useSelector(
    (state: ApplicationState): ISettings | undefined => state.settings.data
  )
  const alerts = useSelector(
    (state: ApplicationState): IAlert[] => state.settings.alerts
  )

  const updateSetting = useCallback(
    (updatedSetting: { key: string; value: string }) => {
      dispatch(setSetting(updatedSetting))
    },
    [dispatch]
  )

  const updateEmpCode = useCallback((currentCode: string, newcode: string) => {
    console.log(currentCode, newcode)
  }, [])

  const closeAlert = useCallback(
    (index: number) => {
      dispatch(closeSettingAlert(index))
    },
    [dispatch]
  )

  return {
    loading,
    settings,
    updateSetting,
    updateEmpCode,
    alerts,
    closeAlert,
  }
}

// import { ISettings } from '../interfaces'

// export const useSettings = () => {
//   const [loading, setLoading] = useState(true)
//   const [settings, setSettings] = useState<ISettings | null>()

//   const fetchAllSettings = useCallback(async (): Promise<ISettings> => {
//     const res = await fetch(`/settings`)
//     const json: ISettings = await res.json()
//     return json
//   }, [])

//   const updateSettings = useCallback(async (settings: ISettings): Promise<ISettings> => {
//     const res = await fetch('/settings', {
//       method: 'PUT'
//     })
//     const json: ISettings = await res.json()
//     return json
//   }, [])

//   useEffect(() => {
//     (async () => {
//       setLoading(true)
//       const data: ISettings = await fetchAllSettings()
//       setSettings(data)
//       setLoading(false)
//     })()
//   }, [fetchAllSettings])

//   return {
//     loading,
//     settings,
//     updateSettings
//   }

// }
